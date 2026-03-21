import React, { useState } from 'react'
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Ionicons from '@expo/vector-icons/Ionicons'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigation'
import type { MarketplaceListing } from '@/types/listing'
import { formatPhpCurrency } from '@/utils/formatPhpCurrency'

// Import car images
import toyotaCamry from '@/assets/car-images/toyota-camry.jpg'
import hondaOdyssey from '@/assets/car-images/honda-odyssey.jpg'
import fordF150 from '@/assets/car-images/ford-f150.jpg'
import hdSportster from '@/assets/car-images/hd-sportster.jpg'
import r34Gtr from '@/assets/car-images/r34-gtr.jpg'

// Import user images
import johnDoe from '@/assets/user-images/john-doe.jpg'
import janeSmith from '@/assets/user-images/jane-smith.jpg'
import aliceJohnson from '@/assets/user-images/alice-johnson.jpg'
import bobBrown from '@/assets/user-images/bob-brown.jpg'
import charlieDavis from '@/assets/user-images/charlie-davis.jpg'

export default function MarketplaceScreen() {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const listings: MarketplaceListing[] = [
        {
            sellerName: 'John Doe',
            sellerLocation: 'New York, USA',
            car_model: 'Toyota Camry',
            classification_type: 'Car',
            carImageAddress: toyotaCamry,
            userImageAddress: johnDoe,
            price: 1050000,
        },
        {
            sellerName: 'Jane Smith',
            sellerLocation: 'Los Angeles, USA',
            car_model: 'Honda Odyssey',
            classification_type: 'Van',
            carImageAddress: hondaOdyssey,
            userImageAddress: janeSmith,
            price: 1400000,
        },
        {
            sellerName: 'Alice Johnson',
            sellerLocation: 'Chicago, USA',
            car_model: 'Ford F-150',
            classification_type: 'Truck/Bus',
            carImageAddress: fordF150,
            userImageAddress: aliceJohnson,
            price: 2350000,
        },
        {
            sellerName: 'Bob Brown',
            sellerLocation: 'Houston, USA',
            car_model: 'Harley-Davidson Sportster',
            classification_type: 'Motorcycle',
            carImageAddress: hdSportster,
            userImageAddress: bobBrown,
            price: 715000,
        },
        {
            sellerName: 'Charlie Davis',
            sellerLocation: 'Phoenix, USA',
            car_model: 'Nissan Skyline R34 GTR',
            classification_type: 'Car',
            carImageAddress: r34Gtr,
            userImageAddress: charlieDavis,
            price: 4985000,
        },
    ]

    const [searchText, setSearchText] = useState('')
    const filters = ['All', 'Car', 'Van', 'Truck/Bus', 'Motorcycle']
    const [activeFilter, setActiveFilter] = useState(filters[0])

    const filteredListings = listings.filter((listing) => {
        const filterMatch =
            activeFilter === 'All' ||
            listing.classification_type === activeFilter
        const searchTermMatch =
            searchText.length === 0 || listing.car_model.includes(searchText)

        return filterMatch && searchTermMatch
    })

    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="flex-row items-center h-[50px] px-[30px] w-full mt-[50px] justify-center mb-[10px]">
                <Image
                    source={require('@/assets/logos/logo.png')}
                    className="w-[50px] h-[50px]"
                    resizeMode="cover"
                />
            </View>
            <View className="w-full flex flex-row items-center px-[30px] mb-[10px]">
                <View className="flex-row items-center bg-gray-100 rounded-[20px] px-[10px] py-[5px]">
                    <FontAwesome name="search" size={24} color="#153A56" />
                    <TextInput
                        className="ml-[20px] flex-1 text-[#153A56] text-[15px]"
                        placeholder="Search"
                        onChangeText={(text) => setSearchText(text)}
                        value={searchText}
                    />
                </View>
            </View>
            <View className="w-full flex flex-row items-center px-[30px] mb-[15px]">
                {filters.map((filter) => (
                    <TouchableOpacity
                        key={filter}
                        className={`flex-1 items-center justify-center p-[10px] mr-[2px] ${
                            activeFilter === filter
                                ? 'bg-[#234791]'
                                : 'bg-[#F4F6F8]'
                        }`}
                        onPress={() => setActiveFilter(filter)}
                    >
                        {filter !== 'All' ? (
                            filter === 'Car' ? (
                                <FontAwesome5
                                    name="car-side"
                                    size={24}
                                    color={
                                        activeFilter === filter
                                            ? '#FFFFFF'
                                            : '#C2C7CB'
                                    }
                                />
                            ) : filter === 'Van' ? (
                                <FontAwesome5
                                    name="shuttle-van"
                                    size={24}
                                    color={
                                        activeFilter === filter
                                            ? '#FFFFFF'
                                            : '#C2C7CB'
                                    }
                                />
                            ) : filter === 'Truck/Bus' ? (
                                <FontAwesome5
                                    name="truck"
                                    size={24}
                                    color={
                                        activeFilter === filter
                                            ? '#FFFFFF'
                                            : '#C2C7CB'
                                    }
                                />
                            ) : filter === 'Motorcycle' ? (
                                <FontAwesome5
                                    name="motorcycle"
                                    size={26}
                                    color={
                                        activeFilter === filter
                                            ? '#FFFFFF'
                                            : '#C2C7CB'
                                    }
                                />
                            ) : null
                        ) : (
                            <Feather
                                name="menu"
                                size={28}
                                color={
                                    activeFilter === filter
                                        ? '#FFFFFF'
                                        : '#C2C7CB'
                                }
                            />
                        )}
                    </TouchableOpacity>
                ))}
            </View>
            <ScrollView>
                <View className="w-full px-[30px] mb-[15px] justify-center">
                    {filteredListings.length ? (
                        filteredListings.map((item, index) => (
                            <View
                                key={index}
                                className="w-full max-w-md bg-[#F4F6F8] rounded-lg p-4 shadow mb-[15px]"
                            >
                                <View className="flex flex-row items-center mb-3">
                                    <Image
                                        source={item.userImageAddress}
                                        accessibilityLabel={item.sellerName}
                                        className="w-10 h-10 rounded-full mr-3"
                                        resizeMode="cover"
                                    />
                                    <View>
                                        <Text className="font-bold text-[#153A56]">
                                            {item.sellerName}
                                        </Text>
                                        <Text className="text-sm text-black">
                                            {item.sellerLocation}
                                        </Text>
                                    </View>
                                </View>

                                <Image
                                    source={item.carImageAddress}
                                    accessibilityLabel={item.car_model}
                                    className="w-full h-60 rounded mb-3"
                                    resizeMode="cover"
                                />

                                <Text className="font-bold text-[#234791] mb-2">
                                    {formatPhpCurrency(item.price)}
                                </Text>

                                <View className="flex items-center justify-center">
                                    <TouchableOpacity
                                        className="w-full bg-[#234791] py-3 rounded-lg items-center justify-center"
                                        onPress={() =>
                                            navigation.navigate(
                                                'VehicleListingDetails'
                                            )
                                        }
                                        activeOpacity={0.8}
                                    >
                                        <Text className="text-lg text-[#F4F6F8]">
                                            Check Details
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    ) : (
                        <Text className="text-[16px] font-bold text-[#153A56]">
                            There are no listings available right now.
                        </Text>
                    )}
                </View>
            </ScrollView>
            <TouchableOpacity
                className="absolute bottom-4 right-6 w-14 h-14 rounded-full bg-[#234791] justify-center items-center shadow-lg"
                onPress={() => navigation.navigate('VehicleListingCreate')}
            >
                <Ionicons name="add" size={28} color="white" />
            </TouchableOpacity>
        </View>
    )
}
