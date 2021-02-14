import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import AuthNavigation from './AuthNavigation'
import { screensEnabled } from 'react-native-screens'

const RootStack = createStackNavigator()


const AppContainer = ()=>{
    return(
        <NavigationContainer >
            <RootStack.Navigator screenOptions={{headerShown:false}}>
                <RootStack.Screen name={"authStack"} component={AuthNavigation}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default AppContainer