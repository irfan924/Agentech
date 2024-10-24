import React from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import colors from '../style/Colors'
import PrimaryButton from './PrimaryButton'
import TertiaryButton from './TertiaryButton'

const CustomModal = ({cameraPress, cancelPress, galleryPress}) => {
    return (
        <View style={styles.container}>
            <View style={styles.icon}></View>
            <View style={styles.btnWrapper}>
                <PrimaryButton
                    title={'Open Camera'}
                    onPress={cameraPress}
                />
                <PrimaryButton
                    title={'Open Gallery'}
                    onPress={galleryPress}
                />
                <TertiaryButton
                    title={'Cancel'}
                    backgroundColor={colors.RED}
                    onPress={cancelPress}
                />
            </View>
        </View>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '40%',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 99,
        backgroundColor: colors.LIGHTGREEN,
        padding: 12,
        paddingBottom: 36,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    btnWrapper:{
        width: '100%',
        gap: 16
    },
    icon:{
        width: 50,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.GREY
    }
})