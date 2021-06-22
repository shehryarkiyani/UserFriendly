import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View ,StyleSheet,TouchableOpacity} from 'react-native';
import { ListItem,List } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

const Post=(props)=>{
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
const id=props.route.params.id;
  useEffect(() => {
    const api='https://jsonplaceholder.typicode.com/users/'+id.toString()+'/posts';
    fetch(api)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => 
        setLoading(false));
  }, []);
  const gotoTestStackScreen = (id) => {
    const newdata=data.filter((item)=>item.id==id);
	 props.navigation.navigate('PostDetail',{postdata:newdata,id:id});
	};
  return(
    <View>
    <LinearGradient style ={styles.linear} colors={['#3399ff', '#33ccff']} useAngle={true} angle={135} start={{ x: 0, y: 0.7 }} end={{x:0.7,y:1}}>
<Text style={styles.txt}>Post</Text>
</LinearGradient>
{isLoading ? <ActivityIndicator/>:
data.length===0?<Text>You donot have any post</Text>:<FlatList

data={data}
keyExtractor={item=>item.id}
renderItem={({item})=>{
 return(
<LinearGradient style ={styles.linear1} colors={['#3399ff', '#33ccff']} useAngle={true} angle={135} start={{ x: 0, y: 0.7 }} end={{x:0.7,y:1}}>
  <TouchableOpacity id={item.id} onPress={()=>gotoTestStackScreen(item.id)} >
  <Text style={styles.txt1} >Title: {item.title}</Text>
  </TouchableOpacity>
  
  </LinearGradient >)
}} />}

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
    
    marginLeft:-50,
    fontWeight:'bold',
    color:'white',
    fontSize:25
  },
  linear1:{
    borderRadius:10,
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
export default Post;