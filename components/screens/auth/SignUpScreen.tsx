import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import ButtonText from '@/components/shared/ButtonText'
import CustomTextInput from '@/components/shared/CustomTextInput'

export default function SignUpScreen() {
    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="w-full px-[30px] flex flex-col items-center mb-[15px] mt-[20px]">
                <Image 
                    source={require('@/assets/logos/logo.png')} 
                    className="w-[60px] h-[60px]" // 80px = 20 * 4 (NativeWind uses 4px base)
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
                        }}
                        customLabel='First Name'
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter Last Name",
                        }}
                        customLabel='Last Name'
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter Username",
                        }}
                        customLabel='Username'
                        padding='25px'
                        marginBottom='15px'
                    />
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
                            Already have an account?
                        </Text>
                        <TouchableOpacity>
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
