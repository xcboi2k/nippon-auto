import "./global.css"

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CarPostCreateScreen from "./components/screens/main/car-post/CarPostCreateScreen";
import CarPostDetailsScreen from "./components/screens/main/car-post/CarPostDetailsScreen";
import CarPostEditScreen from "./components/screens/main/car-post/CarPostEditScreen";

export default function App() {
  return (
    <>
      {/* <CarPostCreateScreen /> */}
      {/* <CarPostDetailsScreen /> */}
      <CarPostEditScreen />
    </>
  );
}
