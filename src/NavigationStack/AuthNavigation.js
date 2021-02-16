
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import ForgotPassword from '../Screens/forgotPassword'

const AuthStack = createStackNavigator()

const AuthNavigation = () => {
    return (

        <AuthStack.Navigator screenOptions={{headerShown:false}}>
            <AuthStack.Screen name={"Login"} component={Login} />
            <AuthStack.Screen name={"Register"} component={Register} />
            <AuthStack.Screen name={"ForgotPassword"} component={ForgotPassword} />
        </AuthStack.Navigator>

    )
}

export default AuthNavigation