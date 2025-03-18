import "./global.css"

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CarPostCreateScreen from "./components/screens/main/car-post/CarPostCreateScreen";

export default function App() {
  return (
    <>
      <CarPostCreateScreen />
    </>
  );
}
