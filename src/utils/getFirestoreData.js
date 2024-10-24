import { firebase } from "@react-native-firebase/firestore";


export const getFirestoreData = async (collection) => {
    let res = await firebase.firestore().collection(collection).get();
    let result = res.docs.map((item) => item._data)
    return result;
}