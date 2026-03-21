import React from 'react'
import { Text, TextInput as RNTextInput, View } from 'react-native'
import type { FormikHandlers } from 'formik'

type Variant = 'default' | 'paragraph'

type Props = {
    labelText: string
    placeholderText: string
    variant?: Variant
    id?: string
    name: string
    value: string
    onChangeInput: FormikHandlers['handleChange']
    errorMessage?: string
}

export default function FormTextInput({
    labelText,
    placeholderText,
    variant = 'default',
    id,
    name,
    value,
    onChangeInput,
    errorMessage,
}: Props) {
    const paragraph = variant === 'paragraph'

    return (
        <View className="w-full mb-[15px]">
            <Text className="text-[#1A1717] font-bold text-[14px] mb-[5px]">
                {labelText}
            </Text>
            <RNTextInput
                nativeID={id}
                accessibilityLabel={labelText}
                placeholder={placeholderText}
                value={value}
                onChangeText={onChangeInput(name)}
                multiline={paragraph}
                placeholderTextColor="#C2C7CB"
                className={
                    paragraph
                        ? 'w-full min-h-[120px] px-4 py-3 border border-gray-300 rounded-lg text-[#153A56]'
                        : 'w-full px-4 py-3 border border-gray-300 rounded-lg text-[#153A56]'
                }
                style={paragraph ? { textAlignVertical: 'top' } : undefined}
            />
            {errorMessage ? (
                <Text className="text-red-500 text-[12px] mt-1">
                    {errorMessage}
                </Text>
            ) : null}
        </View>
    )
}
