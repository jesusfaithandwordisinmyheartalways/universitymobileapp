


import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'
import Header from '../Header/Header'
import HeaderTwo from '../HeaderTwo/HeaderTwo'
import Navbar from '../Navbar/Navbar'


const Menu = ({ navigation}) => {


  return (
   <>
        <View style={menu.menuContainer}>
            <Header />
            <HeaderTwo />
            <Navbar navigation={navigation} />

        </View>



        <View style={menu.menuWrapper}>
                <Text>Menu Page</Text>
            </View>



   </>
  )
}






const menu = StyleSheet.create({
    menuContainer: {
        width: '100%',
        overflow: 'hidden'
    },
    menuWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0
    }
})


export default Menu
