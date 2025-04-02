import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFormik } from 'formik'
import * as Yup from 'yup';

import ButtonText from '@/components/shared/ButtonText'
import CustomTextInput from '@/components/shared/CustomTextInput'
import { RootStackParamList } from '@/types/navigation';

export default function SignUpScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    // initialize formik values
    const initialValues = { firstName: "", lastName: "", userName: "", email: "", password: "" };

    const handleSubmit = (values: { firstName: string, lastName: string, userName: string, email: string; password: string; }, { resetForm }: any) => {
        try{
            navigation.navigate('SignUpAdditional')
        }
        catch(error){
            console.log('error')
        }
    };
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: Yup.object({
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            userName: Yup.string().required('Username is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string().required('Password is required'),
        }),
    });

    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="w-full px-[30px] flex flex-col items-center mb-[15px] mt-[20px]">
                <Image 
                    source={require('@/assets/logos/logo.png')} 
                    className="w-[60px] h-[60px]"
                />
            </View>
            <View className="w-full px-[30px] flex flex-col items-center mb-[15px]">
                <Text className="text-2xl font-bold">Get Started</Text>
            </View>
            <ScrollView>
                <View className="w-full px-[30px] flex flex-cp; items-center mb-[15px]">
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter First Name",
                            onChangeText: formik.handleChange("firstName"),
                            value: formik.values.firstName,
                            
                        }}
                        customLabel='First Name'
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter Last Name",
                            onChangeText: formik.handleChange("lastName"),
                            value: formik.values.lastName,
                        }}
                        customLabel='Last Name'
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter Username",
                            onChangeText: formik.handleChange("userName"),
                            value: formik.values.userName,
                        }}
                        customLabel='Username'
                        padding='25px'
                        marginBottom='15px'
                    />
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
                        marginBottom='15px'
                        isPassword={true}
                    />

                    <View className='w-full items-center justify-center mb-[15px]'>
                        <ButtonText text='Submit' buttonColor='#234791' textColor='#F4F6F8' textSize='16' 
                            onPress={() => handleSubmit}/>
                    </View>

                    <View className='w-full flex flex-row justify-center'>
                        <Text className='text-[12px] text mr-[5px]'>
                            Already have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text className='text-[12px] text-[#234791] italic'>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
