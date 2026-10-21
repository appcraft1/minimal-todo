@echo off
title MINIMAL TODO - PUSH KE GITHUB
color 0B

set "ROOT_DIR=%~dp0"
cd /d "%ROOT_DIR%"

echo ==============================================================================
echo       MINIMAL TODO - SINKRONISASI KE GITHUB (v1.1.1)
echo       Target Repo : https://github.com/appcraft1/minimal-todo.git
echo ==============================================================================
echo.

echo [1/3] Menambahkan seluruh file perubahan...
git add -A

echo.
echo [2/3] Membuat commit pembaruan v1.1.1...
git commit -m "Update v1.1.1: Dynamic Habit Bento Cards on Android Widget, Continuous Looping Alarm until Dismissed, and Ultra-Premium Instagram Studio Redesign (Overlay & Outside)"

echo.
echo [3/3] Mengunggah (push) ke GitHub branch main...
git push origin main

echo.
if %errorlevel% equ 0 (
    echo ==============================================================================
    echo [SUKSES] Seluruh pembaruan berhasil di-push ke GitHub!
    echo URL: https://github.com/appcraft1/minimal-todo
    echo ==============================================================================
) else (
    echo ==============================================================================
    echo [INFO] Periksa koneksi internet atau autentikasi akun GitHub Anda.
    echo ==============================================================================
)
echo.
pause
