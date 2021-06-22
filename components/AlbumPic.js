import React, { useEffect, useState,useLayoutEffect } from 'react';
import {TouchableOpacity,Text,View ,StyleSheet,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const AlbumPic=({route,navigation})=>{

  const CustomizingHeader=()=>{
  return(
<LinearGradient style ={styles.linear} colors={['#3399ff', '#33ccff']} useAngle={true} angle={135} start={{ x: 0, y: 0.7 }} end={{x:0.7,y:1}}>
<TouchableOpacity onPress={()=>navigation.goBack()} style={styles.icon}><AntDesign name="arrowleft" size={24} color="white" /></TouchableOpacity>
<Text style={styles.txt}>Album Pic</Text>
</LinearGradient>
  )}

  useLayoutEffect(()=>{
    navigation.setOptions({ 
     headerTitle:()=><CustomizingHeader/>, 
     })})

return (
  <View style={styles.container}>
  <Image
        style={styles.tinyLogo}
        source={{
          uri: route.params.url,
        }}
      />
      </View>
)}

const styles=StyleSheet.create({
  linear:{
    justifyContent:'center',
    alignItems:'center',
    height:85,
    width:400,
    marginLeft:-30,
    marginTop:-25,
    flexDirection:'row'
  },
  txt:{
    paddingRight:90,
    fontWeight:'bold',
    color:'white',
    fontSize:25
  },
  icon:{
    paddingRight:90,
    paddingTop:5
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
  },
  container:{
    justifyContent:'center',
    alignItems:'center',
    margin:30
  }
})
export default AlbumPic;