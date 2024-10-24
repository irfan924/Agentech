import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'
import colors from '../../style/Colors'

import Icon from 'react-native-vector-icons/Ionicons'
import PrimaryTitle from '../../components/PrimaryTitle'
import { firebase } from '@react-native-firebase/firestore'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'

import FastImage from 'react-native-fast-image'

const AllJobs = () => {

    const navigation = useNavigation();
    const [relevent, setRelevent] = useState(true);

    const [jobs, setJobs] = useState();
    const [searchRes, setSearchRes] = useState(null);
    const [search, setSearch] = useState(null);

    const getJobs = async () => {
        const res = await firebase.firestore().collection('jobs').get();
        let result = res.docs.map((item) => item._data);
        setJobs(result);
    }

    const getFilteredData = () => {
        if (search && jobs && jobs.length > 0) {
            const filtered = jobs.filter((res) =>
                res.title.toLowerCase().includes(search.toLowerCase())
            );
            setSearchRes(filtered)
        } else {
            setSearchRes(null);
        }
    }

    useEffect(() => {
        getJobs();
    }, [])

    return (
        <View style={styles.container}>
            <Header title={'Applied Jobs'} />
            <Text style={styles.title}>
                All Jobs
            </Text>
            <View style={styles.searchBar}>
                <TextInput
                    placeholder='What are you looking for'
                    placeholderTextColor={colors.GREY}
                    style={styles.input}
                    onChangeText={(val) => setSearch(val)}
                    onChange={getFilteredData}
                />
                <Icon
                    name='search'
                    size={24}
                    color={colors.GREY}
                />
            </View>
            {
                !searchRes ?
                    jobs ?

                        <View style={styles.content}>

                            <Text style={styles.subTitle}>
                                {jobs.length} Job Opportunity
                            </Text>
                            <View style={styles.btnView}>
                                <TouchableOpacity
                                    style={relevent ? styles.btn : styles.btnSimple}
                                    onPress={() => setRelevent(true)}
                                >
                                    <Text style={relevent ? styles.btnText : styles.btnTextSimple}>
                                        Most Relevent
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={!relevent ? styles.btn : styles.btnSimple}
                                    onPress={() => setRelevent(false)}
                                >
                                    <Text style={!relevent ? styles.btnText : styles.btnTextSimple}>
                                        Most Recent
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView
                                contentContainerStyle={styles.scrollView}
                                showsVerticalScrollIndicator={false}
                            >
                                <PrimaryTitle title={'Recomended For You'} alignSelf={'flex-start'} />

                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {
                                        jobs.map((item, index) =>

                                            <TouchableOpacity
                                                style={styles.horizontalCard}
                                                key={index}
                                                onPress={() => navigation.navigate('JobDetail', [item])}
                                            >
                                                <FastImage
                                                    key={index}
                                                    source={{
                                                        uri: item.logo,
                                                        priority: FastImage.priority.high

                                                    }}
                                                    style={styles.img}
                                                    resizeMode={FastImage.resizeMode.contain}

                                                />
                                                <View style={styles.divider}></View>
                                                <View
                                                    style={{
                                                        gap: 4
                                                    }}
                                                >
                                                    <Text style={styles.title}>
                                                        {item.title}
                                                    </Text>
                                                    <Text style={styles.subTitle}>
                                                        ({item.jobType})
                                                    </Text>
                                                    <Text style={styles.subTitle}>
                                                        {item.location.length <= 20 ? item.location : item.location.slice(0, 20) + '...'}
                                                    </Text>
                                                    <Text style={styles.subTitle}>
                                                        {item.postDate}
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>


                                        )
                                    }
                                </ScrollView>

                                <PrimaryTitle title={'Best Matches'} alignSelf={'flex-start'} />

                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                >
                                    {
                                        jobs.map((item, index) =>

                                            <TouchableOpacity
                                                style={styles.btnCard}
                                                key={index}
                                                onPress={() => navigation.navigate('JobDetail', [item])}
                                            >
                                                <FastImage
                                                    key={index}
                                                    source={{
                                                        uri: item.logo,
                                                        priority: FastImage.priority.high

                                                    }}
                                                    style={styles.img}
                                                    resizeMode={FastImage.resizeMode.contain}

                                                />
                                                <View style={styles.divider}></View>
                                                <View >
                                                    <Text style={styles.title}>
                                                        {item.title}
                                                    </Text>
                                                    <Text style={styles.subTitle}>
                                                        {item.location.length <= 20 ? item.location : item.location.slice(0, 20) + '...'}
                                                    </Text>

                                                </View>
                                                <Text style={[styles.subTitle, { fontSize: 12 }]}>
                                                    {item.postDate}
                                                </Text>
                                            </TouchableOpacity>


                                        )
                                    }
                                </ScrollView>

                            </ScrollView>
                        </View>
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
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            searchRes.map((item, index) =>

                                <TouchableOpacity
                                    style={styles.btnCard}
                                    key={index}
                                    onPress={() => navigation.navigate('JobDetail', [item])}
                                >
                                    <FastImage
                                        key={index}
                                        source={{
                                            uri: item.logo,
                                            priority: FastImage.priority.high

                                        }}
                                        style={styles.img}
                                        resizeMode={FastImage.resizeMode.contain}

                                    />
                                    <View style={styles.divider}></View>
                                    <View >
                                        <Text style={styles.title}>
                                            {item.title}
                                        </Text>
                                        <Text style={styles.subTitle}>
                                            {item.location.length <= 20 ? item.location : item.location.slice(0, 20) + '...'}
                                        </Text>

                                    </View>
                                    <Text style={[styles.subTitle, { fontSize: 12 }]}>
                                        {item.postDate}
                                    </Text>
                                </TouchableOpacity>


                            )
                        }
                    </ScrollView>
            }

        </View>
    )
}

export default AllJobs