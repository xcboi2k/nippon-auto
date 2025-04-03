import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';

export default function UserListingScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const carListings = [
        {
            id: 1,
            place: "Los Angeles, CA",
            price: "$25,000",
            model: "Tesla Model 3"
        },
        {
            id: 2,
            place: "Miami, FL",
            price: "$32,500",
            model: "BMW X5"
        },
        {
            id: 3,
            place: "New York, NY",
            price: "$18,900",
            model: "Honda Accord"
        },
        {
            id: 4,
            place: "Austin, TX",
            price: "$27,750",
            model: "Ford Mustang"
        },
        {
            id: 5,
            place: "Seattle, WA",
            price: "$22,300",
            model: "Toyota Camry"
        }
    ];

    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="flex-row items-center h-[70px] px-[30px] w-full mt-[20px] mb-[10px]">
                <TouchableOpacity className='flex-row items-center w-[50%]'
                    onPress={() => navigation.navigate('ProfileView')}
                >
                    <Ionicons name="caret-back" size={24} color="#153A56" />
                    <Text className='text-[20px] font-bold ml-[10px]'>
                        My Listings
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View className='w-full px-[30px] flex flex-col items-center mb-[15px]'>
                    {
                        carListings.map((item, index) => (
                            <View className='w-full rounded-[8px] bg-[#F4F6F8] p-[10px] mb-[25px]' key={index}>
                                <Image 
                                    source={require('@/assets/images/item-pic-placeholder.png')}
                                    className="w-[100%] h-[200px] rounded-[8px]"
                                    resizeMode="cover"
                                />
                                <View className='w-full flex flex-row items-center justify-between p-[16px] mb-[10px]'>
                                    <View className='flex flex-col'> 
                                        <Text className='text-[20px] font-bold text-[#234791] items-start mb-[8px]'>
                                            {item.price}
                                        </Text>
                                        <Text className='text-[16px] text-[#153A56] items-start'>
                                            {item.model}
                                        </Text>
                                    </View>
                                    <View className='flex flex-row items-center ml-auto'>
                                        <TouchableOpacity onPress={() => {}}>
                                            <MaterialIcons name="edit" size={24} color="#153A56" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}
