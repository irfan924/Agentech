import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import { styles } from './Style'
import PrimaryTitle from '../../components/PrimaryTitle'

import { useNavigation } from '@react-navigation/native'

import colors from '../../style/Colors'
import { getFirestoreData } from '../../utils/getFirestoreData'
import FastImage from 'react-native-fast-image'
import LottieView from 'lottie-react-native'

const Gallery = () => {

  const [gallery, setGallery] = useState();

  const getGallery = async () => {
    const galery = await getFirestoreData('gallery');
    setGallery(galery);
  }

  useEffect(() => {
    getGallery();
  }, [])

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <PrimaryTitle title={'Gallery'} alignSelf={'center'} />
      {
        gallery ?
          <FlatList
            data={gallery}
            numColumns={2}
            key={1}
            contentContainerStyle={styles.flatList}
            renderItem={({ item, index }) =>
              <TouchableOpacity
                style={styles.content}
                onPress={() => navigation.navigate('GalleryDetail', [item.images])}
              >
                <FastImage
                  source={{
                    uri: item.img,
                  }}
                  style={styles.img}
                  resizeMode={FastImage.resizeMode.cover}
                />
                <Text style={styles.title}>{item.name}</Text>
              </TouchableOpacity>
            }
          />
          :
          <View style={styles.lottieView}>
            <LottieView
              source={require('../../../assets/animations/loading.json')}
              style={styles.animation}
              autoPlay
              loop
            />
          </View>

      }
    </View>
  )
}

export default Gallery