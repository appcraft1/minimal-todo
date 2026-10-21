package com.appcraft.minimaltodo;

import android.Manifest;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.media.AudioAttributes;
import android.media.AudioManager;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
import androidx.core.content.ContextCompat;

public class MainActivity extends AppCompatActivity {
    private WebView webView;
    private ValueCallback<Uri[]> filePathCallback;
    private static final int FILE_CHOOSER_REQUEST_CODE = 1001;

    // Notification Channel IDs
    public static final String REMINDERS_CHANNEL_ID = "minimal_todo_reminders";
    public static final String ALARM_CHANNEL_ID = "minimal_todo_activity_alarm";
    public static final String PINNED_CHANNEL_ID = "minimal_todo_pinned_bento";
    public static final int PINNED_NOTIF_ID = 9999;

    // ==========================================================
    // CLOUD DEPLOYMENT URL (AUTO-UPDATE OTA)
    // ==========================================================
    public static final String CLOUD_WEB_URL = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        createNotificationChannels();

        webView = new WebView(this);
        setContentView(webView);

        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setAllowFileAccess(true);
        webSettings.setAllowContentAccess(true);
        webSettings.setDatabaseEnabled(true);

        webView.addJavascriptInterface(new NativeNotificationBridge(this), "AndroidNativeNotification");

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
                if (CLOUD_WEB_URL != null && !CLOUD_WEB_URL.trim().isEmpty() && failingUrl != null && !failingUrl.startsWith("file:///")) {
                    view.loadUrl("file:///android_asset/index.html");
                }
            }
        });

        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onShowFileChooser(WebView webView, ValueCallback<Uri[]> filePathCallback, FileChooserParams fileChooserParams) {
                if (MainActivity.this.filePathCallback != null) {
                    MainActivity.this.filePathCallback.onReceiveValue(null);
                }
                MainActivity.this.filePathCallback = filePathCallback;

                Intent intent = fileChooserParams.createIntent();
                try {
                    startActivityForResult(intent, FILE_CHOOSER_REQUEST_CODE);
                } catch (Exception e) {
                    MainActivity.this.filePathCallback = null;
                    return false;
                }
                return true;
            }
        });

        if (CLOUD_WEB_URL != null && !CLOUD_WEB_URL.trim().isEmpty()) {
            webView.loadUrl(CLOUD_WEB_URL);
        } else {
            webView.loadUrl("file:///android_asset/index.html");
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            if (ContextCompat.checkSelfPermission(this, Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
                ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.POST_NOTIFICATIONS}, 101);
            }
        }
    }

    private void createNotificationChannels() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationManager notificationManager = getSystemService(NotificationManager.class);
            if (notificationManager == null) return;

            // 1. Alarm-Level Channel (Mengabaikan volume rendah / mode dering sepi menggunakan stream alarm)
            CharSequence alarmName = "Alarm & Pengingat Aktivitas Utama";
            String alarmDesc = "Notifikasi aktivitas prioritas tinggi bersuara alarm yang mudah dimatikan";
            int alarmImportance = NotificationManager.IMPORTANCE_HIGH;
            NotificationChannel alarmChannel = new NotificationChannel(ALARM_CHANNEL_ID, alarmName, alarmImportance);
            alarmChannel.setDescription(alarmDesc);

            Uri alarmSound = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
            if (alarmSound == null) {
                alarmSound = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_ALARM);
            }

            AudioAttributes alarmAudioAttributes = new AudioAttributes.Builder()
                .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                .setUsage(AudioAttributes.USAGE_ALARM)
                .build();

            alarmChannel.setSound(alarmSound, alarmAudioAttributes);
            alarmChannel.enableVibration(true);
            alarmChannel.setVibrationPattern(new long[]{0, 350, 180, 350});
            alarmChannel.setBypassDnd(true);
            alarmChannel.setLockscreenVisibility(NotificationCompat.VISIBILITY_PUBLIC);
            notificationManager.createNotificationChannel(alarmChannel);

            // 2. Standard Channel (Fallback)
            NotificationChannel standardChannel = new NotificationChannel(
                REMINDERS_CHANNEL_ID,
                "Pengingat Rutinitas Harian",
                NotificationManager.IMPORTANCE_HIGH
            );
            standardChannel.enableVibration(true);
            notificationManager.createNotificationChannel(standardChannel);

            // 3. Ongoing Pinned Bento Channel (Disematkan di notif atas HP secara hening & rapi)
            NotificationChannel pinnedChannel = new NotificationChannel(
                PINNED_CHANNEL_ID,
                "Bento Tersemat di Bilah Notifikasi",
                NotificationManager.IMPORTANCE_LOW
            );
            pinnedChannel.setDescription("Widget ringkasan bento yang selalu tersemat di bar atas HP");
            pinnedChannel.enableVibration(false);
            pinnedChannel.setSound(null, null);
            notificationManager.createNotificationChannel(pinnedChannel);
        }
    }

    public class NativeNotificationBridge {
        private final Context context;

        public NativeNotificationBridge(Context context) {
            this.context = context;
        }

        @JavascriptInterface
        public boolean hasNotificationPermission() {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                return ContextCompat.checkSelfPermission(context, Manifest.permission.POST_NOTIFICATIONS) == PackageManager.PERMISSION_GRANTED;
            }
            return NotificationManagerCompat.from(context).areNotificationsEnabled();
        }

        @JavascriptInterface
        public void requestNotificationPermission() {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                if (ContextCompat.checkSelfPermission(MainActivity.this, Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
                    ActivityCompat.requestPermissions(MainActivity.this, new String[]{Manifest.permission.POST_NOTIFICATIONS}, 101);
                }
            }
        }

        @JavascriptInterface
        public void sendNotification(String title, String message) {
            try {
                int notifId = (int) (System.currentTimeMillis() % 100000);

                // Intent ketika notifikasi diklik: Buka aplikasi
                Intent openIntent = new Intent(context, MainActivity.class);
                openIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
                PendingIntent pendingOpenIntent = PendingIntent.getActivity(
                    context, notifId, openIntent,
                    PendingIntent.FLAG_UPDATE_CURRENT | (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0)
                );

                // Intent Tombol 1-Tap "Tutup" langsung pada bilah notifikasi agar tidak ribet mematikan
                Intent dismissIntent = new Intent(context, NotificationDismissReceiver.class);
                dismissIntent.setAction(NotificationDismissReceiver.ACTION_DISMISS);
                dismissIntent.putExtra(NotificationDismissReceiver.EXTRA_NOTIFICATION_ID, notifId);
                PendingIntent pendingDismissIntent = PendingIntent.getBroadcast(
                    context, notifId + 1, dismissIntent,
                    PendingIntent.FLAG_UPDATE_CURRENT | (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0)
                );

                Uri alarmSound = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
                if (alarmSound == null) {
                    alarmSound = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_ALARM);
                }

                NotificationCompat.Builder builder = new NotificationCompat.Builder(context, ALARM_CHANNEL_ID)
                    .setSmallIcon(android.R.drawable.ic_dialog_info)
                    .setContentTitle(title)
                    .setContentText(message)
                    .setStyle(new NotificationCompat.BigTextStyle().bigText(message))
                    .setCategory(NotificationCompat.CATEGORY_ALARM)
                    .setPriority(NotificationCompat.PRIORITY_MAX)
                    .setSound(alarmSound, AudioManager.STREAM_ALARM)
                    .setVibrate(new long[]{0, 350, 180, 350})
                    .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
                    .setAutoCancel(true)
                    .setContentIntent(pendingOpenIntent)
                    // Tombol 1-Tap "Tutup" agar praktis dimatikan tanpa ribet
                    .addAction(android.R.drawable.ic_menu_close_clear_cancel, "Tutup", pendingDismissIntent)
                    .addAction(android.R.drawable.ic_menu_view, "Buka", pendingOpenIntent);

                NotificationManagerCompat notificationManager = NotificationManagerCompat.from(context);
                if (Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU || ContextCompat.checkSelfPermission(context, Manifest.permission.POST_NOTIFICATIONS) == PackageManager.PERMISSION_GRANTED) {
                    notificationManager.notify(notifId, builder.build());
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        @JavascriptInterface
        public void updateBentoWidget(String streakText, int completedCount, int totalCount) {
            try {
                BentoWidgetProvider.updateWidgetData(context, streakText, completedCount, totalCount);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        @JavascriptInterface
        public void updatePinnedNotification(boolean enabled, String title, String summary, String habitsListText) {
            try {
                NotificationManagerCompat notificationManager = NotificationManagerCompat.from(context);

                if (!enabled) {
                    notificationManager.cancel(PINNED_NOTIF_ID);
                    return;
                }

                Intent openIntent = new Intent(context, MainActivity.class);
                openIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
                PendingIntent pendingOpenIntent = PendingIntent.getActivity(
                    context, 8888, openIntent,
                    PendingIntent.FLAG_UPDATE_CURRENT | (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0)
                );

                String formattedBody = (habitsListText != null && !habitsListText.trim().isEmpty())
                    ? summary + "\n\n" + habitsListText
                    : summary;

                NotificationCompat.Builder builder = new NotificationCompat.Builder(context, PINNED_CHANNEL_ID)
                    .setSmallIcon(android.R.drawable.ic_menu_agenda)
                    .setContentTitle(title != null ? title : "Minimal Todo • Bento Hari Ini")
                    .setContentText(summary)
                    .setStyle(new NotificationCompat.BigTextStyle().bigText(formattedBody))
                    .setOngoing(true) // Tersemat permanen di status bar notifikasi atas
                    .setOnlyAlertOnce(true)
                    .setShowWhen(false)
                    .setPriority(NotificationCompat.PRIORITY_LOW)
                    .setContentIntent(pendingOpenIntent)
                    .addAction(android.R.drawable.ic_menu_view, "Buka Beranda", pendingOpenIntent);

                if (Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU || ContextCompat.checkSelfPermission(context, Manifest.permission.POST_NOTIFICATIONS) == PackageManager.PERMISSION_GRANTED) {
                    notificationManager.notify(PINNED_NOTIF_ID, builder.build());
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == FILE_CHOOSER_REQUEST_CODE) {
            if (filePathCallback != null) {
                Uri[] results = null;
                if (resultCode == RESULT_OK && data != null) {
                    if (data.getData() != null) {
                        results = new Uri[]{data.getData()};
                    } else if (data.getClipData() != null) {
                        int count = data.getClipData().getItemCount();
                        results = new Uri[count];
                        for (int i = 0; i < count; i++) {
                            results[i] = data.getClipData().getItemAt(i).getUri();
                        }
                    }
                }
                filePathCallback.onReceiveValue(results);
                filePathCallback = null;
            }
        }
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
