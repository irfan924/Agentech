import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native'

import { styles } from './Style'
import PrimaryTitle from '../../components/PrimaryTitle'

import FastImage from 'react-native-fast-image'

import { firebase } from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'

const Blogs = () => {

  const navigation = useNavigation();
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    let res = await firebase.firestore().collection('blogs').get();
    let blog = res.docs.map(item => item._data)
    setBlogs(blog);
  }

  useEffect(() => {
    getBlogs();
  }, [])


  return (
    <View style={styles.container}>
      <PrimaryTitle title={'Blogs'} alignSelf={'center'} />
      {
        blogs ?

          <FlatList
            data={blogs}
            numColumns={2}
            key={1}
            contentContainerStyle={styles.flatList}
            renderItem={({ item, index }) =>
              <TouchableOpacity
                style={styles.content}
                onPress={() => navigation.navigate('BlogDetail', [item])}
              >
                <FastImage
                  source={{
                    uri: item.img,
                    priority: FastImage.priority.high

                  }}
                  style={styles.img}
                  resizeMode={FastImage.resizeMode.contain}

                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.intro}>{item.intro}</Text>
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

export default Blogs