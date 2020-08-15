************To Rename the Android App Package Name , follow the below instructions:***********************

Modify the following files and rename the package name:

-settings.gradle

-mainActivity.java

-mainApplication.java

-AndroidManifest.xml

-android/app/build.gradle

-google-services.json

-splashActivity.java

-package.json

-BUCK file

-.project

Note: - Rename the folder name `/android/app/src/main/java/com/oldpackagename` to `/android/app/src/main/java/com/newpackagename`
Delete the package-lock.json and Reinstall the node modules

and then run the below command:

-cd android
-gradlew clean
-cd ..
-react-native run-android
