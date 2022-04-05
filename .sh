#!/bin/sh

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

resPath='./android/app/src/main/res/'

rm -rf './android/app/src/main/res/raw'
ls $resPath | grep "drawable-" | while read -r folder ; do
path="$resPath$folder"
echo "Processing $folder"

ls $path | grep -E "nodemodules|assets" | xargs -d "\n" -I % sh -c "rm $path/%;"
done
echo " __ __         "
echo " |      |        |       |"
echo " |  |__   |     |"
echo " |             |   |   |"
echo " |             |    | |"
echo " |_  __|     |"
echo "\n"
echo "__"
echo "Generating release apk..."
cd android
./gradlew assembleRelease
cd ..
