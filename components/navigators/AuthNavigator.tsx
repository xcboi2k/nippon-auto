import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import SignUpAdditionalInformationScreen from '../screens/auth/SignUpAdditionalInformationScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
                screenOptions={{
                    headerShown: false, animation: 'none'
                }}
                initialRouteName='Login'
            >

                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="SignUp" component={SignUpScreen}/>
                <Stack.Screen name="SignUpAdditional" component={SignUpAdditionalInformationScreen} initialParams={{ key: Math.random().toString() }}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
            </Stack.Navigator>
    )
}

export default AuthNavigator