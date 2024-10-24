import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import { styles } from './Style'
import PrimaryTitle from '../../components/PrimaryTitle'
import FastImage from 'react-native-fast-image'


const MyCourses = () => {
  return (
    <View style={styles.container}>
      <PrimaryTitle title={'Current Enrollment'} alignSelf={'center'} />
      <View style={styles.contentContainer}>
        <View style={styles.commonView}>
          <Text style={styles.courseTitle}> Course Name : </Text>
          <Text style={styles.courseDetail}> App Development </Text>
        </View>
        <View style={styles.commonView}>
          <Text style={styles.courseTitle}> Duration : </Text>
          <Text style={styles.courseDetail}> 3 Month </Text>
        </View>
        <View style={styles.commonView}>
          <Text style={styles.courseTitle}>Time : </Text>
          <Text style={styles.courseDetail}> 05:00 PM - 08:00 PM</Text>
        </View>
        <View style={styles.commonView}>
          <Text style={styles.courseTitle}> Enrolled Batch : </Text>
          <Text style={styles.courseDetail}> BATCH-17 </Text>
        </View>
        <View style={styles.commonView}>
          <Text style={styles.courseTitle}> Status : </Text>
          <Text style={styles.courseDetail}> Enrolled </Text>
        </View>
      </View>
      <View style={[styles.instructorContainer, styles.shadowProp]}>
        <PrimaryTitle title={'Instructor Details'} alignSelf={'flex-start'} />
        <View style={styles.instructorDetails}>
          <FastImage
            source={require('../../../assets/images/person1.png')}
            style={styles.instructorImg}
          />
          <View style={styles.instructorContent}>
            <Text style={{ ...styles.courseDetail, fontSize: 24 }}> Bilal Ashraf </Text>
            <Text style={styles.courseTitle}> Mobile App Developer </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default MyCourses