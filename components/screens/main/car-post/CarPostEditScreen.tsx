import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import CustomTextInput from '../../../shared/CustomTextInput';
import ButtonText from '../../../shared/ButtonText';
import CommentInput from '../../../shared/CommentInput';

export default function CarPostEditScreen() {
    const [mode, setMode] = useState("details");

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

    const [images, setImages] = useState([]); // State to store selected images

    const [isRegistered, setIsRegistered] = useState('Yes')

    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            {/* Screen Header */}
            <View className="flex-row items-center h-[70px] px-[30px] w-full mt-[20px]">
                <View className='flex-row items-center w-[50%]'>
                    <TouchableOpacity onPress={() => {}}>
                        <Ionicons name="caret-back" size={24} color="#153A56" />
                    </TouchableOpacity>
                    <Text className='text-[20px] font-bold ml-[10px]'>
                        Edit Listing
                    </Text>
                </View>
                <View className='ml-auto'>
                    <TouchableOpacity onPress={() => {}}>
                        <MaterialIcons name="mode-edit" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                
            </View>

            <ScrollView>
                <View className='w-full px-[30px] mt-[10px] mb-[15px]'>
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "Enter Vehicle Model",
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none',
                            editable: mode === "edit"
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
                                keyboardType: 'numeric',
                                editable: mode === "edit"
                            }}
                            customLabel='Price'
                            padding='25px'
                            marginBottom='15px'
                            width='45%'
                        />
                        <CustomTextInput 
                            inputProps={{
                                placeholder: "Enter Year",
                                // onChangeText: formik.handleChange("email"),
                                // value: formik.values.email,
                                autoCapitalize: 'none',
                                keyboardType: 'numeric',
                                editable: mode === "edit"
                            }}
                            customLabel='Year'
                            padding='25px'
                            marginBottom='15px'
                            width='45%'
                        />
                    </View>
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "Enter Total Kilometers",
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none',
                            keyboardType: 'numeric',
                            editable: mode === "edit"
                        }}
                        customLabel='Total Kilometers'
                        padding='25px'
                        marginBottom='15px'
                    />
                    <View className='w-full mb-[15px]'>
                        <Text className='text-[#1A1717] font-bold text-[14px]'>
                            Transmission
                        </Text>
                        <View className='w-full flex flex-row items-center p-[8px]'>
                            {
                                transmissionItems.map((item) => (
                                    <TouchableOpacity key={item.itemID} onPress={() => setSelectedTransmission(item.itemName)} className={`w-[72px] h-[48px] rounded-[5px] items-center justify-center m-[5px]
                                    ${selectedTransmission === item.itemName ? 'bg-[#234791]' : 'bg-[#F4F6F8]'} p-[5px]`} disabled={!(mode === "edit")}>
                                        <Text className={`text-[12px] text-center ${selectedTransmission === item.itemName ? 'text-[#F4F6F8]' : 'text-[#234791]'}`}>
                                            {item.itemName}
                                        </Text>
                                    </TouchableOpacity>
                                )) 
                            }
                        </View>
                    </View>

                    <View className='w-full mb-[15px]'>
                        <Text className='text-[#1A1717] font-bold text-[14px]'>
                            Classification
                        </Text>
                        <View className='w-full flex flex-row items-center p-[8px]'>
                            {
                                classificationItems.map((item) => (
                                    <TouchableOpacity key={item.itemID} onPress={() => setSelectedClassification(item.itemName)} className={`w-[72px] h-[48px] rounded-[5px] items-center justify-center m-[5px]
                                    ${selectedClassification === item.itemName ? 'bg-[#234791]' : 'bg-[#F4F6F8]'} p-[5px]`} disabled={!(mode === "edit")}>
                                        <Text className={`text-[12px] text-center ${selectedClassification === item.itemName ? 'text-[#F4F6F8]' : 'text-[#234791]'}`}>
                                            {item.itemName}
                                        </Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>

                    <View className='w-full mb-[15px]'>
                        <Text className='text-[#1A1717] font-bold text-[14px] mb-[10px]'>
                            Upload Images
                        </Text>
                        <View className="flex-row items-center">
                            {/* Add Photo Icon */}
                            <TouchableOpacity 
                                // onPress={pickImage}
                                className='w-[80px] h-[80px] mr-2 rounded-lg bg-[#234791] items-center justify-center'
                                disabled={!(mode === "edit")}
                            >
                                <MaterialCommunityIcons name="image-plus" size={50} color="white" />
                            </TouchableOpacity>

                            {/* Small Image Previews */}
                            <View className="flex-row ml-2">
                                {images.map((image, index) => (
                                    <Image
                                        key={index}
                                        source={{ uri: image }}
                                        className="w-[80px] h-[80px] mr-2 rounded-lg"
                                        resizeMode="cover"
                                    />
                                ))}
                            </View>
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

                    <View className='w-full mb-[15px]'>
                        <Text className='text-[#1A1717] font-bold text-[14px]'>
                            Vehicle registered?
                        </Text>
                        <View className='w-full flex flex-row items-center p-[8px] mb-[10px]'>
                            <TouchableOpacity onPress={() => setIsRegistered('Yes')} className={`w-[72px] h-[48px] rounded-[5px] items-center justify-center m-[5px]
                            ${isRegistered === 'Yes' ? 'bg-[#234791]' : 'bg-[#F4F6F8]'} p-[5px]`} disabled={!(mode === "edit")}>
                                <Text className={`text-[12px] text-center ${isRegistered === 'Yes' ? 'text-[#F4F6F8]' : 'text-[#234791]'}`}>
                                    Yes
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setIsRegistered('No')} className={`w-[72px] h-[48px] rounded-[5px] items-center justify-center m-[5px]
                            ${isRegistered === 'No' ? 'bg-[#234791]' : 'bg-[#F4F6F8]'} p-[5px]`} disabled={!(mode === "edit")}>
                                <Text className={`text-[12px] text-center ${isRegistered === 'No' ? 'text-[#F4F6F8]' : 'text-[#234791]'}`}>
                                    No
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View className='w-full mb-[10px]'>
                            {
                                isRegistered === 'Yes' ? (
                                    <View className='w-full mb-[15px]'>
                                        <Text className='text-[#1A1717] font-bold text-[14px] mb-[10px]'>
                                            Upload Registration Certificate
                                        </Text>
                                        <View className="flex-row items-center">
                                            {/* Add Photo Icon */}
                                            <TouchableOpacity 
                                                // onPress={pickImage}
                                                className='w-[80px] h-[80px] mr-2 rounded-lg bg-[#234791] items-center justify-center'
                                                disabled={!(mode === "edit")}
                                            >
                                                <MaterialCommunityIcons name="image-plus" size={50} color="white" />
                                            </TouchableOpacity>

                                            {/* Small Image Previews */}
                                            <View className="flex-row ml-2">
                                                {images.map((image, index) => (
                                                    <Image
                                                        key={index}
                                                        source={{ uri: image }}
                                                        className="w-[80px] h-[80px] mr-2 rounded-lg"
                                                        resizeMode="cover"
                                                    />
                                                ))}
                                            </View>
                                        </View>
                                    </View>
                                ) : (
                                    <>
                                        <CustomTextInput 
                                            inputProps={{
                                                placeholder: "Enter year last registered",
                                                // onChangeText: formik.handleChange("email"),
                                                // value: formik.values.email,
                                                autoCapitalize: 'none',
                                                keyboardType: 'numeric',
                                                editable: mode === "edit"
                                            }}
                                            customLabel='Year Last Registered'
                                            padding='25px'
                                            marginBottom='15px'
                                        />
                                        <CommentInput 
                                            inputProps={{
                                                placeholder: "Please enter the reason",
                                                // onChangeText: formik.handleChange("description"),
                                                // value: formik.values.description,
                                                editable: mode === "edit"
                                            }}
                                            customLabel="Reason"
                                            textSize = '16px'
                                        />
                                    </>
                                )
                            }
                        </View>
                    </View>

                    <View className='w-full items-center justify-center mb-[15px]'>
                        {
                            mode === 'edit' ? (
                                <>
                                    <TouchableOpacity
                                        className={`w-[70%] bg-[#234791] p-[15px] rounded-[20px] items-center justify-center mb-[10px]`} // Static styles in className
                                        onPress={() => {}}
                                    >
                                        <Text style={{ fontSize: 16, color: '#F4F6F8' }}> {/* Inline styles for dynamic textSize and textColor */}
                                            Save
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        className={`w-[70%] bg-[#234791] p-[15px] rounded-[20px] items-center justify-center mb-[10px]`} // Static styles in className
                                        onPress={() => {}}
                                    >
                                        <Text style={{ fontSize: 16, color: '#F4F6F8' }}> {/* Inline styles for dynamic textSize and textColor */}
                                            Cancel
                                        </Text>
                                    </TouchableOpacity>
                                </>
                            ) : (
                                <ButtonText text='Submit' buttonColor='#234791' textColor='#F4F6F8' textSize='16' 
                                onPress={() => {}}/>
                            )
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
