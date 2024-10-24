import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'

import FastImage from 'react-native-fast-image'

const Companies = () => {

    const navigation = useNavigation();

    const COMPANIES = [
        {
            id: 1,
            name: 'ICR- IT Center RYK',
            title: 'Software Company',
            number: '03047451194',
            img: require('../../../assets/images/icr.png'),
            employees: '10-50',
            years: '10',
            address: 'Canl Garden Main Market',
            email: 'info@soft.com',
            website: 'builtinsoft.com',
            description: "IT Center RAhimyar Khan is a rising software development company based in Rahim Yar Khan, Pakistan. Founded in 2018, they've grown from a small team to a well-regarded provider of custom software solutions. Built In Soft specializes in crafting user-friendly applications for businesses, including web applications, mobile apps, and CRM systems. Their focus is on building  innovative and efficient software that caters to the specific needs of each client.With a team of skilled developers, designers, and project managers, Built In Soft prides itself on clear communication and a collaborative approach.They work closely with clients throughout the development process to ensure the final product meets all expectations.Their commitment to quality and customer satisfaction has earned them a loyal clientele and a reputation for excellence.At Built In Soft, they're passionate about using technology to empower businesses and streamline processes. They're constantly evolving and keeping pace with the latest advancements in the software industry.With their dedication to innovation and client service, Built In Soft is poised for continued success in the years to come.",
        },
        {
            id: 2,
            name: 'Built In Soft',
            title: 'Software Company',
            number: '03047451194',
            img: require('../../../assets/images/builtin.png'),
            employees: '10-50',
            years: '10',
            address: 'Canl Garden Main Market',
            email: 'info@soft.com',
            website: 'builtinsoft.com',
            description: "Built In Soft is a rising software development company based in Rahim Yar Khan, Pakistan. Founded in 2018, they've grown from a small team to a well-regarded provider of custom software solutions. Built In Soft specializes in crafting user-friendly applications for businesses, including web applications, mobile apps, and CRM systems. Their focus is on building  innovative and efficient software that caters to the specific needs of each client.With a team of skilled developers, designers, and project managers, Built In Soft prides itself on clear communication and a collaborative approach.They work closely with clients throughout the development process to ensure the final product meets all expectations.Their commitment to quality and customer satisfaction has earned them a loyal clientele and a reputation for excellence.At Built In Soft, they're passionate about using technology to empower businesses and streamline processes. They're constantly evolving and keeping pace with the latest advancements in the software industry.With their dedication to innovation and client service, Built In Soft is poised for continued success in the years to come.",
        },
    ]

    return (
        <View style={styles.container}>
            <Header title={'Companies in RYK'} />
            <View style={styles.content}>
                <FlatList
                    data={COMPANIES}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity
                            style={[styles.companyContainer]}
                            onPress={() => navigation.navigate('CompanyDetails', [item])}
                        >
                            <FastImage
                                source={item.img}
                                style={styles.companyLogo}
                                resizeMode={FastImage.resizeMode.cover}

                            />
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>
                                    {item.name}
                                </Text>
                                <Text style={styles.subTitle}>
                                    {item.title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    }
                />

            </View>
        </View>
    )
}

export default Companies