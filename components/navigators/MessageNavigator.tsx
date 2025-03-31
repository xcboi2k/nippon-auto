import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessagesScreen from '../screens/main/messages/MessagesScreen';
import ChatScreen from '../screens/main/messages/ChatScreen';

const Stack = createNativeStackNavigator();

const MessageNavigator = () => {
    return (
        <Stack.Navigator
                screenOptions={{
                    headerShown: false, animation: 'none'
                }}
                initialRouteName='MessageMain'
            >

                <Stack.Screen name="MessageMain" component={MessagesScreen}/>
                <Stack.Screen name="Chat" component={ChatScreen}/>
            </Stack.Navigator>
    )
}

export default MessageNavigator