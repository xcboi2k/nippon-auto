import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedNavigator from './FeedNavigator';
import MessageNavigator from './MessageNavigator';
import ProfileNavigator from './ProfileNavigator';

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
            <Stack.Screen name="FeedNavigator" component={FeedNavigator} />
            <Stack.Screen name="MessageNavigator" component={MessageNavigator} />
            <Stack.Screen name="ProfileNavigator" component={ProfileNavigator} />
        </Stack.Navigator>
    )
}

export default UserNavigator