import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ReviewsScreen() {
    const reviews = [
        {
            user_name: 'John Smith',
            rating: 9,
            review_description: 'Excellent car! Smooth ride and great fuel efficiency. Would definitely recommend.'
        },
        {
            user_name: 'Sarah Johnson',
            rating: 7,
            review_description: 'Good condition overall, but the interior could use some cleaning.'
        },
        {
            user_name: 'Michael Chen',
            rating: 10,
            review_description: 'Perfect vehicle! Exceeded all my expectations. The seller was very professional.'
        },
        {
            user_name: 'Emily Wilson',
            rating: 8,
            review_description: 'Reliable car with low mileage. Only minor scratches on the exterior.'
        }
    ];
    const numObjects = 2
    const renderStars = (rating: number) => {
        const starIcons = [];
        for (let i = 1; i <= 10; i++) {
            starIcons.push(
                <Ionicons 
                    key={i} 
                    name={i <= rating ? 'star' : 'star-outline'} 
                    size={30} 
                    color="#FFD700" />
            );
            }
            return starIcons;
        };
    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="flex-row items-center h-[70px] px-[30px] w-full mt-[20px] mb-[10px]">
                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="caret-back" size={24} color="#153A56" />
                </TouchableOpacity>
                <Text className='text-[20px] font-bold ml-[10px]'>
                    My Reviews
                </Text>
            </View>
            <ScrollView>
                <View className='w-full px-[30px] flex flex-col items-center mb-[15px]'>
                    <Text className='text-[20px] text-[#234791] text-center mb-[8px]'>
                        My Overall Rating
                    </Text>
                    <Text className='text-[75px] text-[#153A56] text-center font-bold mb-[8px]'>
                        10
                    </Text>
                    <View className='w-[50%] justify-center flex flex-row mb-[10px]'>
                        {renderStars(10)}
                    </View>
                    {numObjects > 1 ?  
                    <Text className='text-[18px] mb-[8px]'>Based on {numObjects} reviews</Text>
                    : <Text className='text-[18px] mb-[8px]'>Based on {numObjects} review</Text>
                    }
                </View>
                <View className='w-full px-[30px] flex flex-col items-center mb-[15px]'>
                    {
                        reviews ? (
                            reviews.map((item, index) => (
                                <View className="w-full rounded-lg bg-[#F4F6F8] mb-4 p-4" key={index}>
                                    <View className="flex-row items-center justify-between mb-2">
                                        <Text className="text-lg font-bold text-[#153A56]">{item.user_name}</Text>
                                        <View className="flex-row items-center">
                                            <Ionicons name="star" size={13} color="#153A56" />
                                            <Text className="text-xs text-gray-500 ml-1">{item.rating}/10</Text>
                                        </View>
                                    </View>
                                    <Text className="text-xs">{item.review_description}</Text>
                                </View>
                            ))
                        ) : (
                            <Text className='text-[18px] mb-[8px]'>There are no reviews available right now.</Text>
                        )
                    }
                </View>
            </ScrollView>
        </View>
    )
}
