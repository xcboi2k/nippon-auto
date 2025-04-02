import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import * as Yup from 'yup';

import ButtonText from '@/components/shared/ButtonText'
import CustomTextInput from '@/components/shared/CustomTextInput'
import UserStore from '@/stores/UserStore';

export default function SignUpAdditionalInformationScreen() {
    const navigation = useNavigation()

    const initialValues = { shopName: "", location: "", mobileNumber: "", bio: ""};

    const setLoggedIn = UserStore(state => state.setLoggedIn)
    const handleSubmit = (values: { shopName: string, location: string, mobileNumber: string, bio: string; }, { resetForm }: any) => {
        try{
            setLoggedIn()
        }
        catch(error){
            console.log('error')
        }
    };
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: Yup.object({
            shopName: Yup.string().required('Shop Name is required'),
            location: Yup.string().required('Location is required'),
            mobileNumber: Yup.string().required('Mobile Number is required'),
            bio: Yup.string().required('Bio is required'),
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
                <Text className="text-2xl font-bold">We want to know more about you</Text>
            </View>

            <ScrollView>
                <View className="w-full px-[30px] flex flex-col items-center mb-[15px]">
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter Shop Name",
                            onChangeText: formik.handleChange("shopName"),
                            value: formik.values.shopName,
                        }}
                        customLabel='Shop Name'
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter Shop Location",
                            onChangeText: formik.handleChange("location"),
                            value: formik.values.location,
                        }}
                        customLabel='Location'
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter Mobile Number",
                            keyboardType: 'numeric',
                            onChangeText: formik.handleChange("mobileNumber"),
                            value: formik.values.mobileNumber,
                        }}
                        customLabel='Mobile Number'
                        padding='25px'
                        marginBottom='15px'
                        isMobileNumber={true}
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Tell us about yourself",
                            onChangeText: formik.handleChange("bio"),
                            value: formik.values.bio,
                        }}
                        customLabel='Bio'
                        padding='25px'
                        marginBottom='15px'
                    />

                    <View className='w-full items-center justify-center mb-[15px]'>
                        <ButtonText text='Submit' buttonColor='#234791' textColor='#F4F6F8' textSize='16' 
                            onPress={() => handleSubmit}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
