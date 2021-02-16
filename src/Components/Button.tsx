import { Container } from 'native-base'
import React from 'react'
import {StyleSheet,View, Text,TouchableOpacity,StyleProp,ViewStyle,TextStyle} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface ThemeButtonStyle{
    btnText?:String | React.ReactNode
    btnStyle?:StyleProp<ViewStyle>
    btnMainStyle?:StyleProp<any>
    onBtnPress?:()=>void,
    ContainerStyle?:StyleProp<ViewStyle>
    btnTextStyle?:StyleProp<TextStyle>

}

const ThemeButton = ({
    btnText,
    btnStyle,
    onBtnPress,
    btnMainStyle,
    btnTextStyle,
    ContainerStyle,
    ...props
}:ThemeButtonStyle) =>{
    return (
  
        <LinearGradient {...props} style={[styles.buttonColorFixed,btnMainStyle]}
        start={{ x: 0, y: 0 }}
           end={{ x: 1, y: 1 }} locations={[0, 0.8]} 
         colors={['#1776d3','#1776d3']}>
              <TouchableOpacity onPress={onBtnPress}>
              <Text {...props} style={[styles.btnText, btnTextStyle]} >{btnText}</Text>
              </TouchableOpacity>
             </LinearGradient>
     
    )
}

export default ThemeButton

const styles = StyleSheet.create({
    container:{
        flex: 0.25,
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    buttonColorFixed:{
        height:50, 
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4
    },
    btnText:{
        color: '#fff',
        fontSize: 16,
             
        fontWeight: 'bold' ,
    }
})