import React from 'react'
import { View, Text, StyleProp, TextStyle, ViewStyle } from 'react-native'

interface headerProps {
    title?: String | React.ReactNode;
    textStyle?: StyleProp<TextStyle>
}

const Heading = ({
    title,
    textStyle,
    ...props
}: headerProps) => {
    return (
       
      <Text {...props} style={textStyle}>{title}</Text>
    )
}
export default Heading