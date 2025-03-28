import React, { useState } from 'react'
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import ButtonText from '@/components/shared/ButtonText'
import CustomTextInput from '@/components/shared/CustomTextInput'

export default function LoginScreen() {
    return (
        <ImageBackground 
        source={require('@/assets/images/sample-background.jpg')} 
        style={{ flex: 1 }} resizeMode="stretch"
    >
        <View className="flex-1 justify-center items-center">
            <Image 
            source={require('@/assets/logos/logo.png')} 
            className="w-32 h-32" // 125px ≈ 32 * 4
            resizeMode="contain"
            />
        </View>

        {/* White Rounded Form Area */}
        <View className="h-[60%] rounded-t-[30px] bg-white">
            <View className="w-full px-[30px] flex flex-col items-center mb-[15px] mt-[30px]"> {/* 40px = 10 * 4 */}
                {/* Welcome Text */}
                <Text className="text-[#153A56] text-4xl font-bold mb-[15px]">Welcome!</Text>

                <CustomTextInput
                    inputProps={{
                        placeholder: "Enter Email Address",
                        keyboardType: 'email-address'
                    }}
                    customLabel='Email Address'
                    padding='25px'
                    marginBottom='15px'
                />
                <CustomTextInput
                    inputProps={{
                        placeholder: "Enter Password",
                        keyboardType: 'email-address'
                    }}
                    customLabel='Password'
                    padding='25px'
                    marginBottom='15px'
                    isPassword={true}
                />

                <View className='w-full items-center justify-center mb-[15px]'>
                    <ButtonText text='Submit' buttonColor='#234791' textColor='#F4F6F8' textSize='16' 
                        onPress={() => {}}/>
                </View>

                <View className='w-full flex flex-row justify-center'>
                    <Text className='text-[12px] text mr-[5px]'>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity>
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
