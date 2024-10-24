import base64 from 'react-native-base64';

// Encrypt data
export const encryptData = (data) => {
    return base64.encode(data)
};

// Decrypt data
export const decryptData = (ciphertext) => {
    return base64.decode(ciphertext);
};