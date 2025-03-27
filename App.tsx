import "./global.css"

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CarPostCreateScreen from "./components/screens/main/car-post/CarPostCreateScreen";
import CarPostDetailsScreen from "./components/screens/main/car-post/CarPostDetailsScreen";
import CarPostEditScreen from "./components/screens/main/car-post/CarPostEditScreen";
import FeedScreen from "./components/screens/main/FeedScreen";
import ProfileViewScreen from "./components/screens/main/profile/ProfileViewScreen";
import ProfileEditScreen from "./components/screens/main/profile/ProfileEditScreen";
import UserListingScreen from "./components/screens/main/profile/UserListingScreen";
import ReviewsScreen from "./components/screens/main/profile/ReviewsScreen";
import ReviewCreateScreen from "./components/screens/main/reviews/ReviewCreateScreen";
import ReviewEditScreen from "./components/screens/main/reviews/ReviewEditScreen";
import SellerProfileViewScreen from "./components/screens/main/seller/SellerProfileViewScreen";
import SellerListingScreen from "./components/screens/main/seller/SellerListingScreen";
import SellerReviewsScreen from "./components/screens/main/seller/SellerReviewsScreen";

export default function App() {
  return (
    <>
      {/* <CarPostCreateScreen /> */}
      {/* <CarPostDetailsScreen /> */}
      {/* <CarPostEditScreen /> */}
      {/* <FeedScreen /> */}
      {/* <ProfileViewScreen /> */}
      {/* <ProfileEditScreen /> */}
      {/* <UserListingScreen /> */}
      {/* <ReviewsScreen /> */}
      {/* <ReviewCreateScreen /> */}
      {/* <ReviewEditScreen /> */}
      {/* <SellerProfileViewScreen /> */}
      {/* <SellerListingScreen /> */}
      <SellerReviewsScreen />
    </>
  );
}
