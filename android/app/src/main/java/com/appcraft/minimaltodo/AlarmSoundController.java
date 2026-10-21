package com.appcraft.minimaltodo;

import android.content.Context;
import android.media.AudioAttributes;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.os.VibrationEffect;
import android.os.Vibrator;

public class AlarmSoundController {

    private static MediaPlayer activePlayer = null;
    private static Ringtone activeRingtone = null;
    private static Vibrator activeVibrator = null;
    private static boolean isPlaying = false;

    public static synchronized void startAlarm(Context context) {
        stopAlarm(context); // Pastikan alarm sebelumnya dimatikan dulu

        // 1. Putar Suara Alarm Loop Berkelanjutan (STREAM_ALARM)
        try {
            Uri alarmUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_ALARM);
            if (alarmUri == null) {
                alarmUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
            }
            if (alarmUri == null) {
                alarmUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_RINGTONE);
            }

            activePlayer = new MediaPlayer();
            activePlayer.setDataSource(context, alarmUri);

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                activePlayer.setAudioAttributes(new AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_ALARM)
                    .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                    .build());
            } else {
                activePlayer.setAudioStreamType(AudioManager.STREAM_ALARM);
            }

            activePlayer.setLooping(true); // <--- BERBUNYI TERUS-MENERUS SAMPAI DITUTUP
            activePlayer.prepare();
            activePlayer.start();
            isPlaying = true;
        } catch (Exception e) {
            // Fallback ke RingtoneManager jika MediaPlayer perangkat sedang terkunci
            try {
                Uri alert = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_ALARM);
                activeRingtone = RingtoneManager.getRingtone(context, alert);
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
                    activeRingtone.setLooping(true);
                }
                activeRingtone.play();
                isPlaying = true;
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }

        // 2. Getaran Loop Berkelanjutan
        try {
            activeVibrator = (Vibrator) context.getSystemService(Context.VIBRATOR_SERVICE);
            if (activeVibrator != null && activeVibrator.hasVibrator()) {
                long[] pattern = new long[]{0, 600, 300, 600, 300}; // getar 600ms, jeda 300ms, berulang
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    activeVibrator.vibrate(VibrationEffect.createWaveform(pattern, 0)); // 0 = index pengulangan (loop)
                } else {
                    activeVibrator.vibrate(pattern, 0);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static synchronized void stopAlarm(Context context) {
        try {
            if (activePlayer != null) {
                if (activePlayer.isPlaying()) {
                    activePlayer.stop();
                }
                activePlayer.release();
                activePlayer = null;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        try {
            if (activeRingtone != null && activeRingtone.isPlaying()) {
                activeRingtone.stop();
                activeRingtone = null;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        try {
            if (activeVibrator != null) {
                activeVibrator.cancel();
                activeVibrator = null;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        isPlaying = false;
    }

    public static boolean isAlarmPlaying() {
        return isPlaying;
    }
}
