import { Container } from 'native-base'
import React from 'react'
import { StyleSheet, View, TextInput, StyleProp, ViewStyle, TextStyle, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface ThemeInputStyle {
    imgPath?: StyleProp<any>,
    inputStyle?: StyleProp<any>,
    secured?: boolean, 
    focus?:()=> void, 
    blur?: ()=>void, 
    placeHolderText?: StyleProp<any>
}

const ThemeInput = ({
    inputStyle,
    placeHolderText,
    imgPath,
    secured,
    focus,
    blur,
    ...props
}: ThemeInputStyle) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={imgPath} style={{ resizeMode: 'contain', height: 20, width: 20 }} />
            </View>
            <View style={{ flex: 0.85 }}>
                <TextInput {...props}
                     onFocus={focus}
                     onBlur={blur}
                     secureTextEntry={secured}
                    placeholderTextColor={"#9a9a9a"}
                    placeholder={placeHolderText} style={[styles.input,inputStyle,{borderBottomColor:(focus?'#99c503':'#9a9a9a'),
                    borderBottomWidth:focus?1:0.6}]} />
            </View>
        </View>

    )
}

export default ThemeInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'center' 
    },

    input: {
        height: 50,
        marginVertical: 6,
  
        width: '90%',
        fontSize: 18,


    }
})