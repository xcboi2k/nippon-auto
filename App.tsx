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

export default function App() {
  return (
    <>
      {/* <CarPostCreateScreen /> */}
      {/* <CarPostDetailsScreen /> */}
      {/* <CarPostEditScreen /> */}
      {/* <FeedScreen /> */}
      {/* <ProfileViewScreen /> */}
      {/* <ProfileEditScreen /> */}
      <UserListingScreen />
    </>
  );
}
