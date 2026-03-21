import type { ProfileUserPostDetail } from '@/data/profileUserPosts'

import toyotaCamry from '@/assets/car-images/toyota-camry.jpg'
import hondaOdyssey from '@/assets/car-images/honda-odyssey.jpg'
import hdSportster from '@/assets/car-images/hd-sportster.jpg'
import r34Gtr from '@/assets/car-images/r34-gtr.jpg'
import johnDoe from '@/assets/user-images/john-doe.jpg'
import janeSmith from '@/assets/user-images/jane-smith.jpg'
import aliceJohnson from '@/assets/user-images/alice-johnson.jpg'
import bobBrown from '@/assets/user-images/bob-brown.jpg'
import charlieDavis from '@/assets/user-images/charlie-davis.jpg'

export const FEED_POSTS: ProfileUserPostDetail[] = [
    {
        id: 'f1',
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
                author: 'Bob Brown',
                userImage: bobBrown,
                timeAgo: '5h ago',
                body: 'DM sent.',
            },
        ],
    },
    {
        id: 'f2',
        userImage: janeSmith,
        username: 'Jane Smith',
        location: 'Los Angeles, USA',
        postedAt: 'January 1, 2025',
        content:
            'Family road trip ready in the Odyssey. Any tips for long drives?',
        postImage: hondaOdyssey,
        likes: 18,
        comments: [
            {
                id: 'c1',
                author: 'Alice Johnson',
                userImage: aliceJohnson,
                timeAgo: '1d ago',
                body: 'Pack snacks and plan fuel stops early!',
            },
        ],
    },
    {
        id: 'f3',
        userImage: aliceJohnson,
        username: 'Alice Johnson',
        location: 'Chicago, USA',
        postedAt: 'December 30, 2024',
        content:
            'Weekend haul with the F-150. No photo this time — text only.',
        likes: 9,
        comments: [
            {
                id: 'c1',
                author: 'Charlie Davis',
                userImage: charlieDavis,
                timeAgo: '3d ago',
                body: 'How’s the payload capacity?',
            },
        ],
    },
    {
        id: 'f4',
        userImage: bobBrown,
        username: 'Bob Brown',
        location: 'Houston, USA',
        postedAt: 'December 28, 2024',
        content: 'Nothing beats the open road on two wheels.',
        postImage: hdSportster,
        likes: 41,
        comments: [
            {
                id: 'c1',
                author: 'John Doe',
                userImage: johnDoe,
                timeAgo: '6h ago',
                body: 'Beautiful bike.',
            },
            {
                id: 'c2',
                author: 'Jane Smith',
                userImage: janeSmith,
                timeAgo: '1d ago',
                body: 'Where was this taken?',
            },
        ],
    },
    {
        id: 'f5',
        userImage: charlieDavis,
        username: 'Charlie Davis',
        location: 'Phoenix, USA',
        postedAt: 'December 20, 2024',
        content: 'Dream car acquired. R34 GTR photos incoming.',
        postImage: r34Gtr,
        likes: 156,
        comments: [
            {
                id: 'c1',
                author: 'Bob Brown',
                userImage: bobBrown,
                timeAgo: '12h ago',
                body: 'Congrats!',
            },
        ],
    },
]

export function getFeedPostById(
    postId: string
): ProfileUserPostDetail | undefined {
    return FEED_POSTS.find((p) => p.id === postId)
}
