package com.appcraft.minimaltodo;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import androidx.core.app.NotificationManagerCompat;

/**
 * Receiver untuk tombol 1-tap "Tutup" pada notifikasi alarm aktivitas,
 * sehingga pengguna dapat mematikan/menghilangkan notifikasi secara instan tanpa ribet.
 */
public class NotificationDismissReceiver extends BroadcastReceiver {
    public static final String ACTION_DISMISS = "com.appcraft.minimaltodo.ACTION_DISMISS";
    public static final String EXTRA_NOTIFICATION_ID = "notification_id";

    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent != null && ACTION_DISMISS.equals(intent.getAction())) {
            // Hentikan suara dan getaran alarm yang sedang berputar (loop)
            AlarmSoundController.stopAlarm(context);

            int notifId = intent.getIntExtra(EXTRA_NOTIFICATION_ID, -1);
            if (notifId != -1) {
                NotificationManagerCompat.from(context).cancel(notifId);
            }
        }
    }
}
