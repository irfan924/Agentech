import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import StoryDetail from '../../screens/story-detail';
import JobDetail from '../../screens/job-detail';

// Pages


const MainNavigation = () => {

  const Stack = createStackNavigator();

  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name='StoryDetail' component={StoryDetail}/> */}
        <Stack.Screen name='JobDetail' component={JobDetail}/>
      </Stack.Navigator>
  )
}

export default MainNavigation