import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileViewScreen from '../screens/main/profile/ProfileViewScreen';
import ProfileEditScreen from '../screens/main/profile/ProfileEditScreen';
import ReviewsScreen from '../screens/main/profile/ReviewsScreen';
import UserListingScreen from '../screens/main/profile/UserListingScreen';
import ProfileMenuScreen from '../screens/main/profile/ProfileMenuScreen';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
                screenOptions={{
                    headerShown: false, animation: 'none'
                }}
                initialRouteName='ProfileMain'
            >

                <Stack.Screen name="ProfileMain" component={ProfileMenuScreen}/>
                <Stack.Screen name="ProfileView" component={ProfileViewScreen}/>
                <Stack.Screen name="ProfileEdit" component={ProfileEditScreen}/>
                <Stack.Screen name="MyListings" component={UserListingScreen}/>
                <Stack.Screen name="MyReviews" component={ReviewsScreen}/>
            </Stack.Navigator>
    )
}

export default ProfileNavigator