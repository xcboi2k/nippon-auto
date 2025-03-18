import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomTextInput from '../../../shared/CustomTextInput';
import ButtonText from '../../../shared/ButtonText';
import CommentInput from '../../../shared/CommentInput';

export default function vehiclePostCreateScreen() {
    const transmissionItems = [
        { itemID: 1, itemName: 'Manual' },
        { itemID: 2, itemName: 'Automatic' },
        { itemID: 3, itemName: 'Sequential' },
        { itemID: 4, itemName: 'CVT' },
    ];
    const [selectedTransmission, setSelectedTransmission] = useState(transmissionItems[0].itemName)

    const classificationItems = [
        { itemID: 1, itemName: 'Car' },
        { itemID: 2, itemName: 'Van' },
        { itemID: 3, itemName: 'Truck/Bus' },
        { itemID: 4, itemName: 'Motorcycle' },
    ];
    const [selectedClassification, setSelectedClassification] = useState(classificationItems[0].itemName);
    
    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            {/* Screen Header */}
            <View className="flex-row items-center h-[70px] px-[30px] w-full mt-[20px]">
                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="caret-back" size={24} color="#153A56" />
                </TouchableOpacity>
                <Text className='text-[20px] font-bold ml-[10px]'>
                    Create Listing
                </Text>
            </View>

            <ScrollView>
                <View className='w-full px-[30px] mt-[10px] mb-[15px]'>
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "Enter Vehicle Model",
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none'
                        }}
                        customLabel='Vehicle Model'
                        padding='25px'
                        marginBottom='15px'
                    />
                    <View className='w-full flex flex-row items-center justify-between'>
                        <CustomTextInput 
                            inputProps={{
                                placeholder: "Enter Price",
                                // onChangeText: formik.handleChange("email"),
                                // value: formik.values.email,
                                autoCapitalize: 'none',
                                keyboardType: 'numeric'
                            }}
                            customLabel='Price'
                            padding='25px'
                            marginBottom='15px'
                            width='50%'
                        />
                        <CustomTextInput 
                            inputProps={{
                                placeholder: "Enter Year",
                                // onChangeText: formik.handleChange("email"),
                                // value: formik.values.email,
                                autoCapitalize: 'none',
                                keyboardType: 'numeric'
                                
                            }}
                            customLabel='Year'
                            padding='25px'
                            marginBottom='15px'
                            width='50%'
                        />
                    </View>
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "Enter Total Kilometers",
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none',
                            keyboardType: 'numeric'
                        }}
                        customLabel='Total Kilometers'
                        padding='25px'
                        marginBottom='15px'
                    />
                    <View className='w-full mb-[10px]'>
                        <Text className='text-[#1A1717] font-bold text-[14px]'>
                            Transmission
                        </Text>
                        <View className='w-full flex flex-row items-center p-[8px]'>
                            {
                                transmissionItems.map((item) => (
                                    <TouchableOpacity key={item.itemID} onPress={() => setSelectedTransmission(item.itemName)} className={`w-[72px] h-[48px] rounded-[5px] items-center justify-center m-[5px]
                                    ${selectedTransmission === item.itemName ? 'bg-[#234791]' : 'bg-[#F4F6F8]'} p-[5px]`}>
                                        <Text className={`text-[12px] text-center ${selectedTransmission === item.itemName ? 'text-[#F4F6F8]' : 'text-[#234791]'}`}>
                                            {item.itemName}
                                        </Text>
                                    </TouchableOpacity>
                                )) 
                            }
                        </View>
                    </View>

                    <View className='w-full mb-[10px]'>
                        <Text className='text-[#1A1717] font-bold text-[14px]'>
                            Classification
                        </Text>
                        <View className='w-full flex flex-row items-center p-[8px]'>
                            {
                                classificationItems.map((item) => (
                                    <TouchableOpacity key={item.itemID} onPress={() => setSelectedClassification(item.itemName)} className={`w-[72px] h-[48px] rounded-[5px] items-center justify-center m-[5px]
                                    ${selectedClassification === item.itemName ? 'bg-[#234791]' : 'bg-[#F4F6F8]'} p-[5px]`}>
                                        <Text className={`text-[12px] text-center ${selectedClassification === item.itemName ? 'text-[#F4F6F8]' : 'text-[#234791]'}`}>
                                            {item.itemName}
                                        </Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>

                    <CommentInput 
                        inputProps={{
                            placeholder: "Make a short description about the vehicle",
                            // onChangeText: formik.handleChange("description"),
                            // value: formik.values.description,
                        }}
                        customLabel="Description"
                        textSize = '16px'
                    />

                    <View className='w-full items-center justify-center mb-[10px]'>
                        <ButtonText text='Submit' buttonColor='#234791' textColor='#F4F6F8' textSize='16' 
                            onPress={() => {}}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
