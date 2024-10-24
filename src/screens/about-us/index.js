import React from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'

const AboutUs = () => {
    return (
        <View style={styles.container}>
            <Header title={'About Us'} />
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.aboutTitle}>
                    About AgenTech IT Solutions
                </Text>
                <Text style={styles.para}>
                    AgenTech IT Solutions is your trusted partner in harnessing the power of technology. We are a dynamic team of skilled professionals dedicated to crafting innovative software solutions that meet the unique needs of our clients.

                    Our mission is to empower businesses through cutting-edge technology. We strive to deliver exceptional software products and services that drive growth, efficiency, and success.
                </Text>
                <Text style={styles.title}>
                    What sets us apart:
                </Text>
                <Text style={styles.subTitle}>
                    Expertise
                </Text>
                <Text style={styles.para}>
                    Our team boasts a wealth of experience in software development, ensuring top-quality solutions.
                </Text>
                <Text style={styles.subTitle}>
                    Innovation:
                </Text>
                <Text style={styles.para}>
                    We embrace new technologies and trends to stay ahead of the curve and deliver cutting-edge products.
                </Text>
                <Text style={styles.subTitle}>
                    Customer Focus:
                </Text>
                <Text style={styles.para}>
                    Your success is our priority. We work closely with our clients to understand their needs and deliver tailored solutions.
                </Text>
                <Text style={styles.subTitle}>
                    Quality:
                </Text>
                <Text style={styles.para}>
                    We are committed to delivering software that is reliable, efficient, and user-friendly.
                </Text>
                <Text style={styles.para}>
                    Whether you need a custom software application, mobile app development, or IT consulting, AgenTech IT Solutions is your go-to partner. Let's build a successful future together.
                </Text>
                
            </ScrollView>
        </View>
    )
}

export default AboutUs