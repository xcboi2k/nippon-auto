import React, { useRef, useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ChatScreen() {
    const messages = [
        { id: 1, text: "Hi! Is the Toyota Camry still available?", time: "10:00 AM", sender: "user" },
        { id: 2, text: "Hello! Yes, it's still available. Are you interested in scheduling a test drive?", time: "10:02 AM", sender: "assistant" },
        { id: 3, text: "Yes, but first, could you provide more details on the mileage and service history?", time: "10:03 AM", sender: "user" },
        { id: 4, text: "Of course! The car has 45,000 miles on it and has been regularly serviced every 5,000 miles.", time: "10:05 AM", sender: "assistant" },
        { id: 5, text: "That sounds good. Has it been involved in any accidents?", time: "10:06 AM", sender: "user" },
        { id: 6, text: "No accidents at all! It has a clean title and a full maintenance record.", time: "10:07 AM", sender: "assistant" },
        { id: 7, text: "Great! What would be the final price if I decide to buy it today?", time: "10:08 AM", sender: "user" },
        { id: 8, text: "We’re asking $22,500, but we’re open to reasonable offers.", time: "10:09 AM", sender: "assistant" },
        { id: 9, text: "Got it. Can I come by to see the car this weekend?", time: "10:10 AM", sender: "user" },
        { id: 10, text: "Yes! We’re available on Saturday and Sunday. Let me know what time works for you.", time: "10:12 AM", sender: "assistant" }
    ];

    const scrollViewRef = useRef<ScrollView>(null);

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            className="flex-1"
        >
            <View className="relative flex-1 justify-start pb-[20px] w-full">
                <View className="flex-row items-center h-[70px] px-[30px] w-full mt-[20px] mb-[10px]">
                    <TouchableOpacity className='flex-row items-center w-[50%]'
                        onPress={() => {}}
                    >
                        <Ionicons name="caret-back" size={24} color="#153A56" />
                        <Text className='text-[20px] font-bold ml-[10px]'>
                            John Doe
                        </Text>
                    </TouchableOpacity>
                    <View className='ml-auto'>
                        <TouchableOpacity onPress={() => {}}>
                            <Ionicons name="settings-sharp" size={24} color="#153A56" />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    ref={scrollViewRef}
                    className="mb-[20px] w-full px-[30px]"
                    contentContainerStyle={{ paddingBottom: 80 }}
                    keyboardShouldPersistTaps="handled"
                    onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
                >
                    {messages.map((item) => (
                        <View key={item.id} className={`my-2 ${item.sender === "user" ? "items-end" : "items-start"}`}>
                            <View className={`rounded-xl p-3 max-w-[75%] ${item.sender === "user" ? "bg-[#234791]" : "bg-[#F4F6F8]"}`}>
                                <Text className={`text-sm ${item.sender === "user" ? "text-[#F4F6F8]" : "text-black"}`}>{item.text}</Text>
                            </View>
                            <Text className="text-xs text-[#234791] mt-1">{item.time}</Text>
                        </View>
                    ))}
                </ScrollView>
                {/* Input Field */}
                <View className="absolute bottom-4 left-4 right-4 bg-[#234791] p-3 rounded-full flex-row items-center">
                    <MaterialIcons name="emoji-emotions" size={24} color='#F4F6F8' />
                    <TextInput 
                        placeholder="Write here..." 
                        placeholderTextColor="#ccc" 
                        className="flex-1 mx-2 text-white" 
                    />
                    <Ionicons name="mic" size={24} color='#F4F6F8' />
                    <TouchableOpacity className="ml-2">
                        <Ionicons name="send" size={24} color='#F4F6F8'/>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
        
    )
}
