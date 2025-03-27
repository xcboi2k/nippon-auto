import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import CommentInput from '@/components/shared/CommentInput';
import ButtonText from '@/components/shared/ButtonText';

export default function ReviewEditScreen() {
    const [mode, setMode] = useState("details");
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
                disabled={mode === 'details'}
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
                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="caret-back" size={24} color="#153A56" />
                </TouchableOpacity>
                <Text className='text-[20px] font-bold ml-[10px]'>
                    Edit Review
                </Text>
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
                            editable: mode === "edit"
                        }}
                        customLabel="Review"
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
                                <ButtonText text='Edit' buttonColor='#234791' textColor='#F4F6F8' textSize='16' 
                                onPress={() => {}}/>
                            )
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
