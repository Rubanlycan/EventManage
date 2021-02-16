import React,{useState} from 'react'
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native'
import { Button } from 'native-base'
import Heading from '../Components/Heading'
import ThemeButton from '../Components/Button'

import ThemeInput from '../Components/Input'
import { StackNavigationProp } from '@react-navigation/stack';



interface loginProps {
    navigation?: StackNavigationProp<any, any>
}


const Login = ({ navigation }: loginProps) => {
const [isFocus,setFocus] = useState(false)
const [isBlur,setBlur] = useState(false)

    const onLoginCall = () => {
        navigation?.navigate('Register')
    }
    return (

        <View style={styles.container}>
            <StatusBar barStyle={"default"} backgroundColor={'transparent'} />

            <Heading title={"Log in"}  />
            <View style={styles.midContainer}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
                <ThemeInput 
                 focus={()=>setFocus(true)}
                 blur={()=>setBlur(true)}
                 imgPath={require('../../assets/Auth/user.png')} 
                 placeHolderText={"Email Address*"} />

                <ThemeInput secured={true} 
                focus={()=>setFocus(true)}
                blur={()=>setBlur(true)}
                imgPath={require('../../assets/Auth/password.png')} 
                placeHolderText={"Password*"} />

                <Text  style={styles.forgottext}>Forgot password?</Text>


            </View>

            <View style={styles.button}>
                <ThemeButton
                    onBtnPress={()=>navigation?.navigate('BottomTab')}
                    btnText={'Login'} />
            </View>


            {/* <View style={[{ flex: 0.05, }, styles.socialMedia]}>
                <Text style={{ fontSize: 16 }}>Don't have an account yet?</Text>
                <Text onPress={onLoginCall} style={[styles.textStyle, { color: '#1776d3', }]}> Register</Text>
            </View> */}

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        resizeMode: 'contain',
        height: 160
    },
    button: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    midContainer: {
        flex: 0.52,
        alignItems: 'center',
        justifyContent: 'center'

    },

    forgottext:{
        color:'#48960f',
         alignSelf: 'flex-end',
     fontSize: 16, 
    margin: 10, 
    },
    textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})