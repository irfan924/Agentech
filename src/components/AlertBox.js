import React, {
    createContext,
    useState,
    useContext,
    useCallback
} from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import fonts from '../style/Fonts';
import colors from '../style/Colors';

const CustomAlertContext = createContext();

export const useCustomAlert = () => {
    return useContext(CustomAlertContext);
};

export const CustomAlertProvider = ({ children }) => {
    const [alert, setAlert] = useState({
        visible: false,
        title: '',
        message: '',
        onConfirm: () => { },
    });

    const showAlert = useCallback((title, message, onConfirm) => {
        setAlert({
            visible: true,
            title,
            message,
            onConfirm,
        });
    }, []);

    const hideAlert = () => {
        setAlert((prevAlert) => ({
            ...prevAlert,
            visible: false,
        }));
    };

    return (
        <CustomAlertContext.Provider value={{ showAlert }}>
            {children}
            <Modal
                transparent={true}
                animationType="fade"
                visible={alert.visible}
                onRequestClose={hideAlert}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.alertBox}>
                        <Text style={styles.title}>{alert.title}</Text>
                        <Text style={styles.message}>{alert.message}</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={hideAlert}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    // alert.onConfirm();
                                    hideAlert();
                                }}
                            >
                                <Text style={styles.buttonText}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </CustomAlertContext.Provider>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    alertBox: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: fonts.DosisBold,
        color: colors.BLUE
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: fonts.DosisRegular,
        color: colors.BLACK
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        flex: 1,
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: '#2196F3',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
