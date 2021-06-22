import React, { useEffect, useState,useLayoutEffect } from 'react';
import { ActivityIndicator,FlatList, Text, View ,StyleSheet,TouchableOpacity} from 'react-native';
import { List, ListItem, Thumbnail,Left, Body, Right } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';


const ShowData=(props)=>{
  const[data,setData]=useState([])
const newdata=props.data.filter((item)=>item.albumId==props.id);
return(
  <View>
  <FlatList
  data={newdata}
  keyExtractor={(item)=>item.url}
  renderItem={({item})=>{
    return(
          <List>
  <ListItem thumbnail>
  <Left>
  <TouchableOpacity onPress={()=>props.onPress(item.url)}>
                <Thumbnail square source={{ uri: item.thumbnailUrl }} />
                </TouchableOpacity>
              </Left>
              <Body>
                <Text style={{color:'gray',}} note numberOfLines={2}>{item.title}</Text>
              </Body>
              </ListItem>
          </List>  ) }} />
   </View>)}




const AlbumDetails=({navigation,route},props)=>{
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const id=route.params.id
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => 
        setLoading(false));
  }, []);
  const gotoTestStackScreen = (url) => {
	navigation.navigate('AlbumPic',{url:url});
	};
  const CustomizingHeader=()=>{
  return(
<LinearGradient style ={styles.linear} colors={['#3399ff', '#33ccff']} useAngle={true} angle={135} start={{ x: 0, y: 0.7 }} end={{x:0.7,y:1}}>
<TouchableOpacity onPress={()=>navigation.goBack()} style={styles.icon}><AntDesign name="arrowleft" size={24} color="white" /></TouchableOpacity>
<Text style={styles.txt}>Album Details</Text>
</LinearGradient>)}
  useLayoutEffect(()=>{
    navigation.setOptions({ 
     headerTitle:()=><CustomizingHeader/>, })})

return(
  <View>
  {isLoading?<ActivityIndicator/>:
  <ShowData onPress={gotoTestStackScreen} data={data} id={id}/> 
  }
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
})
export default AlbumDetails;