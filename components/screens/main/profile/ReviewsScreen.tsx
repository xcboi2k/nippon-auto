import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';

export default function ReviewsScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const [activeTab, setActiveTab] = useState<'from' | 'to'>('from');
    const reviews = [
        {
            user_name: 'John Smith',
            rating: 9,
            review_description: 'Excellent car! Smooth ride and great fuel efficiency. Would definitely recommend.',
            type: 'from_seller',
        },
        {
            user_name: 'Sarah Johnson',
            rating: 7,
            review_description: 'Good condition overall, but the interior could use some cleaning.',
            type: 'to_seller',
        },
        {
            user_name: 'Michael Chen',
            rating: 10,
            review_description: 'Perfect vehicle! Exceeded all my expectations. The seller was very professional.',
            type: 'from_seller',
        },
        {
            user_name: 'Emily Wilson',
            rating: 8,
            review_description: 'Reliable car with low mileage. Only minor scratches on the exterior.',
            type: 'to_seller',
        }
    ];

    const filteredReviews = reviews.filter(review => 
        activeTab === 'to' 
            ? review.type === 'to_seller' 
            : review.type === 'from_seller'
    );

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
                <TouchableOpacity className='flex-row items-center w-[50%]'
                    onPress={() => navigation.navigate('ProfileView')}
                >
                    <Ionicons name="caret-back" size={24} color="#153A56" />
                    <Text className='text-[20px] font-bold ml-[10px]'>
                        My Reviews
                    </Text>
                </TouchableOpacity>
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
                <View className="flex-row justify-center mb-4 border-b border-gray-200">
                    <TouchableOpacity
                    className={`pb-2 px-4 ${activeTab === 'from' ? 'border-b-2 border-[#234791]' : ''}`}
                    onPress={() => setActiveTab('from')}
                    >
                    <Text className={`font-medium ${activeTab === 'from' ? 'text-[#234791]' : 'text-gray-500'}`}>
                        Reviews From Buyer
                    </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                    className={`pb-2 px-4 ${activeTab === 'to' ? 'border-b-2 border-[#234791]' : ''}`}
                    onPress={() => setActiveTab('to')}
                    >
                    <Text className={`font-medium ${activeTab === 'to' ? 'text-[#234791]' : 'text-gray-500'}`}>
                        Reviews To Seller
                    </Text>
                    </TouchableOpacity>
                </View>
                            <View className='w-full px-[30px] flex flex-col items-center mb-[15px]'>
                    {
                        filteredReviews ? (
                            filteredReviews.map((item, index) => (
                                <View className="w-full rounded-lg bg-[#F4F6F8] mb-4 p-4" key={index}>
                                    <View className="flex-row items-center justify-between mb-2">
                                        <Text className="text-lg font-bold text-[#153A56]">{item.user_name}</Text>
                                        <View className="flex-row items-center">
                                            <Ionicons name="star" size={13} color="#153A56" />
                                            <Text className="text-xs text-gray-500 ml-1">{item.rating}/10</Text>
                                        </View>
                                    </View>
                                    <Text className="text-xs mb-[15px]">{item.review_description}</Text>
                                    {
                                        item.type === 'to_seller' && (
                                            <TouchableOpacity className="flex-row items-center" onPress={() => navigation.navigate('MyReviewEdit')}>
                                                <MaterialIcons name="mode-edit" size={13} color="#153A56" />
                                                <Text className="text-xs text-gray-500 ml-1">Edit</Text>
                                            </TouchableOpacity>
                                        )
                                    }
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
