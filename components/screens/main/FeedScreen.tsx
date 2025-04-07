import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import ButtonText from '@/components/shared/ButtonText';

export default function FeedScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const listings = [
        {
            sellerName: 'John Doe',
            sellerLocation: 'New York, USA',
            car_model: 'Toyota Camry',
            classification_type: 'Car',
        },
        {
            sellerName: 'Jane Smith',
            sellerLocation: 'Los Angeles, USA',
            car_model: 'Honda Odyssey',
            classification_type: 'Van',
        },
        {
            sellerName: 'Alice Johnson',
            sellerLocation: 'Chicago, USA',
            car_model: 'Ford F-150',
            classification_type: 'Truck/Bus',
        },
        {
            sellerName: 'Bob Brown',
            sellerLocation: 'Houston, USA',
            car_model: 'Harley-Davidson Sportster',
            classification_type: 'Motorcycle',
        },
        {
            sellerName: 'Charlie Davis',
            sellerLocation: 'Phoenix, USA',
            car_model: 'Nissan Skyline R34 GTR',
            classification_type: 'Car',
        },
    ];

    const [searchText, setSearchText] = useState('');
    const filters = ['All','Car', 'Van', 'Truck/Bus', 'Motorcycle'];
    const [activeFilter, setActiveFilter] = useState(filters[0]);

    const filteredListings = listings.filter((listing) => {
        const filterMatch = activeFilter === 'All' || listing.classification_type === activeFilter;
        const searchTermMatch = searchText.length === 0 || listing.car_model.includes(searchText);
    
        return filterMatch && searchTermMatch;
    });

    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="flex-row items-center h-[50px] px-[30px] w-full mt-[30px] justify-center mb-[10px]">
                <Image 
                    source={require('@/assets/logos/logo.png')}
                    className="w-[50px] h-[50px]"
                    resizeMode="cover"
                />
            </View>
            <View className='w-full flex flex-row items-center px-[30px] mb-[10px]'>
                <View className="flex-row items-center bg-white rounded-[30px] p-[5px]">
                    <FontAwesome name="search" size={24} color='#153A56' />
                    <TextInput
                        className="ml-[20px] flex-1 text-[#153A56] text-[15px]"
                        placeholder='Search'
                        onChangeText={(text) => setSearchText(text)}
                        value={searchText}
                    />
                </View>
            </View>
            <View className='w-full flex flex-row items-center px-[30px] mb-[15px]'>
                {filters.map((filter) => (
                    <TouchableOpacity key={filter} className={`flex-1 items-center justify-center p-[10px] mr-[2px] ${activeFilter === filter ? 'bg-[#234791]' : 'bg-[#F4F6F8]'}`}
                        onPress={() => setActiveFilter(filter)}
                    >
                        {
                            filter !== 'All' ? (
                                filter === 'Car' ? (
                                    <FontAwesome5 name="car-side" size={24} color={activeFilter === filter ? '#FFFFFF' : '#C2C7CB'} />
                                ) : filter === 'Van' ? (
                                    <FontAwesome5 name="shuttle-van" size={24} color={activeFilter === filter ? '#FFFFFF' : '#C2C7CB'} />
                                ) : filter === 'Truck/Bus' ? (
                                    <FontAwesome5 name="truck" size={24} color={activeFilter === filter ? '#FFFFFF' : '#C2C7CB'} />
                                ) : filter === 'Motorcycle' ? (
                                    <FontAwesome5 name="motorcycle" size={26} color={activeFilter === filter ? '#FFFFFF' : '#C2C7CB'} />
                                ) : null
                            ) : (
                                <Feather name="menu" size={28} color={activeFilter === filter ? '#FFFFFF' : '#C2C7CB'} />
                            )
                        }
                    </TouchableOpacity>
                ))}
            </View>
            <ScrollView>
                <View className='w-full px-[30px] mb-[15px] justify-center'>
                    {
                        listings ? (
                            filteredListings.map((item, index) => (
                                <TouchableOpacity key={index} className='w-full rounded-[8px] bg-[#F4F6F8] mb-[15px] p-[16px]'
                                    onPress={() => navigation.navigate('SellerProfile')}
                                >
                                    <View className='w-full flex flex-row items-center mb-[10px]'>
                                        <Image 
                                            source={require('@/assets/images/profile-pic-placeholder.png')}
                                            className="w-[40px] h-[40px] rounded-[20px] mr-[8px]"
                                            resizeMode="cover"
                                        />
                                        <View className='flex-col align-start'>
                                            <Text className='text-[16px] font-bold text-[#153A56]'>
                                                {item.sellerName}
                                            </Text>
                                            <Text className='text-[14px] text-[#C2C7CB]'>
                                                {item.sellerLocation}
                                            </Text>
                                        </View>
                                    </View>
                                    <Image 
                                        source={require('@/assets/images/item-pic-placeholder.png')}
                                        className="w-[100%] h-[300px] rounded-[8px] mb-[10px]"
                                        resizeMode="cover"
                                    />
                                    <View className='w-full items-center justify-center mb-[10px]'>
                                        <ButtonText text='Check Details' buttonColor='#234791' textColor='#F4F6F8' textSize='16' 
                                            onPress={() => navigation.navigate('CarPostDetails')}/>
                                    </View>
                                </TouchableOpacity>
                            ))
                        ) : (
                            <Text className='text-[16px] font-bold text-[#153A56]'>
                                There are no listings available right now.
                            </Text>
                        )
                    }
                </View>
            </ScrollView>
            <TouchableOpacity
                className="absolute bottom-4 right-6 w-14 h-14 rounded-full bg-[#234791] justify-center items-center shadow-lg"
                onPress={() => navigation.navigate('CarPostCreate')}
            >
                <Ionicons name="add" size={28} color="white" />
            </TouchableOpacity>
        </View>
    )
}
