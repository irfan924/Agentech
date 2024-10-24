import { PermissionsAndroid, Platform, Alert } from 'react-native';
import storage from '@react-native-firebase/storage';
import RNFS from 'react-native-fs';
import FilePickerManager from 'react-native-file-picker';

export const selectAndUploadFile = async (setUploadProgress) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission Required',
                        message: 'This app needs access to read files from your storage.',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }
                );

                if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                    reject(new Error('Storage permission denied'));
                    return;
                }
            }

            FilePickerManager.showFilePicker(null, async (response) => {
                if (response.didCancel) {
                    reject(new Error('User cancelled file picker'));
                    return;
                } else if (response.error) {
                    reject(new Error(response.error));
                    return;
                }

                const appDocumentDirectory = RNFS.DocumentDirectoryPath;
                const newFilePath = `${appDocumentDirectory}/${response.fileName}`;

                try {
                    await RNFS.copyFile(response.uri, newFilePath);

                    const storageRef = storage().ref(`files/${response.fileName}`);
                    const task = storageRef.putFile(newFilePath);

                    task.on(
                        'state_changed',
                        (snapshot) => {
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log('Upload progress:', progress);
                            setUploadProgress(progress);

                        },
                        (error) => {
                            reject(new Error(`Upload error: ${error.message}`));
                        },
                        async () => {
                            try {
                                const downloadURL = await storageRef.getDownloadURL();
                                // resolve(downloadURL);
                                resolve(response.fileName)
                            } catch (error) {
                                reject(new Error(`Failed to get download URL: ${error.message}`));
                            }
                        }
                    );
                } catch (err) {
                    reject(new Error(`File copy error: ${err.message}`));
                }
            });
        } catch (error) {
            reject(error);
        }
    });
};