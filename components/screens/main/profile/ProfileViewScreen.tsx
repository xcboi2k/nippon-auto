import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';

export default function ProfileViewScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="flex-row items-center h-[70px] px-[30px] w-full mt-[20px] mb-[10px]">
                <TouchableOpacity className='flex-row items-center w-[50%]'
                    onPress={() => navigation.navigate('ProfileMain')}
                >
                    <Ionicons name="caret-back" size={24} color="#153A56" />
                    <Text className='text-[20px] font-bold ml-[10px]'>
                        My Profile
                    </Text>
                </TouchableOpacity>
                <View className='ml-auto'>
                    <TouchableOpacity onPress={() => navigation.navigate('ProfileEdit')}>
                        <MaterialIcons name="mode-edit" size={24} color="#153A56"  />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View className='w-full px-[30px] flex flex-row items-center mb-[15px]'>
                    <TouchableOpacity className='mr-[8px]'>
                        <Image 
                            source={require('@/assets/images/profile-pic-placeholder.png')}
                            className="w-[80px] h-[80px] rounded-[100px]"
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                    <View className='flex-1 flex-row items-center'>
                        <View className='flex-1 items-center flex-col'>
                            <Text className='text-[20px] font-bold text-[#333] mb-[5px]'>
                                10
                            </Text>
                            <Text className='text-[15px] text-[#666]'>
                                Listings
                            </Text>
                        </View>
                        <View className='flex-1 items-center flex-col'>
                            <Text className='text-[20px] font-bold text-[#333] mb-[5px]'>
                                9.8/10
                            </Text>
                            <Text className='text-[15px] text-[#666]'>
                                Rating
                            </Text>
                        </View>
                    </View>
                </View>

                <View className='w-full px-[30px] flex-col mb-[15px]'>
                    <View className='w-full flex flex-row items-center'>
                        <Text className='text-[28px] font-bold text-[#333]'>
                            John Doe
                        </Text>
                    </View>
                    <View className='w-full flex flex-row mb-[10px]'>
                        <Text className='text-[18px] italic text#234791]'>
                            @johndoe_123
                        </Text>
                    </View>
                    <View className='w-full flex flex-row mb-[10px]'>
                        <Text className='text-[16px] text[#666]'>
                            Car Seller
                        </Text>
                    </View>
                </View>

                <View className='w-full px-[30px] flex flex-row items-center mb-[10px]'>
                    <View className='flex-1 flex flex-row items-center'>
                        <MaterialIcons name="store" size={15} color="#153A56" />
                        <Text className='text-[14px] text[#666] ml-[10px]'>
                            My Shop
                        </Text>
                    </View>
                    <View className='flex-1 flex flex-row items-center'>
                        <MaterialIcons name="location-on" size={15} color="#153A56" />
                        <Text className='text-[14px] text[#666] ml-[10px]'>
                            My Location
                        </Text>
                    </View>
                </View>
                <View className='w-full px-[30px] flex flex-row items-center mb-[10px]'>
                    <View className='flex-1 flex flex-row items-center'>
                        <MaterialIcons name="email" size={15} color="#153A56" />
                        <Text className='text-[14px] text[#666] ml-[10px]'>
                            johndoe@email.com
                        </Text>
                    </View>
                    <View className='flex-1 flex flex-row items-center'>
                        <MaterialIcons name="phone" size={15} color="#153A56" />
                        <Text className='text-[14px] text[#666] ml-[10px]'>
                            1234 - 5678 - 0000
                        </Text>
                    </View>
                </View>

                <View className='w-full px-[30px] flex-col mt-[15px] mb-[30px]'>
                    <Text className='text-[24px] font-bold text-[#333] mb-[10px]'>
                        About
                    </Text>
                    <Text className='text-[16px] text[#666]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </View>

                <View className='w-full items-center justify-center mb-[15px]'>
                    <TouchableOpacity
                        className={`w-[70%] bg-[#234791] p-[15px] rounded-[20px] items-center justify-center mb-[10px]`} // Static styles in className
                        onPress={() => navigation.navigate('MyListings')}
                    >
                        <Text style={{ fontSize: 16, color: '#F4F6F8' }}> {/* Inline styles for dynamic textSize and textColor */}
                            My Listings
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`w-[70%] bg-[#234791] p-[15px] rounded-[20px] items-center justify-center mb-[10px]`} // Static styles in className
                        onPress={() => navigation.navigate('MyReviews')}
                    >
                        <Text style={{ fontSize: 16, color: '#F4F6F8' }}> {/* Inline styles for dynamic textSize and textColor */}
                            My Reviews
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
