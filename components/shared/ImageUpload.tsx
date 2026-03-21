import React from 'react'
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import * as ImagePicker from 'expo-image-picker'
import type { FormikHelpers } from 'formik'

export type PostFormValues = {
    content: string
    images: string[]
}

type Props = {
    setFieldValue: FormikHelpers<PostFormValues>['setFieldValue']
    values: PostFormValues
}

export default function ImageUpload({ setFieldValue, values }: Props) {
    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
            return
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 0.85,
        })

        if (result.canceled || !result.assets?.length) {
            return
        }

        setFieldValue('images', [
            ...values.images,
            ...result.assets.map((a) => a.uri),
        ])
    }

    return (
        <View className="w-full mb-[15px]">
            <Text className="text-[#1A1717] font-bold text-[14px] mb-[10px]">
                Upload Images
            </Text>
            <View className="flex-row items-center">
                <TouchableOpacity
                    onPress={pickImage}
                    className="w-[80px] h-[80px] mr-2 rounded-lg bg-[#234791] items-center justify-center"
                >
                    <MaterialCommunityIcons
                        name="image-plus"
                        size={50}
                        color="white"
                    />
                </TouchableOpacity>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="flex-1"
                >
                    <View className="flex-row ml-2">
                        {values.images.map((uri, index) => (
                            <Image
                                key={`${uri}-${index}`}
                                source={{ uri }}
                                className="w-[80px] h-[80px] mr-2 rounded-lg"
                                resizeMode="cover"
                            />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
