import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native'

import { styles } from './Style';
import PrimaryTitle from '../../components/PrimaryTitle';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { getFirestoreData } from '../../utils/getFirestoreData';
import LottieView from 'lottie-react-native';
import FastImage from 'react-native-fast-image';

const StoryDetail = () => {

  const route = useRoute();

  const navigation = useNavigation();

  const [storyItem, setStoryItem] = useState();
  const [storyData, setStoryData] = useState();
  const [itemId, setItemId] = useState(route.params);



  const getStoryData = () => {
    getFirestoreData('success-stories')
      .then((data) => {
        setStoryData(data)
        let storyData = data.filter(item => item.id == itemId);
        setStoryItem(storyData);
      })
      .catch((error) => {
        console.log('Error Found While Getting Data')
      })

  }

  const getItemId = (item) => {
    setStoryItem([item]);
  }

  useEffect(() => {
    getStoryData();
  }, []);

  return (
    <View style={styles.container}>
      <Icon name='arrow-back' style={styles.icon} onPress={() => navigation.goBack()} />
      {
        storyItem ?
          storyItem.map((item, index) =>
            <View key={index}>
              <FastImage
                source={{ uri: item.img }}
                style={styles.img}
                resizeMode='cover'
              />
              <View style={styles.content}>
                <ScrollView style={styles.scrollStyle} showsVerticalScrollIndicator={false}>
                  <Text style={styles.name} >{item.name}</Text>
                  <Text style={styles.title} >{item.title}</Text>
                  <Text style={styles.desc} >{item.desc}</Text>
                </ScrollView>
                <View style={styles.otherStories}>
                  <PrimaryTitle title={'Other Succes Stories'} alignSelf={'flex-start'} />
                  <FlatList
                    data={storyData}
                    horizontal={true}
                    renderItem={({ item, index }) =>
                      <TouchableOpacity
                        key={index}
                        style={styles.flatContainer}
                        onPress={() => getItemId(item)}
                      >
                        <FastImage
                          source={{ uri: item.img }}
                          style={styles.storyImg}
                        />
                        <Text style={styles.jobTitle}>{item.title}</Text>
                      </TouchableOpacity>
                    }
                  />
                </View>
              </View>
            </View>
          )
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

export default StoryDetail
