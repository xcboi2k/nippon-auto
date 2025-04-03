import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from '../screens/main/FeedScreen';
import SellerListingScreen from '../screens/main/seller/SellerListingScreen';
import SellerProfileViewScreen from '../screens/main/seller/SellerProfileViewScreen';
import SellerReviewsScreen from '../screens/main/seller/SellerReviewsScreen';
import { RootStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const FeedNavigator = () => {
    return (
        <Stack.Navigator
                screenOptions={{
                    headerShown: false, animation: 'none'
                }}
                initialRouteName='FeedMain'
            >

                <Stack.Screen name="FeedMain" component={FeedScreen}/>
                <Stack.Screen name="SellerProfile" component={SellerProfileViewScreen}/>
                <Stack.Screen name="SellerListing" component={SellerListingScreen}/>
                <Stack.Screen name="SellerReviews" component={SellerReviewsScreen}/>
            </Stack.Navigator>
    )
}

export default FeedNavigator