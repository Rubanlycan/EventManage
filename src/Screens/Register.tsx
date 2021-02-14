import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'native-base'
import Heading from '../Components/Heading'
import { StackNavigationProp } from '@react-navigation/stack';

interface registerProps {
    navigation?: StackNavigationProp<any, any>
}
const Register = ({ navigation }: registerProps) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Heading
                textStyle={{ fontSize: 30, color: 'purple' }}
                title={"Register"}
            />
            <Button onPress={() => navigation?.navigate('Login')} style={{ marginTop: 10, width: '90%', alignSelf: 'center' }} block>
                <Text style={{ color: '#fff' }}>To Login</Text>
            </Button>
        </View>
    )
}

export default Register