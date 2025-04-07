import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';

import ButtonText from '@/components/shared/ButtonText';

export default function UserListingDetailsScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const [activeTab, setActiveTab] = useState('Description');
    const tabs = [
        { id: 1, title: 'Description', content: "Lorem Ipsum Description" },
        { id: 2, title: 'Features', content: "Lorem Ipsum Features" },
        { id: 3, title: 'Vehicle Info', content: "Lorem Ipsum Vehicle Info" },
    ];

    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="flex-row items-center h-[70px] px-[30px] w-full mt-[20px]">
                <View className='flex-row items-center w-[50%]'>
                    <TouchableOpacity className='flex-row items-center w-[50%]'
                        onPress={() => navigation.navigate('MyListings')}
                    >
                        <Ionicons name="caret-back" size={24} color="#153A56" />
                        <Text className='text-[20px] font-bold ml-[10px]'>
                            Details
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className='ml-auto'>
                    <TouchableOpacity onPress={() => {}}>
                        <MaterialCommunityIcons name="share" size={24} color="#153A56" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View className='w-full flex-col px-[30px] mt-2 mb-[10px]'>
                    <View className="w-full h-[215px] overflow-hidden mb-[10px]">
                        <Image
                            source={require('@/assets/images/sample-vehicle.jpg')}
                            className="w-full h-full"
                            resizeMode="cover"
                        />
                    </View>
                    <View className='w-full flex flex-row items-start mb-[10px]'>
                        <View className='w-[40%] flex flex-row items-center'>
                            <Ionicons name="time" size={15} color="#C2C7CB" />
                            <Text className='text-[13px] text-[#C2C7CB] ml-[5px]'>January 2, 2025</Text>
                        </View>
                        <View className='w-[50%] flex flex-row items-center'>
                            <Ionicons name="location" size={15} color="#C2C7CB" />
                            <Text className='text-[13px] text-[#C2C7CB] ml-[5px]'>Manila</Text>
                        </View>
                    </View>
                    <Text className='text-[24px] font-bold text-[#234791] items-start mb-[5px]'>
                        PHP 25,000
                    </Text>
                    <Text className='text-[24px] font-bold text-[#153A56] items-start mb-[15px]'>
                        Car
                    </Text>
                    <View className='w-full flex flex-row justify-between'>
                        <View className='flex-1 items-center bg-[#F4F6F8] rounded-l-[8px] px-[10px] py-[15px] mr-[3px] justify-center'>
                            <Text className='text-[14px] font-bold text-[#234791]'>
                                1999
                            </Text>
                            <Text className='text-[12px] text-[#C2C7CB]'>
                                Year
                            </Text>
                        </View>
                        <View className='flex-1 items-center bg-[#F4F6F8] px-[10px] py-[15px] mr-[3px] justify-center'>
                            <Text className='text-[14px] font-bold text-[#234791]'>
                                Manual
                            </Text>
                            <Text className='text-[12px] text-[#C2C7CB]'>
                                Transmission
                            </Text>
                        </View>
                        <View className='flex-1 items-center bg-[#F4F6F8] rounded-r-[8px] px-[10px] py-[15px] ml-[3px] justify-center'>
                            <Text className='text-[14px] font-bold text-[#234791]'>
                                80,000
                            </Text>
                            <Text className='text-[12px] text-[#C2C7CB]'>
                                KM/s
                            </Text>
                        </View>
                    </View>
                </View>
                <View className='w-full px-[30px] flex-1 bg-[#FFFFFF] mb-[15px]'>
                    <View className='flex flex-row border-b-[1px] border-b-[#CCC]'>
                        {
                            tabs.map((tab) => (
                                <TouchableOpacity key={tab.id} className='flex-1 p-[10px] items-center' onPress={() => setActiveTab(tab.title)}>
                                    <Text className={`text-[14px] font-bold ${activeTab === tab.title ? 'text-[#234791]' : 'text-[#C2C7CB]'}`}>
                                        {tab.title}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    {
                        tabs.map((tab) => (
                            activeTab === tab.title && (
                                <View key={tab.id} className='p-[16px]'>
                                    <Text className='text-[12px] text-[#1a71a]'>
                                        {tab.content}
                                    </Text>
                                </View>
                            )
                        ))
                    }
                </View>
                <View className='w-full px-[30px] items-center justify-center'>
                    <ButtonText text='Edit' buttonColor='#234791' textColor='#F4F6F8' textSize='16' 
                            onPress={() => navigation.navigate('MyListingEdit')}/>
                </View>
            </ScrollView>
        </View>
    )
}
