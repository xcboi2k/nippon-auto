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
import SignUpScreen from "./components/screens/auth/SignUpScreen";
import SignUpAdditionalInformationScreen from "./components/screens/auth/SignUpAdditionalInformationScreen";
import LoginScreen from "./components/screens/auth/LoginScreen";
import MessagesScreen from "./components/screens/main/messages/MessagesScreen";
import ForgotPasswordScreen from "./components/screens/auth/ForgotPasswordScreen";
import ChatScreen from "./components/screens/main/messages/ChatScreen";
import ProfileMenuScreen from "./components/screens/main/profile/ProfileMenuScreen";

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
      {/* <SellerReviewsScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <SignUpAdditionalInformationScreen /> */}
      {/* <LoginScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <ChatScreen /> */}
      <ProfileMenuScreen />
    </>
  );
}
