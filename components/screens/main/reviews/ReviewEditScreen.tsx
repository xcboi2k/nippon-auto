import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ReviewEditScreen() {
    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="flex-row items-center h-[70px] px-[30px] w-full mt-[20px] mb-[10px]">
                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="caret-back" size={24} color="#153A56" />
                </TouchableOpacity>
                <Text className='text-[20px] font-bold ml-[10px]'>
                    Review
                </Text>
            </View>
            <ScrollView>

            </ScrollView>
        </View>
    )
}
