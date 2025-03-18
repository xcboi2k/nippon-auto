import React from 'react'
import { Text, TextInput, View } from 'react-native'

interface CommentInputProps {
  customLabel: string;
  inputProps: React.ComponentProps<typeof TextInput>;
  width?: string;
  textSize?: string;
}

export default function CommentInput({ customLabel, inputProps }: CommentInputProps) {
    return (
        <View className="w-full mb-[15px]">
            <Text style={{ color: '#232323' }} className="text-[14px] font-bold mb-[5px]">
                {customLabel}
            </Text>
            <TextInput
                className="w-full h-[80px] px-4 border border-gray-300 rounded-lg"
                {...inputProps}
                multiline={true}
                style={{ textAlignVertical: 'top' }}
            />
        </View>
    )
}
