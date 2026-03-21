import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigation'
import type { CarListingSummary } from '@/types/listing'
import { formatPhpCurrency } from '@/utils/formatPhpCurrency'

import toyotaCamry from '@/assets/car-images/toyota-camry.jpg'
import hondaOdyssey from '@/assets/car-images/honda-odyssey.jpg'
import fordF150 from '@/assets/car-images/ford-f150.jpg'
import hdSportster from '@/assets/car-images/hd-sportster.jpg'
import r34Gtr from '@/assets/car-images/r34-gtr.jpg'

export default function SellerListingScreen() {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const carListings: CarListingSummary[] = [
        {
            id: 1,
            place: 'Los Angeles, CA',
            price: 1400000,
            model: 'Toyota Camry',
            image: toyotaCamry,
        },
        {
            id: 2,
            place: 'Miami, FL',
            price: 1820000,
            model: 'Honda Odyssey',
            image: hondaOdyssey,
        },
        {
            id: 3,
            place: 'New York, NY',
            price: 1060000,
            model: 'Ford F-150',
            image: fordF150,
        },
        {
            id: 4,
            place: 'Austin, TX',
            price: 1555000,
            model: 'Nissan Skyline R34 GTR',
            image: r34Gtr,
        },
        {
            id: 5,
            place: 'Seattle, WA',
            price: 1250000,
            model: 'Harley-Davidson Sportster',
            image: hdSportster,
        },
    ]

    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="flex-row items-center h-[70px] px-[30px] w-full mt-[50px] mb-[10px]">
                <TouchableOpacity
                    className="flex-row items-center w-[50%]"
                    onPress={() => navigation.navigate('SellerProfile')}
                >
                    <Ionicons name="caret-back" size={24} color="#153A56" />
                    <Text className="text-[20px] font-bold ml-[10px]">
                        Seller Listings
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View className="w-full px-[30px] flex flex-col items-center mb-[15px]">
                    {carListings.map((item) => (
                        <View
                            className="w-full rounded-lg bg-[#F4F6F8] p-4 mb-[25px] overflow-hidden"
                            key={item.id}
                        >
                            <View className="relative w-full h-[200px] rounded-lg mb-3 overflow-hidden">
                                <Image
                                    source={item.image}
                                    className="absolute inset-0 w-full h-full"
                                    resizeMode="cover"
                                    accessibilityLabel={item.model}
                                />
                                <View className="absolute bottom-0 left-0 right-0 bg-[#000000]/55 px-3 py-2">
                                    <Text className="text-[16px] font-semibold text-white">
                                        {item.model}
                                    </Text>
                                </View>
                            </View>
                            <View className="w-full flex flex-row items-start justify-between gap-3">
                                <View className="flex-1 min-w-0">
                                    <Text className="text-[20px] font-bold text-[#234791]">
                                        {formatPhpCurrency(item.price)}
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => {}}
                                    className="pt-0.5"
                                    hitSlop={{
                                        top: 8,
                                        bottom: 8,
                                        left: 8,
                                        right: 8,
                                    }}
                                >
                                    <MaterialIcons
                                        name="edit"
                                        size={24}
                                        color="#153A56"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}
