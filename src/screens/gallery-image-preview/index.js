import React from 'react'
import {
    View,
} from 'react-native'
import { styles } from './Style';

import Icon from 'react-native-vector-icons/Ionicons'

import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'

const GalleryImagePreview = ({ route }) => {

    const navigation = useNavigation();

    const img = route.params;

    return (
        <View style={styles.container}>
            <Icon
                name='close-circle'
                style={styles.icon}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.content}>
                {
                    img.map((item, index) =>

                        <FastImage
                            key={index}
                            source={{
                                uri: item,
                                priority: FastImage.priority.high

                            }}
                            style={styles.img}
                            resizeMode={FastImage.resizeMode.contain}

                        />
                    )}
            </View>
        </View>
    )
}

export default GalleryImagePreview