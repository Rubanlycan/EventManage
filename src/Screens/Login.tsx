import React from 'react'
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native'
import { Button } from 'native-base'
import Heading from '../Components/Heading'
import ThemeButton from '../Components/Button'

import ThemeInput from '../Components/Input'
import { StackNavigationProp } from '@react-navigation/stack';

import { Svg, Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler'

interface loginProps {
    navigation?: StackNavigationProp<any, any>
}


const Login = ({ navigation }: loginProps) => {

    const onLoginCall = () => {
        navigation?.navigate('Register')
    }
    return (

        <View style={styles.container}>
            <StatusBar barStyle={"default"} backgroundColor={'transparent'} />

            <Heading title={"Log in"} rightText={"Close"} />
            <View style={styles.midContainer}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
                <ThemeInput imgPath={require('../../assets/Auth/user.png')} placeHolderText={"Email Address*"} />
                <ThemeInput imgPath={require('../../assets/Auth/password.png')} placeHolderText={"Password*"} />

                <Text onPress={() => navigation?.navigate('ForgotPassword')} style={styles.forgottext}>Forgot password?</Text>


            </View>

            <View style={styles.button}>
                <ThemeButton

                    btnText={'Login'} />
            </View>

            <Text style={[styles.textStyle, { alignSelf: 'center', marginVertical: 10 }]}>---- or login with. ----</Text>


            <View style={[{ flex: 0.2, }, styles.socialMedia]}>
                <Image source={require('../../assets/Auth/facebook.png')} style={styles.socialMediaInner} />
                <Image source={require('../../assets/Auth/google.png')} style={styles.socialMediaInner} />
            </View>




            <View style={[{ flex: 0.05, }, styles.socialMedia]}>
                <Text style={{ fontSize: 16 }}>Don't have an account yet?</Text>
                <Text onPress={onLoginCall} style={[styles.textStyle, { color: '#1776d3', }]}> Register</Text>
            </View>

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
        flex: 0.1,
        alignItems: 'center'
    },
    midContainer: {
        flex: 0.58,
        alignItems: 'center',
        justifyContent: 'center'

    },
    socialMedia: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialMediaInner: {
        resizeMode: 'cover',
        height: 50,
        width: 50,
        margin: 5

    },
    forgottext:{
         alignSelf: 'flex-end',
     fontSize: 16, 
    margin: 10, 
    },
    textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})