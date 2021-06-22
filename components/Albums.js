import React, { useEffect, useState,useLayoutEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View ,StyleSheet,TouchableOpacity,Button} from 'react-native';
import { ListItem } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
const CustomizingHeader=()=>{
  return(
<LinearGradient style ={styles.linear} colors={['#3399ff', '#33ccff']} useAngle={true} angle={135} start={{ x: 0, y: 0.7 }} end={{x:0.7,y:1}}>
<Text style={styles.txt}>My Albums</Text>
</LinearGradient>
  )
}
const Albums=(props,{navigation,route})=>{

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
const id=props.route.params.id;

  useEffect(() => {
    const api='https://jsonplaceholder.typicode.com/users/'+id+'/albums';
    fetch(api)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => 
        setLoading(false));
  }, []);
  const gotoTestStackScreen = (id) => {
	 props.navigation.navigate('AlbumDetail',{id:id});
	};
  
  return(
    <View>
    <LinearGradient style ={styles.linear} colors={['#3399ff', '#33ccff']} useAngle={true} angle={135} start={{ x: 0, y: 0.7 }} end={{x:0.7,y:1}}>
<Text style={styles.txt}>My Albums</Text>
</LinearGradient>
{isLoading ? <ActivityIndicator/>:
data.length===0?<Text>You donot have any album</Text>:<FlatList

data={data}
keyExtractor={item=>item.id}
renderItem={({item})=>{
 return(
<LinearGradient style ={styles.linear1} colors={['#3399ff', '#33ccff']} useAngle={true} angle={135} start={{ x: 0, y: 0.7 }} end={{x:0.7,y:1}}>
  <TouchableOpacity id={item.id} onPress={()=>gotoTestStackScreen(item.id)}  >
  <Text style={styles.txt1} >Title: {item.title}</Text>
  </TouchableOpacity>
  
  </LinearGradient >)
}}
    
  />

}
</View>
  )
}
const styles=StyleSheet.create({
  linear:{
    justifyContent:'center',
    alignItems:'center',
    height:80,
    width:400,
    marginLeft:0,
    
    flexDirection:'row'
  },
  txt:{
    
    alignSelf:'center',
    fontWeight:'bold',
    color:'white',
    fontSize:25
  },
  linear1:{
    borderRadius:20,
    height:50,
    width:300,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "black",
    elevation: 5,
    marginLeft:25,
    marginTop:30
  },
  txt1:{
    color:'white',
    paddingLeft:10,
    fontWeight:'bold'
  },
})
export default Albums;