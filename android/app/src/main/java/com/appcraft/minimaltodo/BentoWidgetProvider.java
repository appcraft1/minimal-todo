package com.appcraft.minimaltodo;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.widget.RemoteViews;

import org.json.JSONArray;
import org.json.JSONObject;

public class BentoWidgetProvider extends AppWidgetProvider {

    private static final String PREFS_NAME = "bento_widget_prefs";
    private static final String KEY_STREAK = "streak";
    private static final String KEY_COMPLETED = "completed";
    private static final String KEY_TOTAL = "total";
    private static final String KEY_HABITS_JSON = "habits_json";

    @Override
    public void onUpdate(Context context, AppWidgetManager appWidgetManager, int[] appWidgetIds) {
        try {
            SharedPreferences prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
            String streak = prefs.getString(KEY_STREAK, "0 Hari Streak");
            int completed = prefs.getInt(KEY_COMPLETED, 0);
            int total = prefs.getInt(KEY_TOTAL, 0);
            String habitsJson = prefs.getString(KEY_HABITS_JSON, "[]");

            for (int appWidgetId : appWidgetIds) {
                updateAppWidget(context, appWidgetManager, appWidgetId, streak, completed, total, habitsJson);
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
            String habitsJson = prefs.getString(KEY_HABITS_JSON, "[]");

            updateAppWidget(context, appWidgetManager, appWidgetId, streak, completed, total, habitsJson);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void updateWidgetData(Context context, String streak, int completed, int total, String habitsJson) {
        try {
            SharedPreferences.Editor editor = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE).edit();
            editor.putString(KEY_STREAK, streak != null ? streak : "0 Hari Streak");
            editor.putInt(KEY_COMPLETED, completed);
            editor.putInt(KEY_TOTAL, total);
            editor.putString(KEY_HABITS_JSON, habitsJson != null ? habitsJson : "[]");
            editor.apply();

            AppWidgetManager appWidgetManager = AppWidgetManager.getInstance(context);
            ComponentName thisWidget = new ComponentName(context, BentoWidgetProvider.class);
            int[] appWidgetIds = appWidgetManager.getAppWidgetIds(thisWidget);
            if (appWidgetIds != null && appWidgetIds.length > 0) {
                for (int appWidgetId : appWidgetIds) {
                    updateAppWidget(context, appWidgetManager, appWidgetId, streak, completed, total, habitsJson);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void updateWidgetData(Context context, String streak, int completed, int total) {
        updateWidgetData(context, streak, completed, total, "[]");
    }

    private static void updateAppWidget(Context context, AppWidgetManager appWidgetManager, int appWidgetId,
                                        String streak, int completed, int total, String habitsJson) {
        try {
            int pct = total > 0 ? (int) Math.round(((double) completed / total) * 100) : 0;

            RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.widget_bento);
            views.setTextViewText(R.id.widget_streak, streak != null ? streak : "0 Hari Streak");
            views.setProgressBar(R.id.widget_progress_bar, 100, pct, false);
            views.setTextViewText(R.id.widget_progress_text, completed + "/" + total + " Selesai (" + pct + "%)");

            // Kosongkan container kartu bento sebelum mengisi ulang
            views.removeAllViews(R.id.widget_habits_container);

            JSONArray array = null;
            if (habitsJson != null && !habitsJson.trim().isEmpty()) {
                try {
                    array = new JSONArray(habitsJson);
                } catch (Exception ignored) {}
            }

            if (array == null || array.length() == 0) {
                views.setViewVisibility(R.id.widget_empty_text, View.VISIBLE);
                views.setViewVisibility(R.id.widget_footer_more, View.GONE);
            } else {
                views.setViewVisibility(R.id.widget_empty_text, View.GONE);
                int count = array.length();
                int limit = Math.min(4, count); // Tampilkan hingga 4 kartu bento terbaik

                for (int i = 0; i < limit; i++) {
                    JSONObject obj = array.optJSONObject(i);
                    if (obj == null) continue;

                    String title = obj.optString("title", "Target Bento");
                    String sub = obj.optString("sub", "Harian");
                    boolean isDone = obj.optBoolean("completed", false);
                    String colorHex = obj.optString("color", "#FDE047");

                    RemoteViews item = new RemoteViews(context.getPackageName(), R.layout.widget_habit_item);
                    item.setTextViewText(R.id.item_title, title);
                    item.setTextViewText(R.id.item_sub, sub);

                    int itemColor = 0xFFFDE047;
                    try {
                        itemColor = Color.parseColor(colorHex);
                    } catch (Exception ignored) {}

                    if (isDone) {
                        item.setTextViewText(R.id.item_status_check, "✓");
                        item.setTextColor(R.id.item_status_check, 0xFF22C55E); // Hijau sukses
                        item.setTextColor(R.id.item_title, 0xFF9CA3AF); // Dimmed
                        item.setTextViewText(R.id.item_bullet, "✓");
                        item.setTextColor(R.id.item_bullet, 0xFF22C55E);
                    } else {
                        item.setTextViewText(R.id.item_status_check, "○");
                        item.setTextColor(R.id.item_status_check, 0xFF6B7280);
                        item.setTextColor(R.id.item_title, 0xFFFFFFFF);
                        item.setTextViewText(R.id.item_bullet, "•");
                        item.setTextColor(R.id.item_bullet, itemColor);
                    }

                    views.addView(R.id.widget_habits_container, item);
                }

                if (count > limit) {
                    views.setViewVisibility(R.id.widget_footer_more, View.VISIBLE);
                    views.setTextViewText(R.id.widget_footer_more, "+ " + (count - limit) + " target lainnya • Ketuk untuk Buka Beranda");
                } else {
                    views.setViewVisibility(R.id.widget_footer_more, View.GONE);
                }
            }

            // Klik widget membuka aplikasi Minimal Todo langsung ke Beranda
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
