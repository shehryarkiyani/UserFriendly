import React, { useEffect, useState } from 'react';
import { Text, View ,StyleSheet,TouchableOpacity} from 'react-native';
import { ListItem } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

const UsersScreen =(props)=>{
return(
  <ListItem id={props.id}>
  <LinearGradient style ={styles.linear1} colors={['#3399ff', '#33ccff']} useAngle={true} angle={135} start={{ x: 0, y: 0.7 }} end={{x:0.7,y:1}}>
  <TouchableOpacity name={props.name} onPress={props.onPress} >
  <Text style={styles.txt1} >Name:  {props.name}</Text>
  </TouchableOpacity>
  <Text style={styles.txt1}>Email:   {props.email}</Text>
  </LinearGradient >
  </ListItem>
)}


const styles=StyleSheet.create({
  linear1:{
    borderRadius:20,
    height:50,
    width:300,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "black",
    elevation: 5,
    marginLeft:-10
  },
  txt1:{
    color:'white',
    alignSelf:'center',
    fontWeight:'bold'
  },
  
})
export default UsersScreen;