import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View ,StyleSheet,TouchableOpacity,Button} from 'react-native';
import { MaterialCommunityIcons,MaterialIcons,FontAwesome} from '@expo/vector-icons';
import { ListItem } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import Post from './Post';
import Albums from './Albums';
import Todos from './Todos';
import { Container, Header, Content, Accordion } from "native-base";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyCard from './Card'
const CustomizingHeader=()=>{
  return(
<LinearGradient style ={styles.linear} colors={['#3399ff', '#33ccff']} useAngle={true} angle={135} start={{ x: 0, y: 0.7 }} end={{x:0.7,y:1}}>
<Text style={styles.txt}>User Detail</Text>
</LinearGradient>
  )
}

const Tab = createBottomTabNavigator();
const UserDetailScreen=(props,{route})=>{
  const[id,setid]=useState(props.route.params.id)
const d=props.route.params.alldata
const [data,setData]=useState(d.filter((item)=>item.id==id))

console.log(data)
  return(
    <View>
    <LinearGradient style ={styles.linear} colors={['#3399ff', '#33ccff']} useAngle={true} angle={135} start={{ x: 0, y: 0.7 }} end={{x:0.7,y:1}}>
<Text style={styles.txt}>User Detail</Text>
</LinearGradient>
<MyCard data={data}/>
</View>
  )
}

const BottomTab=({navigation,route})=>{
  const username=route.params.name
  const id=route.params.id
return(
  <Tab.Navigator   >
      <Tab.Screen initialParams={{alldata:route.params.DATA,id:id }} name="UserDetail"  component={UserDetailScreen}
      options={{
        tabBarIcon:({ color, size }) => {
          return <MaterialCommunityIcons name="account-details" size={24} color={color} />
        }
      }}
      / >  
 <Tab.Screen initialParams={{ id:id}} name="Albums" component={Albums} 
 options={{
        tabBarIcon:({ color, size }) => {
          return <MaterialCommunityIcons name="album" size={24} color={color} />
        }
      }}
 />
 <Tab.Screen initialParams={{ id:id }} name="Post" component={Post}
 options={{
        tabBarIcon:({ color, size }) => {
          return <MaterialIcons name="local-post-office" size={24} color={color} />
        }
      }}
  />
 <Tab.Screen initialParams={{ id:id }} name="Todos" component={Todos}
 options={{
        tabBarIcon:({ color, size }) => {
          return <FontAwesome name="user" size={24} color={color}/>
        }
      }}
  />
    </Tab.Navigator>
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
  }
})

export default BottomTab;