import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';

export default function ProfileMenuScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="flex-row items-center h-[70px] px-[30px] w-full mt-[20px] mb-[10px]">
                {/* <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="caret-back" size={24} color="#153A56" />
                </TouchableOpacity> */}
                <Text className='text-[20px] font-bold'>
                    Hi User!
                </Text>
            </View>
            <ScrollView>
                <View className='w-full px-[30px] flex flex-col items-center mb-[15px]'>
                    <TouchableOpacity className='flex-row w-full items-center justify-between mb-[20px]'
                        onPress={() => navigation.navigate('ProfileView')}
                    >
                        <View className='flex-row w-[70%] items-center'>
                            <View className="w-[40px] h-[40px] rounded-full bg-[#234791] items-center justify-center p-[5px] mr-[20px]">
                                <FontAwesome name="user" size={24} color='white' />
                            </View>
                            <Text className='text-[20px] font-bold text-[#234791]'>
                                Profile
                            </Text>
                        </View>
                        <View className='ml-auto items-center'>
                            <Ionicons name="caret-forward" size={20} color="#234791" />
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity className='flex-row w-full items-center justify-between mb-[20px]'
                        onPress={() => navigation.navigate('MyListings')}
                    >
                        <View className='flex-row w-[70%] items-center'>
                            <View className="w-[40px] h-[40px] rounded-full bg-[#234791] items-center justify-center p-[5px] mr-[20px]">
                                <FontAwesome6 name="car-on" size={20} color="white" />
                            </View>
                            <Text className='text-[20px] font-bold text-[#234791]'>
                                My Listings
                            </Text>
                        </View>
                        <View className='ml-auto items-center'>
                            <Ionicons name="caret-forward" size={20} color="#234791" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-row w-full items-center justify-between mb-[20px]'
                        onPress={() => navigation.navigate('MyReviews')}
                    >
                        <View className='flex-row w-[70%] items-center'>
                            <View className="w-[40px] h-[40px] rounded-full bg-[#234791] items-center justify-center p-[5px] mr-[20px]">
                                <Ionicons name="star" size={24} color="white" />
                            </View>
                            <Text className='text-[20px] font-bold text-[#234791]'>
                                My Reviews
                            </Text>
                        </View>
                        <View className='ml-auto items-center'>
                            <Ionicons name="caret-forward" size={20} color="#234791" />
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity className='flex-row w-full items-center justify-between mb-[20px]'>
                        <View className='flex-row w-[70%] items-center'>
                            <View className="w-[40px] h-[40px] rounded-full bg-[#234791] items-center justify-center p-[5px] mr-[20px]">
                                <MaterialIcons name="exit-to-app" size={24} color="white" />
                            </View>
                            <Text className='text-[20px] font-bold text-[#234791]'>
                                Logout
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
