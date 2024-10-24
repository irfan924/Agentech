import { PermissionsAndroid, Platform, Alert } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Storage Permission Required',
                    message: 'This app needs access to your storage to download files.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            Alert.alert('Error', 'Failed to get permission');
            return false;
        }
    }
    return true;
};


const downloadFileFromURL = async (url, fileName) => {

    try {
        const isPermisionGranted = await requestStoragePermission();
        if (isPermisionGranted) {
            const filename = fileName;
            const filepath = RNFetchBlob.fs.dirs.DownloadDir + '/' + filename;
            const fileUrl = url;
            RNFetchBlob.config({
                addAndroidDownloads: {
                    useDownloadManager: true,
                    title: 'Start Downloading!',
                    description: `Your file is Downloading`,
                    mime: 'application/pdf',
                    notification: true,
                    path: filepath,
                }
            })
                .fetch('GET', fileUrl)
                .then((res) => {
                    RNFetchBlob.android.actionViewIntent(res.path(), 'application/pdf');
                    Alert.alert('Congrats!', 'File Downloaded Successfully.')
                })
                .catch((err) => {
                    Alert.alert('download error, err is', JSON.stringify(err));
                });
        }
    } catch {
        (error) => {
            console.log('Error Found!', error)
        }
    }

};

export default downloadFileFromURL;