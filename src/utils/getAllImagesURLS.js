import storage from '@react-native-firebase/storage';

export const getAllImageUrls = async (folderPath) => {
    try {
        const storageRef = storage().ref(folderPath);
        const result = await storageRef.listAll();

        const urlPromises = result.items.map((itemRef) => itemRef.getDownloadURL());

        const urls = await Promise.all(urlPromises);

        return urls;
    } catch (error) {
        console.error('Error getting image URLs:', error);
        throw error;
    }
};