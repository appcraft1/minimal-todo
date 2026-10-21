@echo off
title MINIMAL TODO - BUILD APK ANDROID NATIVE
color 0A

set "ROOT_DIR=%~dp0"
echo ==============================================================================
echo       MINIMAL TODO - PEMBUAT FILE APK ANDROID RESMI (v1.1.1)
echo       Target Output : Minimal Todo.apk
echo ==============================================================================
echo.

cd /d "%ROOT_DIR%"

:: 1. Sinkronisasi Web Assets ke folder Android Assets
echo [1/5] Menyinkronkan file aset antarmuka dan logo...
if not exist "android\app\src\main\assets" mkdir "android\app\src\main\assets"
copy /y "index.html" "android\app\src\main\assets\index.html" >nul
copy /y "style.css" "android\app\src\main\assets\style.css" >nul
copy /y "app.js" "android\app\src\main\assets\app.js" >nul
if exist "logo.svg" copy /y "logo.svg" "android\app\src\main\assets\logo.svg" >nul
if exist "manifest.json" copy /y "manifest.json" "android\app\src\main\assets\manifest.json" >nul
if exist "version.json" copy /y "version.json" "android\app\src\main\assets\version.json" >nul
if exist "updater.js" copy /y "updater.js" "android\app\src\main\assets\updater.js" >nul
if exist "sw.js" copy /y "sw.js" "android\app\src\main\assets\sw.js" >nul
if exist "firebase-messaging-sw.js" copy /y "firebase-messaging-sw.js" "android\app\src\main\assets\firebase-messaging-sw.js" >nul
echo   -^> Sukses menyalin aset web ke folder native Android assets.

:: 2. Pembersihan resource duplikat yang memicu crash
if exist "android\app\src\main\res\values\themes.xml" del /f /q "android\app\src\main\res\values\themes.xml" >nul 2>nul

:: 3. Pemeriksaan gradle-wrapper.jar
if not exist "android\gradle\wrapper" mkdir "android\gradle\wrapper"
if not exist "android\gradle\wrapper\gradle-wrapper.jar" (
    echo   -^> gradle-wrapper.jar belum ada, memulihkan otomatis...
    call :restore_jar
)

:: 4. Deteksi Android SDK
echo.
echo [2/5] Memeriksa Android SDK...
set "SDK_DIR="
if defined ANDROID_HOME set "SDK_DIR=%ANDROID_HOME%"
if not defined SDK_DIR if defined ANDROID_SDK_ROOT set "SDK_DIR=%ANDROID_SDK_ROOT%"
if not defined SDK_DIR if exist "%LOCALAPPDATA%\Android\Sdk" set "SDK_DIR=%LOCALAPPDATA%\Android\Sdk"

if defined SDK_DIR (
    echo   -^> Android SDK terdeteksi di: %SDK_DIR%
    echo sdk.dir=%SDK_DIR:\=\\%> "android\local.properties"
) else (
    echo   [INFO] Android SDK tidak ditemukan di path default.
)

:: 5. Deteksi Java JDK
echo.
echo [3/5] Memeriksa Java Development Kit (JDK)...
where java >nul 2>nul
if %errorlevel% equ 0 (
    echo   -^> Java JDK terdeteksi di sistem PATH.
    goto :check_studio
)

if exist "C:\Program Files\Android\Android Studio\jbr\bin\java.exe" (
    set "JAVA_HOME=C:\Program Files\Android\Android Studio\jbr"
    set "PATH=C:\Program Files\Android\Android Studio\jbr\bin;%PATH%"
    echo   -^> Menggunakan Java bawaan Android Studio: %JAVA_HOME%
    goto :check_studio
)
if exist "C:\Program Files\Android\Android Studio\jre\bin\java.exe" (
    set "JAVA_HOME=C:\Program Files\Android\Android Studio\jre"
    set "PATH=C:\Program Files\Android\Android Studio\jre\bin;%PATH%"
    echo   -^> Menggunakan Java JRE bawaan Android Studio: %JAVA_HOME%
    goto :check_studio
)
echo   [INFO] Perintah 'java' belum ada di sistem PATH.

:check_studio
echo.
echo [4/5] Memeriksa ketersediaan Android Studio...
set "STUDIO_EXE="
if exist "C:\Program Files\Android\Android Studio\bin\studio64.exe" set "STUDIO_EXE=C:\Program Files\Android\Android Studio\bin\studio64.exe"
if not defined STUDIO_EXE if exist "%LOCALAPPDATA%\Programs\Android Studio\bin\studio64.exe" set "STUDIO_EXE=%LOCALAPPDATA%\Programs\Android Studio\bin\studio64.exe"

if defined STUDIO_EXE (
    echo   -^> Android Studio ditemukan di: %STUDIO_EXE%
) else (
    echo   [INFO] Android Studio executable belum terdeteksi.
)

