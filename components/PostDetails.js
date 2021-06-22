import React, { useEffect, useState,useLayoutEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View ,StyleSheet,TouchableOpacity} from 'react-native';
import { ListItem,List } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

import { AntDesign } from '@expo/vector-icons';
const PostDetails=({navigation,route})=>{
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const pdata=route.params.postdata
  const id=route.params.id
  useEffect(() => {
    const api='https://jsonplaceholder.typicode.com/posts/'+id+'/comments';
    fetch(api)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => 
        setLoading(false));
  }, []);
  const CustomizingHeader=()=>{
  return(
<LinearGradient style ={styles.linear} colors={['#3399ff', '#33ccff']} useAngle={true} angle={135} start={{ x: 0, y: 0.7 }} end={{x:0.7,y:1}}>
<TouchableOpacity onPress={()=>navigation.goBack()} style={styles.icon}><AntDesign name="arrowleft" size={24} color="white" /></TouchableOpacity>

<Text style={styles.txt}>Post Details</Text>
</LinearGradient>
  )
}
  useLayoutEffect(()=>{
    navigation.setOptions({ 
     headerTitle:()=><CustomizingHeader/>,
     
     })
  })
return(
  <View>
  <LinearGradient style ={styles.linear1} colors={['#3399ff', '#33ccff']} useAngle={true} angle={135} start={{ x: 0, y: 0.7 }} end={{x:0.7,y:1}}>
<View >
<Text style={styles.title1}>Title: </Text>
<Text style={styles.txt1}>{pdata[0].title}</Text>
</View>
<View>
<Text style={styles.title1} >Body: </Text>
<Text style={styles.txt1} > {pdata[0].body.toString()}</Text>
</View>
  </LinearGradient >
<Text style={styles.h1}>Post Comments</Text>
  {isLoading ? <ActivityIndicator/>:(

<FlatList
data={data}
keyExtractor={item=>item.id}
renderItem={({item})=>{
 return(
<LinearGradient style ={styles.linear1} colors={['#3399ff', '#33ccff']} useAngle={true} angle={135} start={{ x: 0, y: 0.7 }} end={{x:0.7,y:1}}>
  <View style={{flexDirection:'row'}}>
  <Text style={styles.title2} >PostId: </Text>
  <Text style={styles.txt2} >{item.postId}</Text>
  </View>
  <View style={{flexDirection:'row'}}>
  <Text style={styles.title2} >Name: </Text>
  <Text style={styles.txt2} >{item.name}</Text>
  </View>
  <View style={{flexDirection:'row'}}>
  <Text style={styles.title2} >Email: </Text>
  <Text style={styles.txt2} > {item.email}</Text></View>
  <View style={{flexDirection:'row'}}>
  <Text style={styles.title2} >Body:</Text>
  <Text style={styles.txt2} >{item.body}</Text></View>
  </LinearGradient >)
}}  
  />

  )}
  
  </View>
)
}
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
    paddingRight:110
  },
  linear1:{
    borderRadius:10,
    
    justifyContent:'center',
    shadowColor: "black",
    elevation: 8,
    marginLeft:5,
    marginRight:5,
    marginTop:30
  },
  txt1:{
    color:'white',
    paddingLeft:20,
    fontWeight:'bold'
  },
  title1:{
    color:'white',
    fontWeight:'bold',
    fontSize:25,
    paddingLeft:5
  },
  h1:{
    fontWeight:'bold',
    fontSize:25,
    alignSelf:'center',
    color:'#48c5e8',
    marginTop:10
  },
  title2:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
    paddingLeft:5
  },
  txt2:{
    color:'white',
    paddingLeft:15,
    fontWeight:'bold',
    alignItems:'center',
    paddingTop:5
  },
  
  
})
export default PostDetails;