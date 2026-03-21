export type RootStackParamList = {
    //auth
    Login: undefined
    SignUp: undefined
    SignUpAdditional: undefined
    ForgotPassword: undefined

    FeedMain: undefined
    VehiclePostCreate: undefined
    VehiclePostDetails: undefined

    MarketplaceMain: undefined
    VehicleListingCreate: undefined
    VehicleListingDetails: undefined
    SellerProfile: undefined
    SellerListing: undefined
    SellerReviews: undefined
    ReviewCreate: undefined
    ReviewEdit: undefined

    MessageMain: undefined
    Chat: undefined

    ProfileMain: undefined
    ProfileView: undefined
    ProfileEdit: undefined
    MyPosts: undefined
    MyPostDetails: { postId: string }
    MyPostEdit: { postId?: string }
    MyListings: undefined
    MyListingDetails: undefined
    MyListingEdit: undefined
    MyReviews: undefined
    MyReviewEdit: undefined

    Home: undefined
    Messages: undefined
    Profile: undefined
}
