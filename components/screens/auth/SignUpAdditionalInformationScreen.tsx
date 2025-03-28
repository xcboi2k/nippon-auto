import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import ButtonText from '@/components/shared/ButtonText'
import CustomTextInput from '@/components/shared/CustomTextInput'

export default function SignUpAdditionalInformationScreen() {
    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="w-full px-[30px] flex flex-col items-center mb-[15px] mt-[20px]">
                <Image 
                    source={require('@/assets/logos/logo.png')} 
                    className="w-[60px] h-[60px]" // 80px = 20 * 4 (NativeWind uses 4px base)
                />
            </View>
            <View className="w-full px-[30px] flex flex-col items-center mb-[15px]">
                <Text className="text-2xl font-bold">We want to know more about you</Text>
            </View>

            <ScrollView>
                <View className="w-full px-[30px] flex flex-col items-center mb-[15px]">
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter Shop Name",
                        }}
                        customLabel='Shop Name'
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter Shop Location",
                        }}
                        customLabel='Location'
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter Mobile Number",
                            keyboardType: 'numeric'
                        }}
                        customLabel='Mobile Number'
                        padding='25px'
                        marginBottom='15px'
                        isMobileNumber={true}
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Tell us about yourself",
                        }}
                        customLabel='Bio'
                        padding='25px'
                        marginBottom='15px'
                    />

                    <View className='w-full items-center justify-center mb-[15px]'>
                        <ButtonText text='Submit' buttonColor='#234791' textColor='#F4F6F8' textSize='16' 
                            onPress={() => {}}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
