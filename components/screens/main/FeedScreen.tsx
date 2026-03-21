import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigation'

// Import car images
import toyotaCamry from '@/assets/car-images/toyota-camry.jpg'
import hondaOdyssey from '@/assets/car-images/honda-odyssey.jpg'
import hdSportster from '@/assets/car-images/hd-sportster.jpg'
import r34Gtr from '@/assets/car-images/r34-gtr.jpg'

// Import user images
import johnDoe from '@/assets/user-images/john-doe.jpg'
import janeSmith from '@/assets/user-images/jane-smith.jpg'
import aliceJohnson from '@/assets/user-images/alice-johnson.jpg'
import bobBrown from '@/assets/user-images/bob-brown.jpg'
import charlieDavis from '@/assets/user-images/charlie-davis.jpg'

export default function FeedScreen() {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const posts = [
        {
            userImage: johnDoe,
            username: 'John Doe',
            content:
                'Just listed my Toyota Camry — low miles, great condition.',
            postImage: toyotaCamry,
            likes: 24,
            comments: 5,
        },
        {
            userImage: janeSmith,
            username: 'Jane Smith',
            content:
                'Family road trip ready in the Odyssey. Any tips for long drives?',
            postImage: hondaOdyssey,
            likes: 18,
            comments: 12,
        },
        {
            userImage: aliceJohnson,
            username: 'Alice Johnson',
            content:
                'Weekend haul with the F-150. No photo this time — text only.',
            likes: 9,
            comments: 3,
        },
        {
            userImage: bobBrown,
            username: 'Bob Brown',
            content: 'Nothing beats the open road on two wheels.',
            postImage: hdSportster,
            likes: 41,
            comments: 8,
        },
        {
            userImage: charlieDavis,
            username: 'Charlie Davis',
            content: 'Dream car acquired. R34 GTR photos incoming.',
            postImage: r34Gtr,
            likes: 156,
            comments: 34,
        },
    ]

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
                    {posts.length ? (
                        posts.map((post, idx) => (
                            <View
                                key={idx}
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

                                <Text className="mb-2 text-[#153A56]">
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
                                            {post.comments} Comments
                                        </Text>
                                    </View>
                                </View>
                            </View>
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
