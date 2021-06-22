import React , { useState } from 'react';
import { StyleSheet, Text, View ,SafeAreaView ,ScrollView , Image , TouchableOpacity, DrawerLayoutAndroid } from 'react-native';

//Styles

import { StyleData , ScreenDisp } from '../Ui/StyleData'


const Notification = ({navigation,route}) => {

    const data = route.params;
    
    return(
        <SafeAreaView style = { style.midView }>
            <ScrollView style = { style.scrollPart} >
                <View style = { style.midView }>
                    <View style={style.back} >
                        <TouchableOpacity  onPress={() => navigation.goBack()} style={{height:'100%'}}>
                            <Image 
                                source ={require('../assets/back.png')}
                                resizeMode ='contain'
                                style = {{
                                    width:25,
                                    height : 25,
                                    top : 40,
                                    left : 20,
                                    tintColor : '#000000',
                                }}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={style.FeedView}>
                      <View style={ style.feedTop }>
                        <Text>Restaurant : { data.restaurant }</Text>
                        <Text>User : { data.user }</Text>
                        <Text>From : { data.Ordered_from }</Text>
                        <Text>To : { data.order_to }</Text>
                      </View>
                      <View style={style.feedmid}>
                        <Text style={{ color : '#000000',letterSpacing : 1 }}>Order </Text>
                      </View>
                      <View style={style.feedpayment} >
                        <Text>Payment Type : { data.payment_method } </Text>
                        <Text style={{ fontSize:20,paddingVertical : 5 }}>Amount : Rs { data.Amount } </Text>
                        <TouchableOpacity >
                            <Text style={ style.btnAcc }>
                                Accept
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={ style.btnDeny }>
                                Deny
                            </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    midView : {
        width : ScreenDisp.WidthFull,
    },
    back : {
        width : '100%',
        height:80,
        backgroundColor : StyleData.PriColor
    },
    FeedView : {
        width : '90%',
        marginHorizontal : '5%',
        marginVertical : 15,
        borderRadius : 10,
        backgroundColor : '#faf7f0',
        minHeight : 620,
        padding : 10,
    },
    feedTop : {
        width : ScreenDisp.WidthFull,
        padding : 10,
        marginVertical : 10,
        letterSpacing : 1,
        borderBottomWidth : 1,
        borderBottomColor : StyleData.TextHeading,
    },
    feedmid : {
        width : ScreenDisp.WidthFull,
        padding : 10,
        minHeight : 250,
        borderBottomWidth : 1,
        borderBottomColor : StyleData.TextHeading,
        backgroundColor : StyleData.SubText,
    },
    feedpayment : {
        width : ScreenDisp.WidthFull,
        padding : 10,
        paddingVertical : 15,
        marginVertical : 4,
    },
    btnAcc : {
        width : ScreenDisp.WidthFull,
        paddingVertical : 12,
        color : StyleData.White,
        backgroundColor : 'green',
        textAlign : 'center',
        letterSpacing : 1,
        marginVertical : 5,
        borderRadius : 5,
    },
    btnDeny : {
        width : ScreenDisp.WidthFull,
        paddingVertical : 12,
        color : StyleData.White,
        backgroundColor : 'red',
        textAlign : 'center',
        letterSpacing : 1,
        marginVertical : 5,
        borderRadius : 5,
    }
})

export default Notification