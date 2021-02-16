import { transform } from '@babel/core';
import React, { FunctionComponent,useRef } from 'react'
import { View, TouchableOpacity, Text, Image, FlatList ,StyleSheet, Dimensions,Animated} from 'react-native'


const flatImg = [{
    "image": 'https://art.pixilart.com/05b69d5a1d184f9.gif',
    "title": "super show",
    "showOwner": "Ruban"
}, {
    "image": 'https://art.pixilart.com/thumb/526413cb2e0953d.png',
    "title": "super show",
    "showOwner": "Ruban"
}, {
    "image": 'https://art.pixilart.com/c4b46b7996c02b7.png',
    "title": "bat cave",
    "showOwner": "Bruce"
}, {
    "image": 'https://art.pixilart.com/thumb/526413cb2e0953d.png',
    "title": "beer party",
    "showOwner": "gawtam"
}, {
    "image": 'https://art.pixilart.com/thumb/526413cb2e0953d.png',
    "title": "super show",
    "showOwner": "Mario"
}, {
    "image": 'https://art.pixilart.com/ee731822e4188fd.png',

    "title": "awsum show",
    "showOwner": "Bell boy"
}, {
    "image": 'https://art.pixilart.com/thumb/59d6e7d8adeb761.png',
    "title": "Xmas show",
    "showOwner": "santa"
}
];

const {width, height} = Dimensions.get('screen');

const ListView:FunctionComponent = () => {

    const xScroll = useRef(new Animated.Value(0)).current;
  
    return (
        <Animated.FlatList
            data={flatImg}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: xScroll}}}],
                {useNativeDriver: true},
              )}
              renderItem={({item, index}) => {
                // const inputRange = [
                //   (index - 1) * width,
                //   index * width,
                //   (index + 1) * width,
                // ];
                // const outputRange = ['-90deg', '0deg', '90deg'];
      
                // const translateX = xScroll.interpolate({inputRange, '90deg'});
      
                return (
                    <View style={style.imageContainer}>
                      
                        <Animated.Image
                      style={[style.image]}
                      source={{uri: item.image}}
                    />
                      <Text style={{fontSize:20,color:'#000'}}>{`Name: ${item.showOwner}`}</Text>
                      <Text style={{color:'#000'}}>{`Show Name: ${item.title}`}</Text>
               
                  </View>
                );
              }}
            />
        
        
    )


};
const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    flatList: {flexGrow: 0},
    imageContainer: {
      width,
      height: 250,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      height: 200,
      width: 300,
      borderRadius: 20,
      resizeMode: 'cover',
    },
  })
  export default ListView;