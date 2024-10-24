import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

// Custom Colors and Fonts
import colors from '../../style/Colors';
import fonts from '../../style/Fonts';
import { height } from '../../style/Dimensions';

// Pages or Screens
import Icon from 'react-native-vector-icons/Ionicons'
import Home from '../../screens/home';
import MyCourses from '../../screens/my-courses';
import Blogs from '../../screens/blogs';
import Gallery from '../../screens/gallery';

// BottomTab Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colors.WHITE,
                height: height * 0.075,
            },

        }}>

            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>

                            <Icon name='home'
                                size={24}
                                color={focused ? colors.BLUE : colors.BLACK}
                            />
                            <Text style={{
                                ...styles.text,
                                color: focused ? colors.BLUE : colors.BLACK
                            }}>
                                Home
                            </Text>
                        </View>
                    )
                }}
            />

            <Tab.Screen name='MyCourses' component={MyCourses}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>

                            <Icon name='grid-outline'
                                size={24}
                                color={focused ? colors.BLUE : colors.BLACK}
                            />
                            <Text style={{
                                ...styles.text,
                                color: focused ? colors.BLUE : colors.BLACK
                            }}>
                                My Course
                            </Text>

                        </View>
                    )
                }}
            />

            <Tab.Screen name='Blogs' component={Blogs}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>

                            <Icon name='list'
                                size={24}
                                color={focused ? colors.BLUE : colors.BLACK}
                            />
                            <Text style={{
                                ...styles.text,
                                color: focused ? colors.BLUE : colors.BLACK
                            }}>
                                Blogs
                            </Text>
                        </View>
                    )
                }}
            />

            <Tab.Screen name='Gallery' component={Gallery}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>

                            <Icon name='image'
                                size={24}
                                color={focused ? colors.BLUE : colors.BLACK}
                            />
                            <Text style={{
                                ...styles.text,
                                color: focused ? colors.BLUE : colors.BLACK
                            }}>
                                Gallery
                            </Text>
                        </View>
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        gap: 4,
        paddingVertical: 4, 
        backgroundColor: 'transparent'
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5
    },
})