import React, { useState } from 'react'
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFormik } from 'formik'
import * as Yup from 'yup';

import ButtonText from '@/components/shared/ButtonText'
import CustomTextInput from '@/components/shared/CustomTextInput'
import UserStore from '@/stores/UserStore';
import { RootStackParamList } from '@/types/navigation';

interface FormValues {
    email: string;
    password: string;
  }

export default function LoginScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    // initialize formik values
    const initialValues: FormValues = {
        email: '',
        password: '',
    };

    const setLoggedIn = UserStore(state => state.setLoggedIn)
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            if (values.email === 'test@test.com' && values.password === 'test') {
                console.log('Login successful');
                setLoggedIn()
            // Handle successful login (e.g., navigation, state update)
            }
        },
    });

    const handleSubmit = () => {
        formik.handleSubmit();
    };
    
    return (
        <ImageBackground 
            source={require('@/assets/images/sample-background.jpg')} 
            style={{ flex: 1 }} resizeMode="stretch"
        >
            <View className="flex-1 justify-center items-center">
                <Image 
                source={require('@/assets/logos/logo.png')} 
                className="w-32 h-32"
                resizeMode="contain"
                />
            </View>

            {/* White Rounded Form Area */}
            <View className="h-[60%] rounded-t-[30px] bg-white">
                <View className="w-full px-[30px] flex flex-col items-center mb-[15px] mt-[30px]">
                    <Text className="text-[#153A56] text-4xl font-bold mb-[15px]">Welcome!</Text>

                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter Email Address",
                            keyboardType: 'email-address',
                            onChangeText: formik.handleChange("email"),
                            value: formik.values.email,
                        }}
                        customLabel='Email Address'
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter Password",
                            keyboardType: 'email-address',
                            onChangeText: formik.handleChange("password"),
                            value: formik.values.password,
                        }}
                        customLabel='Password'
                        padding='25px'
                        isPassword={true}
                    />
                    <View className='w-full flex flex-row mb-[15px]'>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text className='text-[12px] text-[#234791] italic'>
                                Forgot your password
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View className='w-full items-center justify-center mb-[15px]'>
                        <ButtonText text='Submit' buttonColor='#234791' textColor='#F4F6F8' textSize='16' 
                            onPress={handleSubmit}/>
                    </View>

                    <View className='w-full flex flex-row justify-center'>
                        <Text className='text-[12px] text mr-[5px]'>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text className='text-[12px] text-[#234791] italic'>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}
