import React from 'react';
import { StyleSheet, Image , Text, View , ScrollView , Alert ,TouchableHighlight } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//pages

import Menu from './Menu'
import Feed from './Feed'
import Deposit from './Deposit';
import Payout from './Payout'
import Profile from './Profile'

//Styles

import { StyleData , ScreenDisp } from '../Ui/StyleData'


const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {

    const navigationFunction = () => {
        navigation.navigate("Notification");
   }

  return (
      <>
      <Menu onFunction={ navigationFunction }  />
      <Tab.Navigator tabBarOptions={{
             showLabel : false,
             style : {
                 position : 'absolute',
                 bottom:0,
                 elevation : 1,
                 backgroundColor: StyleData.PriColor,
                 height:50,
                 ...style.shadow,
             }
         }}> 
        <Tab.Screen name="FEED" component={Feed} options={{
            tabBarIcon : ({focused}) => (
                <View style={style.navIcon }>
                  <Text>FEED</Text>
                    {/* <Image 
                     source ={require('./assets/icons/home.png')}
                     resizeMode ='contain'
                     style = {{
                         width:25,
                         height : 25,
                         tintColor : focused ? StyleData.White : StyleData.SecondaryColor,
                     }}
                    ></Image> */}
                </View>
            ),
        }} />
        <Tab.Screen name="Payout" component={Payout} options={{
            tabBarIcon : ({focused}) => (
                <View style={style.navIcon }>
                <Text>PAYOUT</Text>
                    {/* <Image 
                     source ={require('./assets/icons/search.png')}
                     resizeMode ='contain'
                     style = {{
                        width:25,
                        height : 25,
                         tintColor : focused ? StyleData.White : StyleData.SecondaryColor,
                     }}
                    ></Image> */}
                </View>
            ),
        }} />
        <Tab.Screen name="Deposit" component={Deposit} options={{
            tabBarIcon : ({focused}) => (
                <View style={style.navIcon }>
                <Text>DEPOSIT</Text>
                    {/* <Image 
                     source ={require('./assets/icons/like.png')}
                     resizeMode ='contain'
                     style = {{
                        width:25,
                        height : 25,
                         tintColor : focused ? StyleData.White : StyleData.SecondaryColor,
                     }}
                    ></Image> */}
                </View>
            ),
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
            tabBarIcon : ({focused}) => (
                <View style={style.navIcon }>
                <Text>MENU</Text>
                    {/* <Image 
                     source ={require('./assets/icons/user.png')}
                     resizeMode ='contain'
                     style = {{
                        width:25,
                        height : 25,
                         tintColor : focused ? StyleData.White : StyleData.SecondaryColor,
                     }}
                    ></Image> */}
                </View>
            ),
        }} />
      </Tab.Navigator>
      </>
  );
}


const style = StyleSheet.create({
  shadow : {
      shadowColor : StyleData.ShadowColor,
      shadowOffset : {
          width : 0,
          height : 10,
      },
      shadowOpacity : 0.25,
      shadowRadius : 3.5,
      elevation : 5,
  },
  navIcon : {
      alignItems : 'center',
      justifyContent : 'center',
  }
})

