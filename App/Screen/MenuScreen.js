import { View, Text , StyleSheet, Image } from 'react-native'
import React from 'react'

const MenuScreen = () => {
  return (
    <View>
      <Text style={styles.title}>To Do List</Text>
      <View style={styles.container}>
        <Text style={styles.itemlist}>Wash Car</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.itemlist}>Buy Food</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.itemlist}>Meet Shafiq</Text>
      </View>
       <Image style={styles.button}source={require('../Asstes/button.png')}/>
    </View>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: 40,
        fontStyle:'normal',
        fontWeight:'400',
   
    },
    itemlist: {
         color: '#000',
        fontFamily: 'Roboto',
        fontSize: 40,
        fontStyle:'normal',
        fontWeight:'400',
    },
    container: {
        borderColor: '#BFEDC1',
        borderWidth: 4,
        borderRadius:20,
        width: 500,
        height:80,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:16,

    },
    button:{
        width:50,
        height:50,
    },
})