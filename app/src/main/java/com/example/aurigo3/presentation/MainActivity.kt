/* While this template provides a good starting point for using Wear Compose, you can always
 * take a look at https://github.com/android/wear-os-samples/tree/main/ComposeStarter to find the
 * most up to date changes to the libraries and their usages.
 */

package com.example.aurigo3.presentation

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.media.MediaPlayer
import android.os.Bundle
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.NotificationCompat
import androidx.lifecycle.lifecycleScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import java.net.HttpURLConnection
import java.net.URL
import com.example.aurigo3.R
import kotlinx.coroutines.cancel

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Start monitoring the IP address for the signal
        monitorSignal("http://192.168.1.100/signal") // Replace with your actual IP and endpoint
    }

    private fun monitorSignal(ipAddress: String) {
        val textView = findViewById<TextView>(R.id.textViewStatus)
        val mediaPlayer = MediaPlayer.create(this, R.raw.alarm_sound) // Replace with your alarm sound file

        lifecycleScope.launch(Dispatchers.IO) {
            while (true) {
                try {
                    val url = URL(ipAddress)
                    val connection = url.openConnection() as HttpURLConnection
                    connection.requestMethod = "GET"
                    connection.connectTimeout = 5000
                    connection.readTimeout = 5000

                    val responseCode = 200
                    if (responseCode == 200) {
                        // Signal received
                        runOnUiThread {
                            textView.text = "Signal Received!"
                            sendNotification("Aurigo3 Alert", "Signal received from IP address!")
                        }

                        // Play alarm sound
                        if (!mediaPlayer.isPlaying) {
                            mediaPlayer.start()
                        }
                    } else {
                        // Signal not received
                        runOnUiThread {
                            textView.text = "Didn't receive"
                        }
                        mediaPlayer.pause()
                    }
                } catch (e: Exception) {
                    // Handle connection error
                    runOnUiThread {
                        textView.text = "Didn't receive"
                    }
                    mediaPlayer.pause()
                }

                delay(5000) // Check the signal every 5 seconds
            }
        }
    }

    private fun sendNotification(title: String, message: String) {
        val notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        val channelId = "aurigo3_channel"

        val channel = NotificationChannel(channelId, "Aurigo3 Alerts", NotificationManager.IMPORTANCE_HIGH)
        notificationManager.createNotificationChannel(channel)

        val intent = Intent(this, MainActivity::class.java)
        val pendingIntent = PendingIntent.getActivity(this, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT)

        val notification = NotificationCompat.Builder(this, channelId)
            .setContentTitle(title)
            .setContentText(message)
            .setSmallIcon(R.drawable.ic_notification) // Replace with your notification icon
            .setContentIntent(pendingIntent)
            .setAutoCancel(true)
            .build()

        notificationManager.notify(1, notification)
    }

    override fun onDestroy() {
        super.onDestroy()
        lifecycleScope.cancel() // Stop monitoring when activity is destroyed
    }
}