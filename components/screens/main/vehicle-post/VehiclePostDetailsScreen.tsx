import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigation'

import { PROFILE_USER_POSTS } from '@/data/profileUserPosts'
import PostDetailsContent, {
    type PostDetailsModel,
} from './PostDetailsContent'

export default function VehiclePostDetailsScreen() {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const raw = PROFILE_USER_POSTS[0]
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
            headerTitle="Details"
            onBack={() => navigation.navigate('FeedMain')}
            post={post}
            comments={raw.comments}
            onPressMessageAuthor={() => {}}
            onPressViewProfile={() => navigation.navigate('SellerProfile')}
        />
    )
}
