import React from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'
import PrimarySearch from '../../components/PrimarySearch'

const Teacher = () => {
    return (
        <View style={styles.container}>
            <Header title={'Teachers'} />
            <View style={styles.content}>
                <PrimarySearch placeholder={'Search designation e.g Mathematics'} />
            </View>
            <ScrollView>
                <View style={styles.wrapper}>
                    <Text style={styles.errorDisplay}>No data Found!</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Teacher