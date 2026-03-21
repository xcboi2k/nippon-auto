import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MarketplaceScreen from '../screens/main/MarketplaceScreen'
import SellerProfileViewScreen from '../screens/main/seller/SellerProfileViewScreen'
import SellerListingScreen from '../screens/main/seller/SellerListingScreen'
import SellerReviewsScreen from '../screens/main/seller/SellerReviewsScreen'
import ReviewCreateScreen from '../screens/main/reviews/ReviewCreateScreen'
import ReviewEditScreen from '../screens/main/reviews/ReviewEditScreen'
import { RootStackParamList } from '@/types/navigation'
import VehicleListingCreateScreen from '../screens/main/vehicle-listing/VehicleListingCreateScreen'
import VehicleListingDetailsScreen from '../screens/main/vehicle-listing/VehicleListingDetailsScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

const MarketplaceNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'none',
            }}
            initialRouteName="MarketplaceMain"
        >
            <Stack.Screen
                name="MarketplaceMain"
                component={MarketplaceScreen}
            />
            <Stack.Screen
                name="VehicleListingCreate"
                component={VehicleListingCreateScreen}
            />
            <Stack.Screen
                name="VehicleListingDetails"
                component={VehicleListingDetailsScreen}
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

export default MarketplaceNavigator
