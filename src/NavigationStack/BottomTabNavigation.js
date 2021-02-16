import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/Home'
import Account from '../Screens/Account'
import Schedule from '../Screens/Schedule'
import Show from '../Screens/Show'
import Heading from '../Components/Heading';

const BottomTabStack = createBottomTabNavigator()

const BottomTab = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Heading title={"Shows"} />
            <BottomTabStack.Navigator
                tabBarOptions={{
                    activeTintColor: '#49950c',

                }}
                screenOptions={({ route }) => ({

                    tabBarIcon: ({ focus, color, size }) => {
                        let iconName = "home";
                        if (route.name === 'Home') {
                        }
                        else if (route.name === 'Show') {
                            iconName = 'book-open-page-variant';
                        } else if (route.name === 'Schedule') {
                            iconName = 'clock-time-four-outline';
                        }
                        else if (route.name === 'Account') {
                            iconName = 'account';
                        }
                        return <Icon name={iconName} size={30} color={color} />;
                    }
                })

                }>
                <BottomTabStack.Screen name="Home" component={Home} />
                <BottomTabStack.Screen name="Show" component={Show} />
                <BottomTabStack.Screen name="Schedulin" component={Schedule} />
                <BottomTabStack.Screen name="Account" component={Account} />
            </BottomTabStack.Navigator>
        </View>

    )
}

export default BottomTab