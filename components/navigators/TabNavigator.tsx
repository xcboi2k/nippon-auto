import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import FeedNavigator from './FeedNavigator'
import MessageNavigator from './MessageNavigator'
import ProfileNavigator from './ProfileNavigator'
import MarketplaceNavigator from './MarketplaceNavigator'

import { RootStackParamList } from '@/types/navigation'

const Tab = createBottomTabNavigator<RootStackParamList>()

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const iconColor = focused ? '#234791' : '#CCC'
                    const iconSize = 30

                    switch (route.name) {
                        case 'Home':
                            return (
                                <Entypo
                                    name="home"
                                    size={iconSize}
                                    color={iconColor}
                                />
                            )
                        case 'Marketplace':
                            return (
                                <Entypo
                                    name="shop"
                                    size={iconSize}
                                    color={iconColor}
                                />
                            )
                        case 'Messages':
                            return (
                                <Entypo
                                    name="chat"
                                    size={iconSize}
                                    color={iconColor}
                                />
                            )
                        case 'Profile':
                            return (
                                <FontAwesome
                                    name="user"
                                    size={iconSize}
                                    color={iconColor}
                                />
                            )
                        default:
                            return null
                    }
                },
                tabBarShowLabel: false,
                tabBarInactiveBackgroundColor: '#FFFFFF',
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    position: 'relative',
                    height: 65,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    paddingTop: 10,
                },
                tabBarItemStyle: {
                    paddingVertical: 0,
                },
                headerShown: false,
            })}
        >
            <Tab.Screen
                name="Home"
                component={FeedNavigator}
                initialParams={{ key: Math.random().toString() }}
            />
            <Tab.Screen
                name="Marketplace"
                component={MarketplaceNavigator}
                initialParams={{ key: Math.random().toString() }}
            />
            <Tab.Screen
                name="Messages"
                component={MessageNavigator}
                initialParams={{ key: Math.random().toString() }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileNavigator}
                initialParams={{ key: Math.random().toString() }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator
