import React from 'react'
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthNavigator from './navigators/AuthNavigator';

import UserStore from '@/stores/UserStore';
import AuthenticatedNavigator from './navigators/AuthenticatedNavigator';

const Stack = createNativeStackNavigator();
export default function MainApp() {
    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent',
        },
    };

    const isLoggedIn = UserStore(state => state.isLoggedIn)

    return (
        <NavigationContainer theme={navTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    isLoggedIn === true ? (
                        <Stack.Screen name="AuthenticatedScreens" component={AuthenticatedNavigator} />
                    ) : (
                        <Stack.Screen name="Auth" component={AuthNavigator} />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
