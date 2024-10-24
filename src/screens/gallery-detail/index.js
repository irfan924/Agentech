import React from 'react'
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native'

import { styles } from './Style';
import colors from '../../style/Colors';
import PrimaryTitle from '../../components/PrimaryTitle';

import FastImage from 'react-native-fast-image'

import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const GalleryDetail = ({ route }) => {

    const navigation = useNavigation();
    const ITEM = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name='arrow-back' size={24} color={colors.BLUE} onPress={() => navigation.goBack()} />
                <PrimaryTitle title={'Gallery Images'} alignSelf={'center'} />
            </View>
            {
                ITEM.map((item) =>

                    <FlatList
                        data={item}
                        contentContainerStyle={styles.flatList}
                        key={2}
                        numColumns={2}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                style={styles.content}
                                key={index}
                                onPress={() => navigation.navigate('GalleryImagePreview', [item])}
                            >

                                <FastImage
                                    source={{
                                        uri: item,
                                        priority: FastImage.priority.high

                                    }}
                                    style={styles.img}
                                    resizeMode={FastImage.resizeMode.cover}

                                />
                            </TouchableOpacity>
                        }
                    />
                )}
        </View>
    )
}

export default GalleryDetail