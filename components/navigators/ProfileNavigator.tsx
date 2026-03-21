import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { RootStackParamList } from '@/types/navigation'
import ProfileEditScreen from '../screens/main/profile/ProfileEditScreen'
import ProfileMenuScreen from '../screens/main/profile/ProfileMenuScreen'
import ProfileViewScreen from '../screens/main/profile/ProfileViewScreen'
import ReviewsScreen from '../screens/main/profile/ReviewsScreen'
import UserListingDetailsScreen from '../screens/main/profile/UserListingDetailsScreen'
import UserListingEditScreen from '../screens/main/profile/UserListingEditScreen'
import UserListingScreen from '../screens/main/profile/UserListingScreen'
import UserPostDetailsScreen from '../screens/main/profile/UserPostDetailsScreen'
import UserPostEditScreen from '../screens/main/profile/UserPostEditScreen'
import UserPostsScreen from '../screens/main/profile/UserPostsScreen'
import ReviewEditScreen from '../screens/main/reviews/ReviewEditScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'none',
            }}
            initialRouteName="ProfileMain"
        >
            <Stack.Screen name="ProfileMain" component={ProfileMenuScreen} />
            <Stack.Screen name="ProfileView" component={ProfileViewScreen} />
            <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
            <Stack.Screen name="MyPosts" component={UserPostsScreen} />
            <Stack.Screen
                name="MyPostDetails"
                component={UserPostDetailsScreen}
            />
            <Stack.Screen name="MyPostEdit" component={UserPostEditScreen} />
            <Stack.Screen name="MyListings" component={UserListingScreen} />
            <Stack.Screen
                name="MyListingDetails"
                component={UserListingDetailsScreen}
            />
            <Stack.Screen
                name="MyListingEdit"
                component={UserListingEditScreen}
            />
            <Stack.Screen name="MyReviews" component={ReviewsScreen} />
            <Stack.Screen name="MyReviewEdit" component={ReviewEditScreen} />
        </Stack.Navigator>
    )
}

export default ProfileNavigator
