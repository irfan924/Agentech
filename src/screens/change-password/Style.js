import { StyleSheet } from 'react-native';
import colors from '../../style/Colors';
import { height } from '../../style/Dimensions';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 12,
        backgroundColor: colors.WHITE,
        alignItems: 'center',
        gap: 24
    },
    content:{
        gap: 16
    },
    img:{
        width: 300,
        height: 300
    }
})