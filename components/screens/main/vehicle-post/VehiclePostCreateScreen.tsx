import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigation'

import TextInput from '@/components/shared/FormTextInput'
import ButtonText from '@/components/shared/ButtonText'
import ImageUpload from '@/components/shared/ImageUpload'

const postSchema = Yup.object({
    content: Yup.string()
        .trim()
        .required('Please write something for your post'),
})

export default function VehiclePostCreateScreen() {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="flex-row items-center h-[70px] px-[30px] w-full mt-[50px]">
                <TouchableOpacity
                    className="flex-row items-center w-[50%]"
                    onPress={() => navigation.navigate('FeedMain')}
                >
                    <Ionicons name="caret-back" size={24} color="#153A56" />
                    <Text className="text-[20px] font-bold ml-[10px]">
                        Create Post
                    </Text>
                </TouchableOpacity>
            </View>

            <Formik
                initialValues={{ content: '', images: [] as string[] }}
                validationSchema={postSchema}
                onSubmit={() => {}}
            >
                {({
                    handleChange,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    setFieldValue,
                }) => (
                    <ScrollView>
                        <View className="w-full px-[30px] mt-[10px] mb-[15px]">
                            <TextInput
                                labelText="Post Content"
                                placeholderText="Tell me about something..."
                                variant="paragraph"
                                id="content"
                                name="content"
                                value={values.content}
                                onChangeInput={handleChange}
                                errorMessage={
                                    touched.content && errors.content
                                        ? errors.content
                                        : undefined
                                }
                            />
                            <ImageUpload
                                setFieldValue={setFieldValue}
                                values={values}
                            />

                            <View className="w-full items-center justify-center mb-[15px]">
                                <ButtonText
                                    text="Submit"
                                    buttonColor="#234791"
                                    textColor="#F4F6F8"
                                    textSize="16"
                                    onPress={() => handleSubmit()}
                                />
                            </View>
                        </View>
                    </ScrollView>
                )}
            </Formik>
        </View>
    )
}
