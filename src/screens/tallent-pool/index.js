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
import { useNavigation } from '@react-navigation/native'
import PrimaryButton from '../../components/PrimaryButton'
import LottieView from 'lottie-react-native'
import { getFirestoreData } from '../../utils/getFirestoreData'
import FastImage from 'react-native-fast-image'

const TallentPool = () => {

    const navigation = useNavigation();

    const [poolData, setPoolData] = useState();
    const [search, setSearch] = useState(null);
    const [searchRes, setSearchRes] = useState();

    const getData = async () => {
        const result = await getFirestoreData('talent-pool');
        setPoolData(result)
    }

    const handleSearch = () => {
        if (search && poolData && poolData.length > 0) {
            const filtered = poolData.filter((res) =>
                res.name.toLowerCase().includes(search.toLowerCase())
            );
            setSearchRes(filtered);
        } else {
            setSearchRes([]);
        }
    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <View style={styles.container}>
            <Header
                title={'Talent Pool'}
            />
            <View style={styles.content}>
                <PrimarySearch
                    placeholder={'Search for Talent'}
                    onChangeText={(val) => setSearch(val)}
                    onChange={handleSearch}
                />
            </View>
            {
                !searchRes ?
                    poolData ?
                        <FlatList
                            data={poolData}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.list}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity
                                    style={[styles.poolContainer,]}
                                    onPress={() => navigation.navigate('TalentPoolDetail', [item])}
                                >
                                    <FastImage
                                        source={{ uri: item.logo }}
                                        style={styles.logo}
                                        resizeMode={FastImage.resizeMode.cover}
                                    />
                                    <View style={styles.poolDetailContainer}>
                                        <Text style={styles.name}>
                                            {item.name}
                                        </Text>
                                        <Text style={styles.skillset}>
                                            {item.skillset}
                                        </Text>
                                        <Text style={styles.exp}>
                                            Experience : {item.experience}
                                        </Text>
                                        <Text style={styles.jobAvailability}>
                                            Availablity : {item.availability}
                                        </Text>
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
                        contentContainerStyle={styles.list}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                style={[styles.poolContainer,]}
                                onPress={() => navigation.navigate('TalentPoolDetail', [item])}
                            >
                                <FastImage
                                    source={{ uri: item.logo }}
                                    style={styles.logo}
                                    resizeMode={FastImage.resizeMode.cover}
                                />
                                <View style={styles.poolDetailContainer}>
                                    <Text style={styles.name}>
                                        {item.name}
                                    </Text>
                                    <Text style={styles.skillset}>
                                        {item.skillset}
                                    </Text>
                                    <Text style={styles.exp}>
                                        Experience : {item.experience}
                                    </Text>
                                    <Text style={styles.jobAvailability}>
                                        Availablity : {item.availability}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
            }
            <View style={styles.content}>
                <PrimaryButton
                    title={'Apply Now'}
                    onPress={() => navigation.navigate('TalentApply')}
                />
            </View>
        </View>
    )
}

export default TallentPool