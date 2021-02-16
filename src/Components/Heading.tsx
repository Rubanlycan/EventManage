import React from 'react'
import { View, Text, StyleProp, TextStyle, ViewStyle, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface headerProps {
    title?: String | React.ReactNode;
    leftText?: String | React.ReactNode;
    rightText?: String | React.ReactNode;
    titleStyle?: StyleProp<TextStyle>
    rightTextStyle?: StyleProp<TextStyle>
    onRightPress?: () => void
}

const Heading = ({
    title,
    leftText,
    rightText,
    titleStyle,
    onRightPress,
    rightTextStyle,
    ...props
}: headerProps) => {
    return (
        <View style={styles.headerViewStyle}>
            <View style={styles.clickViewStyle}>
                <Text {...props} style={[styles.fixedRightTextStyle, rightTextStyle]}>{leftText}</Text>
            </View>
            <View style={{ flex: 0.8, alignItems: 'center' }}>
                <Text {...props} style={[styles.fixedheadStyle, titleStyle]}>{title}</Text>
            </View>

            <View style={styles.clickViewStyle}>
                <TouchableOpacity onPress={onRightPress} >
                    <Text {...props} style={[styles.fixedRightTextStyle, rightTextStyle]}>{rightText}</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}
export default Heading

const styles = StyleSheet.create({
    headerViewStyle: {
        flex: 0.12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1776d3'
    },
    clickViewStyle:{ flex: 0.2,
        justifyContent: 'flex-end',
     alignItems: 'center'  },

    fixedheadStyle: {
        fontSize: 20,
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    fixedRightTextStyle: {
        fontSize: 18,
        color: '#fee136'
    }
})