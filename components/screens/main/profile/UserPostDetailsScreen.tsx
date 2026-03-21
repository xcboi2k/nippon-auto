import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigation'

import PostDetailsContent, {
    type PostDetailsModel,
} from '@/components/screens/main/vehicle-post/PostDetailsContent'
import { getProfileUserPostById } from '@/data/profileUserPosts'

export default function UserPostDetailsScreen() {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const route = useRoute<RouteProp<RootStackParamList, 'MyPostDetails'>>()
    const { postId } = route.params

    const raw = getProfileUserPostById(postId)

    if (!raw) {
        return (
            <View className="flex-1 justify-start pb-[20px] w-full">
                <View className="flex-row items-center h-[70px] px-[30px] w-full mt-[50px]">
                    <TouchableOpacity
                        className="flex-row items-center"
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="caret-back" size={24} color="#153A56" />
                        <Text className="text-[20px] font-bold ml-[10px] text-[#153A56]">
                            Post
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className="px-[30px] mt-4">
                    <Text className="text-[#153A56]">
                        This post could not be found.
                    </Text>
                </View>
            </View>
        )
    }

    const post: PostDetailsModel = {
        userImage: raw.userImage,
        username: raw.username,
        location: raw.location,
        postedAt: raw.postedAt,
        content: raw.content,
        postImage: raw.postImage,
        likes: raw.likes,
    }

    return (
        <PostDetailsContent
            headerTitle="Post"
            onBack={() => navigation.goBack()}
            post={post}
            comments={raw.comments}
            onPressMessageAuthor={() => {}}
            onPressViewProfile={() => navigation.navigate('ProfileView')}
        />
    )
}
