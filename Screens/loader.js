import React, { Component } from 'react';
import { StyleSheet,StatusBar,SafeAreaView ,Image, TextInput, Button, Text, View } from 'react-native';





export default class Loader extends Component {

  
  constructor(props) {
    super(props);
   

  }


  componentDidMount()
  {
    StatusBar.setHidden(true);
    setTimeout(()=>
    {
      this.props.navigation.navigate("Main")
    },1000)
  }


  render() {
    return (
      <View  style={styles.container}>
        
         <View style={styles.header}>
           <Text style={{color:'white',fontSize:26,fontWeight:'bold',textAlign:'center'}}>C H A T T E R</Text>
           </View> 
           <View style={styles.bottom}>
          <Image style={{height:250,width:'100%'}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-myXkSPS1Rm0Bruq7ect9CQGCulbxpaRDLM6dcvh4eONgpNGJ'}}  />
           </View>
      </View >
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0083FF'
   
  },
  header:{
    height:100,
    marginTop:100
    
 
  },
  bottom:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});