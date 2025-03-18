import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface ButtonTextProps {
    text: string;
    onPress: () => void;
    width?: string;
    textSize?: string;
    buttonColor?: string;
    textColor?: string;
}

export default function ButtonText({text, onPress, width, textSize, buttonColor, textColor}: ButtonTextProps) {
    return (
        <TouchableOpacity
            className={`w-[70%] bg-[${buttonColor}] p-[15px] rounded-[20px] items-center justify-center`} // Static styles in className
            onPress={onPress}
        >
            <Text style={{ fontSize: textSize ? parseInt(textSize) : undefined, color: textColor }}> {/* Inline styles for dynamic textSize and textColor */}
                {text}
            </Text>
        </TouchableOpacity>
    )
}
