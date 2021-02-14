import React from 'react'
import { View, Text,Image } from 'react-native'
import { Button } from 'native-base'
import Heading from '../Components/Heading'
import { StackNavigationProp } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface loginProps {
    navigation?: StackNavigationProp<any, any>
}
const Login = ({ navigation }: loginProps) => {
    return (

        <View style={{ flex: 1, }}>
            <LinearGradient style={{flex:0.75,justifyContent:'center',alignItems:'center',borderBottomLeftRadius:20,
            borderBottomStartRadius:20,borderBottomEndRadius:20,
            borderBottomRightRadius:20}} colors={['#3f8fcc', '#3474b1', '#1d467f']}>
                <Image source={require('../Images/logo.png')} style={{resizeMode:'contain',height:220}}/>
               <Heading title={"Welcome"} textStyle={{fontSize:30,color:'#fff',fontWeight:'bold'}}/>
               <Heading title={"eCommerce React App"} textStyle={{fontSize:20,color:'#fff'}}/>
               <Heading title={"This is sample app just for demonstration \n contact developer for more information"} 
               textStyle={{marginTop:20,fontSize:14,color:'#fff'}}/>
            </LinearGradient>

       <View style={{flex:0.25,alignItems:'center',justifyContent:'center'}}>
       <LinearGradient style={{flex:0.3,justifyContent:'center',width:'90%',
       alignItems:'center',borderRadius:8}}
       start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }} locations={[0, 0.8]} 
        colors={['#3f8fcc', '#3474b1', '#1d467f']}>
             <TouchableOpacity>
             <Heading title={"Login"} textStyle={{fontSize:16,color:'#fff'}}/>
             </TouchableOpacity>
            </LinearGradient>
       </View>
        </View>
    )
}

export default Login