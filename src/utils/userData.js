import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const getUserData = async () => {
    return new Promise((resolve, reject) => {
        auth().onAuthStateChanged(async user => {
            if (user) {
                try {
                    const userDoc = await firestore().collection('users').doc(user.uid).get();
                    if (userDoc.exists) {
                        resolve(userDoc.data());
                        // console.log(userDoc)
                    } else {
                        reject('User document not found');
                    }
                } catch (error) {
                    reject(error);
                }
            } else {
                reject('No user signed in');
            }
        });
    });
};