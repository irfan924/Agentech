import React, { useEffect } from 'react'
import {
    View,
    Text,
    FlatList,
} from 'react-native'

import { styles } from './Style';
import PrimaryTitle from '../../components/PrimaryTitle';

import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import colors from '../../style/Colors';

import FastImage from 'react-native-fast-image';

const BlogDetail = ({ route }) => {

    const navigation = useNavigation();
    const ITEM = route.params;


    return (
        <View style={styles.container}>
            <FlatList
                data={ITEM}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) =>
                    <View style={styles.content}>
                        <View style={styles.header}>
                            <Icon name='arrow-back' size={24} color={colors.BLUE} onPress={() => navigation.goBack()} />
                            <PrimaryTitle title={item.title} />
                        </View>
                        <FastImage
                            source={{
                                uri: item.img,
                            }}
                            style={styles.img}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                }
            />
        </View>
    )
}

export default BlogDetail