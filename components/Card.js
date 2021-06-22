import React, { useEffect, useState } from 'react';
import { Text, View ,StyleSheet,TouchableOpacity} from 'react-native';
import { Card, CardItem, Body} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import UserScreen from './UsersScreen';
const MyCard=(props)=>{
   const data=props.data
return(
  <Card style={styles.card}>
  <CardItem header bordered><Text style={styles.headertxt}>Basic Info</Text></CardItem>
            <CardItem bordered>
              <Body style={{marginTop:-10,marginLeft:10}}>
               <Text style={styles.txt1} >Name:  {data[0].name}</Text>
               <Text style={styles.txt1} >Username:  {data[0].username}</Text>
               <Text style={styles.txt1}>Email:   {data[0].email}</Text>
               <Text style={styles.txt1} >Phone:  {data[0].phone}</Text>
               <Text style={styles.txt1} >Website:  {data[0].website}</Text></Body>

            </CardItem>
              <CardItem header bordered>
              <Text style={styles.headertxt}>Address</Text></CardItem>
              <CardItem bordered>
              <Body style={{marginTop:-10,marginLeft:10}}>
               <Text style={styles.txt1} >Street:  {data[0].address["street"]}</Text>
               <Text style={styles.txt1} >Suite:  {data[0].address["suite"]}</Text>
               <Text style={styles.txt1}>City:   {data[0].address["city"]}</Text>
               <Text style={styles.txt1} >ZipCode:  {data[0].address["zipcode"]}</Text>
</Body>

            </CardItem>
              <CardItem header bordered>
              <Text style={styles.headertxt}>Company Details</Text></CardItem>
              <CardItem bordered>
              <Body style={{marginTop:-10,marginLeft:10}}>
               <Text style={styles.txt1} >CompanyName:  {data[0].company["name"]}</Text>
               <Text style={styles.txt1} >CatchPhrase:  {data[0].company["catchPhrase"]}</Text>
               <Text style={styles.txt1}>BS:   {data[0].company["bs"]}</Text>
              
   </Body>
            </CardItem>
          </Card>
          
)
}
const styles=StyleSheet.create({
  card:{
    borderRadius:20,
    width:320,
    marginLeft:15,
    marginTop:20,
    color:'green'
  },
  headertxt:{
    color:'#02bec4',
    alignSelf:'center',
    fontWeight:'bold',
    fontSize:20
  },
  txt1:{
    color:'#02bec4',
    fontWeight:'bold',
  }
  
})
export default MyCard;