import React from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'
import PrimaryTitle from '../../components/PrimaryTitle'
import PrimaryButton from '../../components/PrimaryButton'
import { useRoute } from '@react-navigation/native'
import downloadFileFromURL from '../../utils/FileDownloadFromFirebase'
import { useCustomAlert } from '../../components/AlertBox'
import FastImage from 'react-native-fast-image'


const TallentPoolDetail = () => {

    const route = useRoute();
    const DATA = route.params;

    const {showAlert} = useCustomAlert();

    const fileName = DATA[0].fileName;
    const fileUrl = DATA[0].resume;

    const handleDownload = async () => {
        await downloadFileFromURL(fileUrl, fileName)
    }

    return (
        <View style={styles.container}>
            <Header title={'Talent Pool'} />

            <FlatList
                data={DATA}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) =>
                    <View style={styles.content}>
                        <View style={styles.infoContainer}>
                            <FastImage
                                source={{ uri: item.logo }}
                                resizeMode={FastImage.resizeMode.cover}
                                style={styles.logo}
                            />
                            <Text style={styles.title}>
                                {item.name}
                            </Text>
                            <Text style={styles.subTitle}>
                                {item.skillset}
                            </Text>
                            <View style={styles.commonInfo}>
                                <Text style={styles.infoTitle}>Availablity</Text>
                                <Text style={styles.infoSubTitle}>
                                    {item.availability}
                                </Text>
                            </View>
                            <View style={styles.commonInfo}>
                                <Text style={styles.infoTitle}>Education</Text>
                                <Text style={styles.infoSubTitle}>
                                    {item.education.toUpperCase()}
                                </Text>
                            </View>
                            <View style={styles.commonInfo}>
                                <Text style={styles.infoTitle}>Experience</Text>
                                <Text style={styles.infoSubTitle}>
                                    {item.experience}
                                </Text>
                            </View>
                            <View style={styles.commonInfo}>
                                <Text style={styles.infoTitle}>Address</Text>
                                <Text style={[styles.infoSubTitle, styles.address]}>
                                    {item.address}
                                </Text>
                            </View>
                        </View>
                        <PrimaryTitle
                            title={'About Talent'}
                            alignSelf={'flex-start'}
                        />
                        <Text style={styles.infoAboutTalent}>
                            {item.about}
                        </Text>
                        <View style={{ marginVertical: 12 }}>
                            <PrimaryButton
                                title={'Download CV'}
                                onPress={handleDownload}
                            />
                        </View>
                    </View>
                }
            />

        </View>
    )
}

export default TallentPoolDetail