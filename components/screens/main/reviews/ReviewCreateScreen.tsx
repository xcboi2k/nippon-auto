import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';

import CommentInput from '@/components/shared/CommentInput';
import ButtonText from '@/components/shared/ButtonText';

export default function ReviewCreateScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const [selectedRating, setSelectedRating] = useState<number>(0)
    const handleSelectRating = (rating: number) => {
        setSelectedRating(rating);
    };

    const renderStars = () => {
        const starIcons = [];
        for (let i = 1; i <= 10; i++) {
            starIcons.push(
                <TouchableOpacity
                key={i}
                onPress={() => handleSelectRating(i)}
                >
                    <Ionicons 
                    key={i} 
                    name={i <= selectedRating ? 'star' : 'star-outline'} 
                    size={30} 
                    color="#FFD700" />
                </TouchableOpacity>
            );
            }
            return starIcons;
        };
    
    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="flex-row items-center h-[70px] px-[30px] w-full mt-[20px] mb-[10px]">
                <TouchableOpacity className='flex-row items-center w-[50%]'
                    onPress={() => navigation.navigate('SellerProfile')}
                >
                    <Ionicons name="caret-back" size={24} color="#153A56" />
                    <Text className='text-[20px] font-bold ml-[10px]'>
                        Create Review
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View className='w-full px-[30px] flex flex-col items-center mb-[15px]'>
                    <Text className='text-[16px] mb-[5px]'>Select your rating:</Text>
                    <View className='w-[50%] justify-center flex flex-row mb-[10px]'>
                        {renderStars()}
                    </View>
                    {selectedRating > 1 ?  <Text className='text-[15px] mb-[5px]'>The rating you selected is {selectedRating} stars.</Text>
                    : <Text className='text-[15px] mb-[5px]'>The rating you selected is {selectedRating} star.</Text>
                    }
                </View>
                <View className='w-full px-[30px] flex flex-col items-center mb-[15px]'>
                    <CommentInput 
                        inputProps={{
                            placeholder: "Enter your review",
                            // onChangeText: formik.handleChange("description"),
                            // value: formik.values.description,
                        }}
                        customLabel="Review"
                        textSize = '16px'
                    />
                    <View className='w-full items-center justify-center mb-[15px]'>
                        <ButtonText text='Submit' buttonColor='#234791' textColor='#F4F6F8' textSize='16' 
                            onPress={() => {}}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
