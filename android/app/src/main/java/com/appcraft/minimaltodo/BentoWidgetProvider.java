package com.appcraft.minimaltodo;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;
import android.os.Bundle;
import android.widget.RemoteViews;

public class BentoWidgetProvider extends AppWidgetProvider {

    private static final String PREFS_NAME = "bento_widget_prefs";
    private static final String KEY_STREAK = "streak";
    private static final String KEY_COMPLETED = "completed";
    private static final String KEY_TOTAL = "total";

    @Override
    public void onUpdate(Context context, AppWidgetManager appWidgetManager, int[] appWidgetIds) {
        try {
            SharedPreferences prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
            String streak = prefs.getString(KEY_STREAK, "0 Hari Streak");
            int completed = prefs.getInt(KEY_COMPLETED, 0);
            int total = prefs.getInt(KEY_TOTAL, 0);

            for (int appWidgetId : appWidgetIds) {
                updateAppWidget(context, appWidgetManager, appWidgetId, streak, completed, total);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onAppWidgetOptionsChanged(Context context, AppWidgetManager appWidgetManager, int appWidgetId, Bundle newOptions) {
        try {
            SharedPreferences prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
            String streak = prefs.getString(KEY_STREAK, "0 Hari Streak");
            int completed = prefs.getInt(KEY_COMPLETED, 0);
            int total = prefs.getInt(KEY_TOTAL, 0);
            updateAppWidget(context, appWidgetManager, appWidgetId, streak, completed, total);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void updateWidgetData(Context context, String streak, int completed, int total) {
        try {
            SharedPreferences.Editor editor = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE).edit();
            editor.putString(KEY_STREAK, streak != null ? streak : "0 Hari Streak");
            editor.putInt(KEY_COMPLETED, completed);
            editor.putInt(KEY_TOTAL, total);
            editor.apply();

            AppWidgetManager appWidgetManager = AppWidgetManager.getInstance(context);
            ComponentName thisWidget = new ComponentName(context, BentoWidgetProvider.class);
            int[] appWidgetIds = appWidgetManager.getAppWidgetIds(thisWidget);
            if (appWidgetIds != null && appWidgetIds.length > 0) {
                for (int appWidgetId : appWidgetIds) {
                    updateAppWidget(context, appWidgetManager, appWidgetId, streak, completed, total);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void updateAppWidget(Context context, AppWidgetManager appWidgetManager, int appWidgetId,
                                        String streak, int completed, int total) {
        try {
            int remaining = Math.max(0, total - completed);
            int pct = total > 0 ? (int) Math.round(((double) completed / total) * 100) : 0;

            RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.widget_bento);
            views.setTextViewText(R.id.widget_streak, streak != null ? streak : "0 Hari Streak");
            views.setProgressBar(R.id.widget_progress_bar, 100, pct, false);
            views.setTextViewText(R.id.widget_progress_text, pct + "% Disiplin");

            views.setTextViewText(R.id.widget_stat_total, String.valueOf(total));
            views.setTextViewText(R.id.widget_stat_completed, String.valueOf(completed));
            views.setTextViewText(R.id.widget_stat_remaining, String.valueOf(remaining));

            // Klik widget membuka aplikasi Minimal Todo
            Intent intent = new Intent(context, MainActivity.class);
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
            PendingIntent pendingIntent = PendingIntent.getActivity(
                context,
                0,
                intent,
                PendingIntent.FLAG_UPDATE_CURRENT | (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0)
            );
            views.setOnClickPendingIntent(R.id.widget_root, pendingIntent);

            appWidgetManager.updateAppWidget(appWidgetId, views);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
