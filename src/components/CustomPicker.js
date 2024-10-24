import React, { useState } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { height } from '../style/Dimensions';
import colors from '../style/Colors';
import fonts from '../style/Fonts';

const CustomPicker = ({open,setOpen,value,setValue,items,setItems, zIndex, placeholder}) => {
    // {open,setOpen,value,setValue,items,setItems}

    // const [value, setValue] = useState(null);
    // const [items, setItems] = useState([
    //     { label: 'Apple', value: 'apple' },
    //     { label: 'Banana', value: 'banana' }
    // ]);

    return (
        <View>
            <DropDownPicker
                placeholder={placeholder}
                placeholderStyle={styles.placeholderStyle}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={{...styles.dropdown, zIndex: zIndex}}
                containerStyle={open ? styles.true : styles.false }
                listMode="SCROLLVIEW"
                scrollViewProps={{
                    nestedScrollEnabled: true,
                }}
                dropDownContainerStyle={styles.dropDownContainerStyle}
                selectedItemLabelStyle={styles.selectedItemLabelStyle}
                selectedItemContainerStyle={styles.selectedItemContainerStyle}
                textStyle={styles.textStyle}
            />
        </View>
    )
}

export default CustomPicker

const styles = StyleSheet.create({
    dropdown: {
        borderBottomWidth: 1,
        borderBottomColor: colors.BLACK,
        borderWidth: 0,
        marginVertical: 4,
        backgroundColor: 'transparent',
    },
    dropDownContainerStyle: {
        backgroundColor: colors.WHITE,
        borderWidth: 0,
    },
    placeholderStyle: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        color: colors.GREY
    },
    selectedItemLabelStyle: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        color: colors.BLUE
    },
    selectedItemContainerStyle: {
        backgroundColor: colors.LIGHTBLUE,
        color: colors.BLUE        
    },
    textStyle: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        color: colors.BLACK
    },
    true:{
        height: height*0.3,
    },
    false:{
    },
})