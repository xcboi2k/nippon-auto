import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigation'

import { FEED_POSTS } from '@/data/feedPosts'

export default function FeedScreen() {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="flex-row items-center h-[50px] px-[30px] w-full mt-[50px] justify-center mb-[10px]">
                <Image
                    source={require('@/assets/logos/logo.png')}
                    className="w-[50px] h-[50px]"
                    resizeMode="cover"
                />
            </View>

            <ScrollView>
                <View className="w-full px-[30px] mb-[15px] justify-center">
                    {FEED_POSTS.length ? (
                        FEED_POSTS.map((post) => (
                            <TouchableOpacity
                                key={post.id}
                                activeOpacity={0.85}
                                onPress={() =>
                                    navigation.navigate('VehiclePostDetails', {
                                        postId: post.id,
                                    })
                                }
                                className="w-full max-w-md bg-[#F4F6F8] rounded-lg p-4 shadow mb-[15px]"
                            >
                                <View className="flex flex-row items-center mb-3">
                                    <Image
                                        source={post.userImage}
                                        accessibilityLabel={post.username}
                                        className="w-10 h-10 rounded-full mr-3"
                                        resizeMode="cover"
                                    />
                                    <View>
                                        <Text className="font-bold text-[#153A56]">
                                            {post.username}
                                        </Text>
                                    </View>
                                </View>

                                <Text className="mb-2 text-black">
                                    {post.content}
                                </Text>

                                {post.postImage ? (
                                    <Image
                                        source={post.postImage}
                                        accessibilityLabel="Post"
                                        className="w-full h-60 rounded mb-2"
                                        resizeMode="cover"
                                    />
                                ) : null}

                                <View className="flex flex-row gap-4">
                                    <View className="flex flex-row items-center gap-1">
                                        <Ionicons
                                            name="heart-outline"
                                            size={16}
                                            color="#153A56"
                                        />
                                        <Text className="text-sm text-[#153A56]">
                                            {post.likes} Likes
                                        </Text>
                                    </View>
                                    <View className="flex flex-row items-center gap-1">
                                        <Ionicons
                                            name="chatbubble-outline"
                                            size={16}
                                            color="#153A56"
                                        />
                                        <Text className="text-sm text-[#153A56]">
                                            {post.comments.length} Comments
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text className="text-[#153A56] font-bold">
                            No posts yet.
                        </Text>
                    )}
                </View>
            </ScrollView>
            <TouchableOpacity
                className="absolute bottom-4 right-6 w-14 h-14 rounded-full bg-[#234791] justify-center items-center shadow-lg"
                onPress={() => navigation.navigate('VehiclePostCreate')}
            >
                <Ionicons name="add" size={28} color="white" />
            </TouchableOpacity>
        </View>
    )
}
