import { Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

export const handleCameraPicker = async (
    setIsVisible,
    setUploading,
    setTransferred,
    setLogo,
    filePath,
) => {
    try {
        const imagePickerResponse = await ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        });

        setIsVisible(false);

        if (imagePickerResponse) {
            const uploadUri = imagePickerResponse.path;
            const fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

            setUploading(true);
            const uploadTask = storage().ref(`${filePath}${fileName}`).putFile(uploadUri);

            uploadTask.on('state_changed', snapshot => {
                setTransferred(
                    Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100)
                );
            });

            try {
                await uploadTask;
                setUploading(false);
                Alert.alert(
                    'Successfully Uploaded',
                    'Your Image has been Successfully Uploaded!'
                );
                const uri = await storage().ref(`${filePath}${fileName}`).getDownloadURL();
                setLogo(uri);
                setIsVisible(false)
            } catch (error) {
                setUploading(false);
                Alert.alert('Error uploading image:', error.message);
                Alert.alert('Upload failed', 'Something went wrong during the upload.');
            }
        }
    } catch (error) {
        Alert.alert('Error opening image picker:', error);
        Alert.alert('Error', 'Something went wrong while opening the camera.');
    }
};

export const handleGalleryPicker = async (
    setIsVisible,
    setUploading,
    setTransferred,
    setLogo,
    filePath,
) => {
    try {
        const imagePickerResponse = await ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        });


        if (imagePickerResponse) {
            setIsVisible(false);
            const uploadUri = imagePickerResponse.path;
            const fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

            setUploading(true);
            const uploadTask = storage().ref(`${filePath}${fileName}`).putFile(uploadUri);

            uploadTask.on('state_changed', snapshot => {
                setTransferred(
                    Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100)
                );
            });
            try {
                await uploadTask;
                setUploading(false);
                Alert.alert(
                    'Successfully Uploaded',
                    'Your Image has been Successfully Uploaded!'
                );
                const uri = await storage().ref(`${filePath}${fileName}`).getDownloadURL();
                setLogo(uri);

            } catch (error) {
                setUploading(false);
                console.error('Error uploading image:', error.message);
                Alert.alert('Upload failed', 'Something went wrong during the upload.');
            }
        }
    } catch (error) {
        console.error('Error opening image picker:', error);
        Alert.alert('Error', 'Something went wrong while opening the camera.');
    }
};
