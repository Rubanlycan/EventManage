import React from 'react'
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'
import { Button } from 'native-base'
import Heading from '../Components/Heading'
import ThemeButton from '../Components/Button'

import ThemeInput from '../Components/Input'
import { StackNavigationProp } from '@react-navigation/stack';

interface registerProps {
    navigation?: StackNavigationProp<any, any>
}
const Register = ({ navigation }: registerProps) => {

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"default"} backgroundColor={'transparent'} />

            <Heading title={"Register"} rightText={"Close"} onRightPress={() => navigation?.goBack()} />
            <View style={styles.midContainer}>
                <View style={{ backgroundColor: '#f4f4f4', borderRadius: 100, padding: 20 }}>
                    <Image source={require('../../assets/Auth/photoCamera.png')} style={styles.logo} />
                </View>

                <ThemeInput imgPath={require('../../assets/Auth/id_card.png')} placeHolderText={"Name*"} />
                <ThemeInput imgPath={require('../../assets/Auth/user.png')} placeHolderText={"Email Address*"} />
                <ThemeInput imgPath={require('../../assets/Auth/password.png')} placeHolderText={"Password*"} />
                <ThemeInput imgPath={require('../../assets/Auth/smartphone.png')} placeHolderText={"Phone Number*"} />

            </View>
            <View style={styles.checkboxmain }>
                <Button block style={styles.checkbox}>
                    <View style={styles.checkboxInner}>
                        <Image source={require('../../assets/Auth/blueTick.png')} style={{ resizeMode: 'contain', height: 20 }} />
                        <Text style={{ color: '#676767', fontSize: 18 }}>Female</Text>
                    </View>

                </Button>
                <Button block style={styles.checkbox}>
                    <View style={styles.checkboxInner}>
                        <Image source={require('../../assets/Auth/blueTick.png')} style={{ resizeMode: 'contain', height: 20 }} />
                        <Text style={{ color: '#676767', fontSize: 18 }}>Male</Text>
                    </View>
                </Button>
            </View>

            <View style={styles.button}>
                <ThemeButton

                    btnText={'Register'} />
            </View>



        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    logo: {
        resizeMode: 'contain',
        height: 40,
        width: 40,

    },
    checkboxmain: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10
    },

    checkbox: {
        width: '45%',
        borderRadius: 0,
        backgroundColor: 'transparent',
        borderColor: '#919191',
        borderWidth: 1
    },
    checkboxInner: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    button: {
        flex: 0.1,
        alignItems: 'center'
    },
    midContainer: {
        flex: 0.58,
        marginTop: 20,
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
    textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})