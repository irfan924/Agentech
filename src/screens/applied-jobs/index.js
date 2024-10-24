import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'
import colors from '../../style/Colors'

import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'


const AppliedJobs = () => {

    const navigation = useNavigation();

    const [searchResult, setSearchResult] = useState('Nothing Found');

    

    return (
        <View style={styles.container}>
            <Header title={'Applied Jobs'} />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Applied Jobs
                </Text>
                <View style={styles.searchBar}>
                    <TextInput
                        placeholder='Search Applied Jobs'
                        placeholderTextColor={colors.GREY}
                        style={styles.input}
                    />
                    <Icon
                        name='search'
                        size={24}
                        color={colors.GREY}
                    />
                </View>
                <Text style={styles.found}>
                    {searchResult}
                </Text>
            </View>
            <TouchableOpacity
                style={styles.absoluteBtn}
                onPress={() => navigation.navigate('AllJobs')}
            >
                <Text style={styles.absoluteBtnText}>
                    Search New Jobs
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AppliedJobs