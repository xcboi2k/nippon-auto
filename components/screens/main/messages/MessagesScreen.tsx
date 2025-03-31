import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MessagesScreen() {
    const messagesData = [
        {
            id: 1,
            sender: "John Doe",
            message: "Is the Toyota Camry still available?",
            messageCount: 12,
            date: "March 30 2024",
            time: "08:15 AM"
        },
        {
            id: 2,
            sender: "Alice Smith",
            message: "Can you send more pictures of the Honda Civic?",
            messageCount: 8,
            date: "March 29 2024",
            time: "03:45 PM"
        },
        {
            id: 3,
            sender: "Michael Johnson",
            message: "What's the final price for the Ford Mustang?",
            messageCount: 5,
            date: "March 28 2024",
            time: "07:30 PM"
        },
        {
            id: 4,
            sender: "Emily Davis",
            message: "Does the Tesla Model 3 come with a warranty?",
            messageCount: 20,
            date: "March 27 2024",
            time: "10:05 AM"
        },
        {
            id: 5,
            sender: "Robert Brown",
            message: "Can we schedule a test drive for the Jeep Wrangler?",
            messageCount: 3,
            date: "March 26 2024",
            time: "06:50 PM"
        }
    ];

    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="flex-row items-center h-[70px] px-[30px] w-full mt-[20px] mb-[10px]">
                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="caret-back" size={24} color="#153A56" />
                </TouchableOpacity>
                <Text className='text-[20px] font-bold ml-[10px]'>
                    Messages
                </Text>
            </View>
            <ScrollView>
                <View className='w-full px-[30px] flex flex-col items-center mb-[15px]'>
                    {
                        messagesData.map((message, index) => (
                            <TouchableOpacity className='w-full rounded-[8px] bg-[#F4F6F8] p-[10px] mb-[10px]' key={index}>
                                <View className='w-full flex flex-row items-center justify-between mb-[10px]'>
                                    <View className='w-[70%] flex-col'>
                                        <Text className='text-[15px] font-bold text-[#234791] items-start mb-[8px]'>
                                            {message.sender}
                                        </Text>
                                        <Text className='text-[11px] items-start mb-[8px]'>
                                            {message.message}
                                        </Text>
                                        <Text className='text-[11px] items-start text-[#234791]'>
                                            {message.date} - {message.time}
                                        </Text>
                                    </View>
                                    <View className='w-[30px] h-[30px] rounded-[100px] ml-auto bg-[#234791] items-center justify-center'>
                                        <Text className='text-[10px] text-center font-bold text-[#F4F6F8]'>
                                            {message.messageCount}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}
