import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  FlatList
} from 'react-native'

// Stylesheet, Colors, Fonts, Components, Diemensions and Utils
import { styles } from './Style'
import colors from '../../style/Colors'
import ServiceButton from '../../components/ServiceButton'
import PrimaryTitle from '../../components/PrimaryTitle'

// Linear Gardient
import LinearGradient from 'react-native-linear-gradient'

// IonIcons
import Icon from 'react-native-vector-icons/Ionicons';

// Swipper
import Swiper from 'react-native-swiper'

// Navigation
import { useNavigation } from '@react-navigation/native'

import { firebase } from '@react-native-firebase/firestore'

import { getAllImageUrls } from '../../utils/getAllImagesURLS'
import { getFirestoreData } from '../../utils/getFirestoreData'
import { getUserData } from '../../utils/userData'
import { useCustomAlert } from '../../components/AlertBox'

import FastImage from 'react-native-fast-image'

import Animated, { FadeInDown, FadeInLeft, FadeInRight, FadeInUp } from 'react-native-reanimated'
import services from '../../utils/serivceButton'

const Home = () => {

  const navigation = useNavigation();

  const { showAlert } = useCustomAlert();

  const [courseList, setCourseList] = useState([]);
  const [allBlog, setAllBlogs] = useState([]);
  const [newsEvents, setNewsEvents] = useState();
  const [storyData, setStoryData] = useState();
  const [swiperData, setSwiperData] = useState();

  const [userData, setUserData] = useState();

  const getNewsEvents = async () => {
    getAllImageUrls('news&events/')
      .then((urls) => {
        setNewsEvents(urls)
      })
  }
  const getSwiperData = async () => {
    getAllImageUrls('swiper/')
      .then((urls) => {
        setSwiperData(urls)
      })
  }

  const getCourseList = async () => {
    let courses = await getFirestoreData('courses');
    setCourseList(courses);
  }

  const getBlogs = async () => {
    let res = await firebase.firestore().collection('blogs').limit(1).get();
    let blogs = res.docs.map((item) => item._data)
    setAllBlogs(blogs);
  }

  const getStoryData = async () => {
    const data = await getFirestoreData('success-stories')
    setStoryData(data);
  }

  const getUserInfo = async () => {
    try {
      const data = await getUserData();
      setUserData(data);
      // console.log (data)
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getCourseList();
    getBlogs();
    getNewsEvents();
    getStoryData();
    getSwiperData();
    getUserInfo();
  }, [])

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.BLUE, colors.BLUERGBA]}
        style={styles.upperView}

      >
        <Animated.View
          style={styles.infoHeader}
          entering={FadeInLeft.delay(100).duration(400)}
        >
          <Icon
            name='menu-outline'
            size={24}
            color={colors.WHITE}
            onPress={() => navigation.navigate('Menu')}
          />
          <Text style={styles.userName}>
            Hi! {userData ? userData.name : <ActivityIndicator size={24} color={colors.WHITE} />}
          </Text>
          <Text style={styles.subtitle}>
            A project of AgenTech IT Solutions
          </Text>
        </Animated.View>
        <Animated.View
          entering={FadeInRight.delay(100).duration(400)}
        >
          <Icon
            name='notifications-circle'
            size={36}
            color={colors.WHITE}
            // onPress={() => navigation.navigate('Notifications')}
            onPress={() => showAlert('Comming Soon', '..... Comming Soon .....')}
          />
        </Animated.View>
      </LinearGradient>

      <ScrollView style={styles.scrollContainer} nestedScrollEnabled={true}>
        {/* our Services Pages and their links */}
        <FlatList
          data={services}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.serviceContainer}
          renderItem={({ item, index }) =>
            <Animated.View
              entering={FadeInUp.delay(index * 100).duration(400).springify().damping(12)}
            >
              <ServiceButton
                title={item.title}
                iconName={item.iconName}
                iconColor={item.iconColor}
                iconBgColor={item.iconBgColor}
                onPress={() => {
                  switch (index) {
                    case 0:
                      navigation.navigate('EnrollNow');
                      break;
                    case 1:
                      navigation.navigate('Jobs')
                      break;
                    case 2:
                      navigation.navigate('HireHafiz');
                      break;
                    case 3:
                      navigation.navigate('TalentPool');
                      break;
                    case 4:
                      navigation.navigate('Teacher');
                      break;
                  }
                }}
              />
            </Animated.View>
          }
        />

        {swiperData ?
          <Swiper
            key={swiperData.length}
            autoplay={true}
            loop={true}
            autoplayTimeout={3}
            style={styles.swiper}
          >
            {swiperData.map((img, index) =>
              <View key={index} style={styles.slide}>
                <FastImage
                  key={index}
                  source={{
                    uri: img,
                    priority: FastImage.priority.high

                  }}
                  style={styles.image}
                  resizeMode={FastImage.resizeMode.stretch}
                />
              </View>
            )
            }
          </Swiper>
          :
          <View style={styles.indicatorView}>
            <ActivityIndicator size={50} color={colors.BLUE} />
          </View>
        }

        <View style={styles.commonView}>
          <PrimaryTitle title={'Our Courses'} alignSelf={'flex-start'} />
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.courses}
          >
            {
              courseList ?
                courseList.map((item, index) => (
                  <Animated.View
                    key={index}
                    entering={FadeInLeft.delay(index * 150).duration(700).springify().damping(16)}
                  >
                    <TouchableOpacity
                      key={index}
                      style={styles.courseBtn}
                      onPress={() => navigation.navigate('CourseDetail', [item])}
                    >
                      <FastImage
                        key={index}
                        source={{
                          uri: item.img,
                          priority: FastImage.priority.high

                        }}
                        style={styles.course}
                        resizeMode={FastImage.resizeMode.stretch}
                      />
                    </TouchableOpacity>
                  </Animated.View>
                ))
                :
                <View style={styles.indicatorView}>
                  <ActivityIndicator size={50} color={colors.BLUE} />
                </View>
            }
            <TouchableOpacity
              style={styles.seeMoreBtn}
              onPress={() => {
                navigation.navigate('CourseApply')
              }}
            >
              <Text style={styles.seeMoreBtnText}>
                See All
              </Text>
              <Icon name='arrow-forward' size={36} color={colors.BLUE} />
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.commonView}>
          <PrimaryTitle title={'Success Stories'} alignSelf={'flex-start'} />
          {
            storyData ?
              <FlatList
                data={storyData}
                horizontal={true}
                renderItem={({ item, index }) =>
                  <Animated.View
                    key={index}
                    entering={FadeInLeft.delay(index * 200).duration(800).springify().damping(16)}
                  >
                    <TouchableOpacity
                      key={index}
                      style={styles.storySlide}
                      onPress={() => {
                        navigation.navigate('StoryDetail', [item.id]);
                      }}
                    >
                      <FastImage
                        key={index}
                        source={{
                          uri: item.img,
                          priority: FastImage.priority.high

                        }}
                        style={styles.storyImg}
                        resizeMode={FastImage.resizeMode.stretch}
                      />
                      <Text style={styles.postTitle}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  </Animated.View>
                }
              />
              :
              <View style={styles.indicatorView}>
                <ActivityIndicator size={50} color={colors.BLUE} />
              </View>
          }
        </View>
        <View style={styles.commonView}>
          <PrimaryTitle title={'News & Events'} alignSelf={'flex-start'} />
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.courses}
          >
            {
              newsEvents ?
                newsEvents.map((item, index) => (

                  <FastImage
                    key={index}
                    source={{
                      uri: item,
                    }}
                    style={styles.newsImage}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                ))
                :
                <View style={styles.indicatorView}>
                  <ActivityIndicator size={50} color={colors.BLUE} />
                </View>
            }
          </ScrollView>
        </View>
        <View style={styles.commonView}>
          <View style={styles.recentBlogsView}>
            <PrimaryTitle title={'Recent Blogs'} />
            <TouchableOpacity
              onPress={() => navigation.navigate('Blogs')}
            >
              <Text style={styles.seeAllBtn}>See All</Text>
            </TouchableOpacity>
          </View>
          {
            allBlog ?
              allBlog.map((item, index) =>
                <TouchableOpacity
                  style={styles.blogView}
                  onPress={() => navigation.navigate('BlogDetail', [item])}
                  key={index}
                >
                  <FastImage
                    source={{
                      uri: item.img,
                    }}
                    style={styles.blogImg}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                  <View style={styles.blogTitleView}>
                    <Text style={styles.blogTitle}>{item.title}</Text>
                    <Text style={styles.blogIntro}>{item.intro}</Text>
                  </View>
                </TouchableOpacity>
              )
              :
              <ActivityIndicator size={36} color={colors.BLUE} />
          }
        </View>

      </ScrollView>

    </View>

  )
}

export default Home