import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'
import PrimarySearch from '../../components/PrimarySearch'
import PrimaryButton from '../../components/PrimaryButton'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../style/Colors'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import { getFirestoreData } from '../../utils/getFirestoreData'
import FastImage from 'react-native-fast-image'

const Jobs = () => {

    const navigation = useNavigation();

    const [jobs, setJobs] = useState();
    const [searchRes, setSearchRes] = useState(null);
    const [search, setSearch] = useState(null);

    const getJobs = async () => {
        let result = await getFirestoreData('jobs')
        setJobs(result);
    }

    const getFilteredData = ()=>{
        if (search && jobs && jobs.length > 0) {
            const filtered = jobs.filter((res) =>
                res.title.toLowerCase().includes(search.toLowerCase())
            );
            setSearchRes(filtered)
        } else {
            setSearchRes([]);
        }
    }
    

    useEffect(() => {
        getJobs();
    }, [])

    return (

        <View style={styles.container}>
            <Header title={'Jobs'} />
            <View style={[styles.content, { marginVertical: 24 }]}>
                <PrimarySearch
                    placeholder={'Search For Jobs'}
                    onChangeText={(val) => setSearch(val)}
                    onChange={getFilteredData}
                />
            </View>
            {
                !searchRes ?
                    jobs ?
                        <FlatList
                            data={jobs}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity
                                    style={styles.jobContainer}
                                    onPress={() => navigation.navigate('JobDetail', [item])}
                                >
                                    <View style={styles.jobUpperContainer}>
                                        <FastImage
                                            source={{ uri: item.logo }}
                                            style={styles.companyLogo}
                                            resizeMode={FastImage.resizeMode.cover}
                                        />
                                        
                                        <View style={styles.jobDetailContainer}>
                                            <Text style={styles.jobTitle}>
                                                {item.title}
                                            </Text>
                                            <Text style={styles.jobCompany}>
                                                {item.companyName}
                                            </Text>
                                            <Text style={styles.jobType}>
                                                Job Type : {item.jobType}
                                            </Text>
                                            <Text style={styles.jobAvailability}>
                                                Availablity Time : {item.jobPlace}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.jobBottomContainer}>
                                        <View style={styles.jobCommonInfoContainer}>
                                            <Icon name='calendar-outline' size={12} color={colors.BLUE} />
                                            <Text style={styles.postDate}>
                                                {item.postDate}
                                            </Text>
                                        </View>
                                        <View style={styles.jobCommonInfoContainer}>
                                            <Icon name='business-outline' size={12} color={colors.ORANGE} />
                                            <Text style={styles.jobLocation}>
                                                {
                                                    item.location.lengeth <= 25 ?
                                                        item.location
                                                        :
                                                        item.location.slice(0, 25) + ' ...'
                                                }
                                            </Text>
                                        </View>
                                        <View style={styles.jobCommonInfoContainer}>
                                            <Icon name='cash-outline' size={12} color={colors.DARKGREEN} />
                                            <Text style={styles.jobPay}>
                                                {item.salary}
                                            </Text>
                                        </View>
                                    </View>
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
                    :
                    <FlatList
                        data={searchRes}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                style={styles.jobContainer}
                                onPress={() => navigation.navigate('JobDetail', [item])}
                            >
                                <View style={styles.jobUpperContainer}>
                                    <FastImage
                                        source={{ uri: item.logo }}
                                        style={styles.companyLogo}
                                        resizeMode={FastImage.resizeMode.cover}
                                    />
                                    <View style={styles.jobDetailContainer}>
                                        <Text style={styles.jobTitle}>
                                            {item.title}
                                        </Text>
                                        <Text style={styles.jobCompany}>
                                            {item.companyName}
                                        </Text>
                                        <Text style={styles.jobType}>
                                            Job Type : {item.jobType}
                                        </Text>
                                        <Text style={styles.jobAvailability}>
                                            Availablity Time : {item.jobPlace}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.jobBottomContainer}>
                                    <View style={styles.jobCommonInfoContainer}>
                                        <Icon name='calendar-outline' size={12} color={colors.BLUE} />
                                        <Text style={styles.postDate}>
                                            {item.postDate}
                                        </Text>
                                    </View>
                                    <View style={styles.jobCommonInfoContainer}>
                                        <Icon name='business-outline' size={12} color={colors.ORANGE} />
                                        <Text style={styles.jobLocation}>
                                            {
                                                item.location.lengeth <= 25 ?
                                                    item.location
                                                    :
                                                    item.location.slice(0, 25) + ' ...'
                                            }
                                        </Text>
                                    </View>
                                    <View style={styles.jobCommonInfoContainer}>
                                        <Icon name='cash-outline' size={12} color={colors.DARKGREEN} />
                                        <Text style={styles.jobPay}>
                                            {item.salary}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                    />
            }
            <View style={styles.content}>
                <PrimaryButton
                    title={'Post a New Job'}
                    onPress={() => navigation.navigate('JobPost')}
                />
            </View>
        </View>
    )
}

export default Jobs