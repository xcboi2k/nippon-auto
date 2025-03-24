import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomTextInput from '@/components/shared/CustomTextInput';
import CommentInput from '@/components/shared/CommentInput';
import ButtonText from '@/components/shared/ButtonText';

export default function ProfileEditScreen() {
    const [mode, setMode] = useState("details");

    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="flex-row items-center h-[70px] px-[30px] w-full mt-[20px] mb-[10px]">
                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="caret-back" size={24} color="#153A56" />
                </TouchableOpacity>
                <Text className='text-[20px] font-bold ml-[10px]'>
                    Edit Profile
                </Text>
            </View>
            <ScrollView>
                <View className='w-full px-[30px] flex flex-col items-center mb-[15px]'>
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter First Name",
                            // onChangeText: formik.handleChange("firstName"),
                            // value: formik.values.firstName,
                            editable: mode === "edit"
                        }}
                        customLabel="First Name:"
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter Last Name",
                            // onChangeText: formik.handleChange("lastName"),
                            // value: formik.values.lastName,
                            editable: mode === "edit"
                        }}
                        customLabel="Last Name:"
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter Username",
                            // onChangeText: formik.handleChange("userName"),
                            // value: formik.values.userName,
                            editable: mode === "edit"
                        }}
                        customLabel="Username:"
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter Email Address",
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            editable: mode === "edit"
                        }}
                        customLabel="Email Address:"
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Enter your shop name",
                            // onChangeText: formik.handleChange("shopName"),
                            // value: formik.values.shopName,
                            editable: mode === "edit"
                        }}
                        customLabel="Shop Name:"
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: "(City/Town, State/Municipality)",
                            // onChangeText: formik.handleChange("location"),
                            // value: formik.values.location,
                            editable: mode === "edit"
                        }}
                        customLabel="Location:"
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput
                        inputProps={{
                            placeholder: "Are you a car enthusiast or a seller?",
                            // onChangeText: formik.handleChange("bio"),
                            // value: formik.values.bio,
                            editable: mode === "edit"
                        }}
                        customLabel="Bio:"
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CommentInput
                        inputProps={{
                            placeholder: "Make a short description about yourself",
                            // onChangeText: formik.handleChange("about"),
                            // value: formik.values.about,
                            editable: mode === "edit"
                        }}
                        customLabel="About:"
                        textSize = '16px'
                    />

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
