import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'
import { firebase,  } from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../style/Colors'
import { useNavigation } from '@react-navigation/native'
import { getFirestoreData } from '../../utils/getFirestoreData'

const CourseApply = () => {

    const navigation = useNavigation();

    const [allCourses, setAllCourses] = useState();

    const getDBData = async () => {
        let res = await getFirestoreData('courses');
        setAllCourses(res)
    }

    useEffect(() => {
        getDBData();
    }, [])


    return (
        <View style={styles.container}>
            <Header title={'All Courses'} />
            <View style={styles.content}>
                <FlatList
                    data={allCourses}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity 
                        style={styles.card}
                        onPress={()=> navigation.navigate('CourseDetail',[item])}
                        >
                            <View style={styles.textView}>
                                <Text style={styles.title}>
                                    {item.name}
                                </Text>
                                <Text style={styles.subTitle}>
                                    Last Date to Apply : {item.lastDateApply}
                                </Text>
                            </View>
                            <Icon
                                name={item.icon}
                                size={30}
                                color={colors.BLUE}
                            />
                        </TouchableOpacity>
                    }
                />
            </View>
        </View>
    )
}

export default CourseApply