:: 6. Proses Kompilasi APK
echo.
echo [5/5] Mengoptimalkan memori RAM dan memulai kompilasi APK...
if not exist "android\gradlew.bat" goto :build_fail

:: Bersihkan cache APK lama agar tidak ada file kadaluarsa
del /f /q "android\app\build\outputs\apk\debug\*.apk" >nul 2>nul
del /f /q "%USERPROFILE%\.android_builds\minimal_todo\app\outputs\apk\debug\*.apk" >nul 2>nul

cd /d "%ROOT_DIR%android"

echo   -^> Menghentikan daemon lama untuk membebaskan memori RAM...
call gradlew.bat --stop >nul 2>nul

echo   -> Menjalankan kompilasi APK (clean build fresh)...
call gradlew.bat clean assembleDebug
set "GRADLE_STATUS=%ERRORLEVEL%"

cd /d "%ROOT_DIR%"

if %GRADLE_STATUS% neq 0 (
    echo.
    echo ==============================================================================
    echo  [ERROR] Kompilasi Gradle gagal dengan kode error: %GRADLE_STATUS%
    echo ==============================================================================
    goto :build_fail
)

:: Salin hasil build APK yang baru
if exist "android\app\build\outputs\apk\debug\app-debug.apk" (
    del /f /q "Minimal Todo.apk" >nul 2>nul
    del /f /q "..\Minimal Todo.apk" >nul 2>nul
    copy /y "android\app\build\outputs\apk\debug\app-debug.apk" "Minimal Todo.apk" >nul
    copy /y "android\app\build\outputs\apk\debug\app-debug.apk" "..\Minimal Todo.apk" >nul
    powershell -NoProfile -Command "(Get-Item 'Minimal Todo.apk').LastWriteTime = Get-Date; if (Test-Path '..\Minimal Todo.apk') { (Get-Item '..\Minimal Todo.apk').LastWriteTime = Get-Date }" >nul 2>nul
    goto :build_success
)

set "CACHE_BUILD=%USERPROFILE%\.android_builds\minimal_todo\app\outputs\apk"
if exist "%CACHE_BUILD%\debug\app-debug.apk" (
    del /f /q "Minimal Todo.apk" >nul 2>nul
    del /f /q "..\Minimal Todo.apk" >nul 2>nul
    copy /y "%CACHE_BUILD%\debug\app-debug.apk" "Minimal Todo.apk" >nul
    copy /y "%CACHE_BUILD%\debug\app-debug.apk" "..\Minimal Todo.apk" >nul
    powershell -NoProfile -Command "(Get-Item 'Minimal Todo.apk').LastWriteTime = Get-Date; if (Test-Path '..\Minimal Todo.apk') { (Get-Item '..\Minimal Todo.apk').LastWriteTime = Get-Date }" >nul 2>nul
    goto :build_success
)

:build_fail
echo.
echo ==============================================================================
echo  KOMPILASI APK BELUM BERHASIL.
echo ==============================================================================
echo  Silakan periksa pesan error kompilasi di atas.
goto :finish

:build_success
echo.
echo ==============================================================================
echo  SELAMAT! FILE APK TERBARU TELAH BERHASIL DIBUAT HARI INI:
echo  1. %ROOT_DIR%Minimal Todo.apk
echo  2. %ROOT_DIR%..\Minimal Todo.apk
echo ==============================================================================
echo  File APK sudah siap! Tinggal kirim ke HP Android Anda dan langsung update.
echo ==============================================================================

:finish
echo.
echo Selesai. Silakan tekan tombol apa saja untuk menutup jendela ini...
pause >nul
exit /b 0

:: SUBROUTINE: Pemulihan gradle-wrapper.jar
:restore_jar
if exist "%USERPROFILE%\.gradle\wrapper\dists" (
    for /r "%USERPROFILE%\.gradle\wrapper\dists" %%f in (gradle-wrapper.jar) do (
        copy /y "%%f" "android\gradle\wrapper\gradle-wrapper.jar" >nul 2>nul
        if exist "android\gradle\wrapper\gradle-wrapper.jar" (
            echo   -^> Berhasil memulihkan gradle-wrapper.jar dari cache Gradle.
            goto :eof
        )
    )
)
if exist "C:\Program Files\Android" (
    for /r "C:\Program Files\Android" %%f in (gradle-wrapper.jar) do (
        copy /y "%%f" "android\gradle\wrapper\gradle-wrapper.jar" >nul 2>nul
        if exist "android\gradle\wrapper\gradle-wrapper.jar" (
            echo   -^> Berhasil memulihkan gradle-wrapper.jar dari Android Studio.
            goto :eof
        )
    )
)
echo   -^> Mengunduh gradle-wrapper.jar resmi (60 KB)...
curl.exe -fSL "https://raw.githubusercontent.com/gradle/gradle/v8.2.0/gradle/wrapper/gradle-wrapper.jar" -o "android\gradle\wrapper\gradle-wrapper.jar"
goto :eof
