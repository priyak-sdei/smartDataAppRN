package com.smartdataapprn // Change to your actual package name


import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Build
import android.util.Log
import androidx.core.content.FileProvider
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.io.File

class FileProviderModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "FileProviderModule"
    }

    @ReactMethod
    fun installAPK(apkPath: String) {
        Log.e("Welocme", "APK file not found at path  $apkPath")

        val context: Context = reactApplicationContext
        val apkFile = File(apkPath)


        if (!apkFile.exists()) {
            Log.e("FILE_PROVIDER", "APK file not found at path: $apkPath")
            return
        }

        val apkUri: Uri = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            FileProvider.getUriForFile(context, "${context.packageName}.fileprovider", apkFile)
        } else {
            Uri.fromFile(apkFile)
        }

        val intent = Intent(Intent.ACTION_VIEW).apply {
            setDataAndType(apkUri, "application/vnd.android.package-archive")
            flags = Intent.FLAG_ACTIVITY_NEW_TASK
            addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
        }

        context.startActivity(intent)
        Log.d("FILE_PROVIDER", "APK installation started!")
    }
}
