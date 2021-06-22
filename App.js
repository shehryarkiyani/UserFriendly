import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,StyleSheet } from 'react-native';
import UserScreen from './components/UsersScreen';
import { List } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './components/BottomTab'
import PostDetails from './components/PostDetails'
import AlbumDetails from './components/AlbumDetails'
import AlbumPic from './components/AlbumPic'
const Stack = createStackNavigator();
const CustomizingHeader=()=>{
  return(
<LinearGradient style ={styles.linear} colors={['#3399ff', '#33ccff']} useAngle={true} angle={135} start={{ x: 0, y: 0.7 }} end={{x:0.7,y:1}}>
<Text style={styles.txt}>User List</Text>
</LinearGradient>
  )
}

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => 
        setLoading(false));
  }, []);
  return (
  <NavigationContainer>
  {isLoading ? <ActivityIndicator/> :
      <Stack.Navigator>
        <Stack.Screen  name="User List" component={Users} initialParams={{ userdata:data }}
      options={{headerTitle:()=><CustomizingHeader/>}}
         />
         <Stack.Screen initialParams={{userdata:data}} name="Bottom Tab" component={BottomTab} options={{ headerShown: false}} />
          <Stack.Screen  name="PostDetail" component={PostDetails}  options={{headerLeft:""}} />
     <Stack.Screen  name="AlbumDetail" component={AlbumDetails}  options={{headerLeft:""}} />
     <Stack.Screen  name="AlbumPic" component={AlbumPic}  options={{headerLeft:""}} />
      </Stack.Navigator>}
    </NavigationContainer>  
  );
};

 const Users=({navigation,route})=>{
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(route.params.userdata);
  const [alldata,setallData]=useState(route.params.userdata)
return (
    <View style={{ flex: 1, padding: 24 }}>
        <FlatList
          data={data}
          keyExtractor={item=>item.name}
          renderItem={({ item }) => (
            <List>
            <UserScreen onPress={()=>navigation.navigate("Bottom Tab",{name:item.name,id:item.id,DATA:alldata})} name={item.name.toString()} email={item.email.toString()}/>
            </List>
          )}
        /> 
    </View>
  );
};


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
    
    alignSelf:'center',
    fontWeight:'bold',
    color:'white',
    fontSize:25
  }
})