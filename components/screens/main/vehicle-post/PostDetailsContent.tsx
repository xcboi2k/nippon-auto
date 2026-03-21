import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import type { ImageSourcePropType } from 'react-native'

import ButtonText from '@/components/shared/ButtonText'

export type PostDetailsComment = {
    id: string
    author: string
    userImage: ImageSourcePropType
    timeAgo: string
    body: string
}

export type PostDetailsModel = {
    userImage: ImageSourcePropType
    username: string
    location: string
    postedAt: string
    content: string
    postImage?: ImageSourcePropType
    likes: number
}

type Props = {
    headerTitle: string
    onBack: () => void
    post: PostDetailsModel
    comments: PostDetailsComment[]
    onPressMessageAuthor: () => void
    onPressViewProfile: () => void
}

export default function PostDetailsContent({
    headerTitle,
    onBack,
    post,
    comments,
    onPressMessageAuthor,
    onPressViewProfile,
}: Props) {
    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="flex-row items-center h-[70px] px-[30px] w-full mt-[20px]">
                <View className="flex-row items-center flex-1">
                    <TouchableOpacity
                        className="flex-row items-center"
                        onPress={onBack}
                    >
                        <Ionicons name="caret-back" size={24} color="#153A56" />
                        <Text className="text-[20px] font-bold ml-[10px]">
                            {headerTitle}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => {}}>
                    <MaterialCommunityIcons
                        name="share-variant"
                        size={24}
                        color="#153A56"
                    />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View className="w-full flex-col px-[30px] mt-2 mb-[10px]">
                    <View className="w-full flex flex-row items-center mb-4">
                        <Image
                            source={post.userImage}
                            accessibilityLabel={post.username}
                            className="w-12 h-12 rounded-full mr-3"
                            resizeMode="cover"
                        />
                        <View className="flex-1">
                            <Text className="text-[16px] font-bold text-[#153A56]">
                                {post.username}
                            </Text>
                            <View className="flex flex-row items-center mt-1 flex-wrap">
                                <Ionicons
                                    name="time-outline"
                                    size={14}
                                    color="#C2C7CB"
                                />
                                <Text className="text-[13px] text-[#C2C7CB] ml-1 mr-3">
                                    {post.postedAt}
                                </Text>
                                <Ionicons
                                    name="location-outline"
                                    size={14}
                                    color="#C2C7CB"
                                />
                                <Text className="text-[13px] text-[#C2C7CB] ml-1">
                                    {post.location}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {post.postImage ? (
                        <View className="w-full h-[215px] overflow-hidden mb-3 rounded-lg">
                            <Image
                                source={post.postImage}
                                className="w-full h-full"
                                resizeMode="cover"
                                accessibilityLabel="Post image"
                            />
                        </View>
                    ) : null}

                    <Text className="text-[16px] text-[#153A56] leading-[22px] mb-4">
                        {post.content}
                    </Text>

                    <View className="flex flex-row gap-6 mb-6">
                        <View className="flex flex-row items-center gap-1">
                            <Ionicons
                                name="heart-outline"
                                size={18}
                                color="#153A56"
                            />
                            <Text className="text-sm text-[#153A56]">
                                {post.likes} Likes
                            </Text>
                        </View>
                        <View className="flex flex-row items-center gap-1">
                            <Ionicons
                                name="chatbubble-outline"
                                size={18}
                                color="#153A56"
                            />
                            <Text className="text-sm text-[#153A56]">
                                {comments.length} Comments
                            </Text>
                        </View>
                    </View>
                </View>

                <View className="w-full px-[30px] mb-4">
                    <Text className="text-[16px] font-bold text-[#153A56] mb-3">
                        Comments ({comments.length})
                    </Text>
                    <View className="rounded-lg bg-[#F4F6F8] overflow-hidden">
                        {comments.map((c, i) => (
                            <View
                                key={c.id}
                                className={`flex flex-row px-4 py-3 ${i < comments.length - 1 ? 'border-b border-[#E0E4E8]' : ''}`}
                            >
                                <Image
                                    source={c.userImage}
                                    accessibilityLabel={c.author}
                                    className="w-10 h-10 rounded-full mr-3"
                                    resizeMode="cover"
                                />
                                <View className="flex-1">
                                    <View className="flex flex-row items-baseline justify-between gap-2">
                                        <Text className="text-[14px] font-bold text-[#153A56]">
                                            {c.author}
                                        </Text>
                                        <Text className="text-[12px] text-[#C2C7CB]">
                                            {c.timeAgo}
                                        </Text>
                                    </View>
                                    <Text className="text-[14px] text-[#153A56] mt-1 leading-[20px]">
                                        {c.body}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                <View className="w-full px-[30px] items-center justify-center pb-6">
                    <TouchableOpacity
                        className="w-[70%] bg-[#234791] p-[15px] rounded-[20px] items-center justify-center mb-[10px] flex flex-row"
                        onPress={onPressMessageAuthor}
                    >
                        <Ionicons
                            name="chatbox-ellipses"
                            size={24}
                            color="#F4F6F8"
                        />
                        <Text className="text-[16px] text-[#F4F6F8] ml-[8px]">
                            Message author
                        </Text>
                    </TouchableOpacity>
                    <ButtonText
                        text="View profile"
                        buttonColor="#234791"
                        textColor="#F4F6F8"
                        textSize="16"
                        onPress={onPressViewProfile}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
