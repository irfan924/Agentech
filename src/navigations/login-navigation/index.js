import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Login from '../../screens/login';
import SignUp from '../../screens/sign-up';
import GetStarted from '../../screens/get-started';

const LoginNavigation = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name='GetStarted'
                component={GetStarted}
            />
            <Stack.Screen
                name='Login'
                component={Login}
            />
            <Stack.Screen
                name='Signup'
                component={SignUp}
            />
        </Stack.Navigator>
    )
}

export default LoginNavigation