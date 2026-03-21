import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigation'

import TextInput from '@/components/shared/FormTextInput'
import ButtonText from '@/components/shared/ButtonText'
import ImageUpload from '@/components/shared/ImageUpload'
import { getProfileUserPostById } from '@/data/profileUserPosts'

const postSchema = Yup.object({
    content: Yup.string()
        .trim()
        .required('Please write something for your post'),
})

export default function UserPostEditScreen() {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const route = useRoute<RouteProp<RootStackParamList, 'MyPostEdit'>>()
    const postId = route.params?.postId
    const existing = postId ? getProfileUserPostById(postId) : undefined

    return (
        <View className="relative flex-1 justify-start pb-[20px] w-full">
            <View className="flex-row items-center h-[70px] px-[30px] w-full mt-[50px]">
                <TouchableOpacity
                    className="flex-row items-center w-[50%]"
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="caret-back" size={24} color="#153A56" />
                    <Text className="text-[20px] font-bold ml-[10px]">
                        Edit Post
                    </Text>
                </TouchableOpacity>
            </View>

            <Formik
                initialValues={{
                    content: existing?.content ?? '',
                    images: [] as string[],
                }}
                validationSchema={postSchema}
                enableReinitialize
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
                                placeholderText="Update your post..."
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
                                    text="Update"
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
