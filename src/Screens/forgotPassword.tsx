import React from 'react'
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'
import { Button } from 'native-base'

import ThemeButton from '../Components/Button'
import ThemeInput from '../Components/Input'


import { StackNavigationProp } from '@react-navigation/stack';

interface registerProps {
    navigation?: StackNavigationProp<any, any>
}
const ForgotPassword = ({ navigation }: registerProps) => {

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"default"} backgroundColor={'transparent'} />

      
         
            <View style={styles.miniContainer}>
                <Text style={styles.textStyle}>{`Please enter your registered email address and \n we will help you to reset password`}</Text>
                <ThemeInput imgPath={require('../../assets/Auth/user.png')} placeHolderText={"Email Address*"} />
                <ThemeButton btnMainStyle={{marginVertical:15}} btnText={'Submit'}/>
            </View>



        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7c8cb6',
        justifyContent:'flex-end'

    },
    miniContainer:{flex:0.35,
        padding:18,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:'center',
        justifyContent:'center'},


    textStyle: {
        fontSize:16,
            color:'#212121'
        }
    
})