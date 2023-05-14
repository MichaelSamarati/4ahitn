ionic capacitor run android

npm install capacitor-resources -g
Required files Add your icon.png (1024x1024 px) and splash.png (2732x2732 px) files to the 'resources' folder under the root of your capacitor based project.
in /resources folder
capacitor-resources

ionic capacitor build 
ionic capacitor build android
ionic capacitor build ios



npx cap sync




<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="io.ionic.starter">

  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

    <application
      android:usesCleartextTraffic="true"
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme">
