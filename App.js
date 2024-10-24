import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTab from './src/navigations/bottom-tab';

import { StatusBar } from 'react-native';
import colors from './src/style/Colors';

import StoryDetail from './src/screens/story-detail';
import CourseDetail from './src/screens/course-detail';
import BlogDetail from './src/screens/blog-detail';
import GalleryDetail from './src/screens/gallery-detail';
import GalleryImagePreview from './src/screens/gallery-image-preview';
import EnrollNow from './src/screens/enroll-now';
import HireHafiz from './src/screens/hire-hafiz';
import Jobs from './src/screens/jobs';
import JobDetail from './src/screens/job-detail';
import JobApply from './src/screens/job-apply';
import JobPost from './src/screens/job-post';
import TallentPool from './src/screens/tallent-pool';
import TallentPoolDetail from './src/screens/tallent-pool-detail.js';
import TalentApply from './src/screens/talent-apply/index.js';
import Teacher from './src/screens/teacher/index.js';
import Notifications from './src/screens/notifications/index.js';
import NotificationsDetail from './src/screens/notifications-detail/index.js';
import Menu from './src/screens/menu/index.js';
import MyEarnings from './src/screens/my-earnings/index.js';
import MyEarningsDetail from './src/screens/my-earnings-detail/index.js';
import Withdrawls from './src/screens/my-earnings-withdrawls/index.js';
import Companies from './src/screens/companies/index.js';
import CompanyDetails from './src/screens/company-detail/index.js';
import CourseApply from './src/screens/course-apply/index.js';
import AppliedJobs from './src/screens/applied-jobs/index.js';
import AllJobs from './src/screens/all-jobs/index.js';
import ContactUs from './src/screens/contact-us/index.js';
import Profile from './src/screens/profile/index.js';
import Suggestion from './src/screens/suggestion/index.js';
import PrivacyPolicy from './src/screens/privacy-policy/index.js';
import AboutUs from './src/screens/about-us/index.js';
import TermsandConditions from './src/screens/terms-and-conditions/index.js';
import LoginNavigation from './src/navigations/login-navigation/index.js';
import Splash from './src/screens/splash/index.js';
import Disconnected from './src/screens/disconnected/index.js';
import ResetPassword from './src/screens/reset-password/index.js';
import ChangePassword from './src/screens/change-password/index.js';
import SignUp from './src/screens/sign-up/index.js';
import Login from './src/screens/login/index.js';


const App = () => {

  const APPID = '6b263e87-bb89-486d-9035-73a1fa69ad7a'

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.BLUE} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='Splash'
          component={Splash}
        />
        <Stack.Screen
          name='LoginNavigation'
          component={LoginNavigation}
        />
        <Stack.Screen
          name='Tab'
          component={BottomTab}
        />
        <Stack.Screen
          name='StoryDetail'
          component={StoryDetail}
        />
        <Stack.Screen
          name='CourseDetail'
          component={CourseDetail}
        />
        <Stack.Screen
          name='BlogDetail'
          component={BlogDetail}
        />
        <Stack.Screen
          name='GalleryDetail'
          component={GalleryDetail}
        />
        <Stack.Screen
          name='GalleryImagePreview'
          component={GalleryImagePreview}
        />
        <Stack.Screen
          name='EnrollNow'
          component={EnrollNow}
        />
        <Stack.Screen
          name='HireHafiz'
          component={HireHafiz}
        />
        <Stack.Screen
          name='Jobs'
          component={Jobs}
        />
        <Stack.Screen
          name='JobDetail'
          component={JobDetail}
        />
        <Stack.Screen
          name='JobApply'
          component={JobApply}
        />
        <Stack.Screen
          name='JobPost'
          component={JobPost}
        />
        <Stack.Screen
          name='TalentPool'
          component={TallentPool}
        />
        <Stack.Screen
          name='TalentPoolDetail'
          component={TallentPoolDetail}
        />
        <Stack.Screen
          name='TalentApply'
          component={TalentApply}
        />
        <Stack.Screen
          name='Teacher'
          component={Teacher}
        />
        <Stack.Screen
          name='Notifications'
          component={Notifications}
        />
        <Stack.Screen
          name='NotificationsDetail'
          component={NotificationsDetail}
        />
        <Stack.Screen
          name='Menu'
          component={Menu}
        />
        <Stack.Screen
          name='MyEarnings'
          component={MyEarnings}
        />
        <Stack.Screen
          name='MyEarningsDetail'
          component={MyEarningsDetail}
        />
        <Stack.Screen
          name='Withdrawls'
          component={Withdrawls}
        />
        <Stack.Screen
          name='Companies'
          component={Companies}
        />
        <Stack.Screen
          name='CompanyDetails'
          component={CompanyDetails}
        />
        <Stack.Screen
          name='CourseApply'
          component={CourseApply}
        />
        <Stack.Screen
          name='AppliedJobs'
          component={AppliedJobs}
        />
        <Stack.Screen
          name='AllJobs'
          component={AllJobs}
        />
        <Stack.Screen
          name='ContactUs'
          component={ContactUs}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
        />
        <Stack.Screen
          name='Suggestion'
          component={Suggestion}
        />
        <Stack.Screen
          name='PrivacyPolicy'
          component={PrivacyPolicy}
        />
        <Stack.Screen
          name='AboutUs'
          component={AboutUs}
        />
        <Stack.Screen
          name='TermsandConditions'
          component={TermsandConditions}
        />
        <Stack.Screen
          name='Disconnected'
          component={Disconnected}
        />
        <Stack.Screen
          name='ResetPassword'
          component={ResetPassword}
        />
        <Stack.Screen
          name='ChangePassword'
          component={ChangePassword}
        />
      </Stack.Navigator>
      {/* <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Email' component={Login} />
      </Stack.Navigator> */}
    </NavigationContainer>

  )
}

export default App
