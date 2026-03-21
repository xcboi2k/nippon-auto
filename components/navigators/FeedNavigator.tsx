import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FeedScreen from '../screens/main/FeedScreen'
import SellerListingScreen from '../screens/main/seller/SellerListingScreen'
import SellerProfileViewScreen from '../screens/main/seller/SellerProfileViewScreen'
import SellerReviewsScreen from '../screens/main/seller/SellerReviewsScreen'
import { RootStackParamList } from '@/types/navigation'
import ReviewCreateScreen from '../screens/main/reviews/ReviewCreateScreen'
import ReviewEditScreen from '../screens/main/reviews/ReviewEditScreen'
import VehiclePostCreateScreen from '../screens/main/vehicle-post/VehiclePostCreateScreen'
import VehiclePostDetailsScreen from '../screens/main/vehicle-post/VehiclePostDetailsScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

const FeedNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'none',
            }}
            initialRouteName="FeedMain"
        >
            <Stack.Screen name="FeedMain" component={FeedScreen} />
            <Stack.Screen
                name="VehiclePostCreate"
                component={VehiclePostCreateScreen}
            />
            <Stack.Screen
                name="VehiclePostDetails"
                component={VehiclePostDetailsScreen}
            />
            <Stack.Screen
                name="SellerProfile"
                component={SellerProfileViewScreen}
            />
            <Stack.Screen
                name="SellerListing"
                component={SellerListingScreen}
            />
            <Stack.Screen
                name="SellerReviews"
                component={SellerReviewsScreen}
            />
            <Stack.Screen name="ReviewCreate" component={ReviewCreateScreen} />
            <Stack.Screen name="ReviewEdit" component={ReviewEditScreen} />
        </Stack.Navigator>
    )
}

export default FeedNavigator
