import type { ImageSourcePropType } from 'react-native'

import toyotaCamry from '@/assets/car-images/toyota-camry.jpg'
import hondaOdyssey from '@/assets/car-images/honda-odyssey.jpg'
import hdSportster from '@/assets/car-images/hd-sportster.jpg'
import johnDoe from '@/assets/user-images/john-doe.jpg'
import janeSmith from '@/assets/user-images/jane-smith.jpg'
import aliceJohnson from '@/assets/user-images/alice-johnson.jpg'
import bobBrown from '@/assets/user-images/bob-brown.jpg'

export type PostDetailComment = {
    id: string
    author: string
    userImage: ImageSourcePropType
    timeAgo: string
    body: string
}

export type ProfileUserPostDetail = {
    id: string
    userImage: ImageSourcePropType
    username: string
    location: string
    postedAt: string
    content: string
    postImage?: ImageSourcePropType
    likes: number
    comments: PostDetailComment[]
}

export const PROFILE_USER_POSTS: ProfileUserPostDetail[] = [
    {
        id: '1',
        userImage: johnDoe,
        username: 'John Doe',
        location: 'Manila',
        postedAt: 'January 2, 2025',
        content:
            'Just listed my Toyota Camry — low miles, great condition.',
        postImage: toyotaCamry,
        likes: 24,
        comments: [
            {
                id: 'c1',
                author: 'Jane Smith',
                userImage: janeSmith,
                timeAgo: '2h ago',
                body: 'Looks clean! Is it still available?',
            },
            {
                id: 'c2',
                author: 'Alice Johnson',
                userImage: aliceJohnson,
                timeAgo: '5h ago',
                body: 'Sent you a DM about a viewing this weekend.',
            },
            {
                id: 'c3',
                author: 'Bob Brown',
                userImage: bobBrown,
                timeAgo: '1d ago',
                body: 'Price negotiable or firm?',
            },
        ],
    },
    {
        id: '2',
        userImage: johnDoe,
        username: 'John Doe',
        location: 'Makati',
        postedAt: 'December 18, 2024',
        content:
            'Odyssey served us well for three road trips this year. Sharing a few maintenance tips that worked for us.',
        postImage: hondaOdyssey,
        likes: 11,
        comments: [
            {
                id: 'c1',
                author: 'Bob Brown',
                userImage: bobBrown,
                timeAgo: '3d ago',
                body: 'What tire pressure do you run on long trips?',
            },
        ],
    },
    {
        id: '3',
        userImage: johnDoe,
        username: 'John Doe',
        location: 'Quezon City',
        postedAt: 'December 1, 2024',
        content:
            'Thinking about listing the weekend bike soon. Stay tuned for photos.',
        likes: 3,
        comments: [
            {
                id: 'c1',
                author: 'Jane Smith',
                userImage: janeSmith,
                timeAgo: '1w ago',
                body: 'Following for the listing!',
            },
        ],
    },
    {
        id: '4',
        userImage: johnDoe,
        username: 'John Doe',
        location: 'BGC',
        postedAt: 'November 22, 2024',
        content: 'Sunset ride along the coast — nothing beats two wheels.',
        postImage: hdSportster,
        likes: 52,
        comments: [
            {
                id: 'c1',
                author: 'Alice Johnson',
                userImage: aliceJohnson,
                timeAgo: '4h ago',
                body: 'Stunning shot.',
            },
            {
                id: 'c2',
                author: 'Bob Brown',
                userImage: bobBrown,
                timeAgo: '2d ago',
                body: 'Which route is this?',
            },
        ],
    },
]

export function getProfileUserPostById(
    postId: string
): ProfileUserPostDetail | undefined {
    return PROFILE_USER_POSTS.find((p) => p.id === postId)
}
