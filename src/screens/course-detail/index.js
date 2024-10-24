import React from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
} from 'react-native'

import Header from '../../components/Header';
import { styles } from './Style';

import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../style/Colors';
import PrimaryTitle from '../../components/PrimaryTitle';
import SecondaryButton from '../../components/SecondaryButton';
import PrimaryButton from '../../components/PrimaryButton';

import { useNavigation } from '@react-navigation/native';
import downloadFileFromURL from '../../utils/FileDownloadFromFirebase';
import FastImage from 'react-native-fast-image';


const CourseDetail = ({ route }) => {

  const item = route.params;
  const navigation = useNavigation();

  const fileName = item[0].fileName;
  const fileUrl = item[0].fileUrl;


  const handleDownload = async () => {
    try {
      await downloadFileFromURL(fileUrl, fileName);

    } catch (error) {
      console.log(error);

    }
  }

  return (

    <View style={styles.container}>
      <FlatList
        data={item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) =>
          <View style={{ marginBottom: 70, paddingHorizontal: 12 }}>
            <Header title={item.name} />
            <FastImage
              source={{ uri: item.img }}
              style={styles.mainImg}
              resizeMode={FastImage.resizeMode.stretch}

            />
            <View style={styles.topTagContainer}>
              <Icon
                name='flash'
                size={16}
                color={colors.YELLOW}
              />
              <Text style={styles.topCourse}>
                Top Course
              </Text>
            </View>
            <View style={styles.aboutContainer}>
              <PrimaryTitle title={'About Course'} alignSelf={'flex-start'} />
              <Text style={styles.courseTitle}>
                {item.name}
              </Text>
              <Text style={styles.courseTitle}>
                {item.aboutCourse}
              </Text>
            </View>
            <View style={styles.aboutContainer}>
              <PrimaryTitle title={'Course Details'} alignSelf={'flex-start'} />
              <View style={styles.commonView}>
                <Text style={styles.courseTitle}>
                  Duration :
                </Text>
                <Text style={styles.courseDetail}>
                  {item.courseDetail.duration}
                </Text>
              </View>
              <View style={styles.commonView}>
                <Text style={styles.courseTitle}>
                  {item.courseDetail.class} :
                </Text>
                <Text style={styles.courseDetail}>
                  {item.courseDetail.fee}
                </Text>
              </View>
              <View style={styles.commonView}>
                <Text style={styles.courseTitle}>
                  Enrolled Students :
                </Text>
                <Text style={styles.courseDetail}>
                  {item.courseDetail.studentEnrolled}
                </Text>
              </View>
            </View>
            <View style={styles.aboutContainer}>
              <PrimaryTitle title={'Instructor Details'} alignSelf={'flex-start'} />
              <View style={styles.instructorDetails}>
                <Image
                  source={{ uri: item.instructor.img }}
                  style={styles.instructorImg}
                />
                <View style={styles.instructorContent}>
                  <Text style={{ ...styles.courseDetail, fontSize: 24 }}>
                    {item.instructor.name}
                  </Text>
                  <Text style={styles.courseTitle}>
                    {item.instructor.designation}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.aboutContainer}>
              <SecondaryButton
                onPress={handleDownload}
              />
              <PrimaryButton
                title={'Enroll Now'}
                onPress={() => navigation.navigate('EnrollNow', [item.name])}
              />
            </View>
          </View>
        }
      />
    </View>
  )
}

export default CourseDetail