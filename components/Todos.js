import React, { useEffect, useState } from 'react';
import { ActivityIndicator,FlatList,Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const Todos=(props)=>{
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
const id=props.route.params.id;
  useEffect(() => {
    const api='https://jsonplaceholder.typicode.com/users/'+id+'/todos';
    fetch(api)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => 
        setLoading(false));
  }, []);

  return(
   <View>
    <LinearGradient style ={styles.linear} colors={['#3399ff', '#33ccff']} useAngle={true} angle={135} start={{ x: 0, y: 0.7 }} end={{x:0.7,y:1}}>
<Text style={styles.txt}>Todos</Text>
</LinearGradient>
<FlatList
data={data}
keyExtractor={item=>item.id}
renderItem={({item})=>{
 return(
<LinearGradient style ={styles.linear1} colors={['#3399ff', '#33ccff']} useAngle={true} angle={135} start={{ x: 0, y: 0.7 }} end={{x:0.7,y:1}}>
 <Text style={styles.txt1} >UserId: {item.userId}</Text>
  <Text style={styles.title1} >Title: {item.title}</Text>
  <Text style={styles.txt1} >Completed: {item.completed.toString()}</Text>
  </LinearGradient >)}} 
  />
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
  title1:{
    color:'white',
    paddingLeft:20,
    fontWeight:'bold'
  },
  
})
export default Todos;