import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Image, TextInput, Button, Text, View } from 'react-native';
import { Header, Thumbnail, Container, Content } from 'native-base'
import { AntDesign,MaterialIcons } from 'react-native-vector-icons'


export default class Chat extends Component {


  constructor(props) {
    super(props);


  }





  render() {
    return (
      <Container style={styles.container}>

        <Header style={{ borderBottomColor: '#ddd', borderBottomWidth: 0.2, height: 50, backgroundColor: '#fff', elevation: 5, shadowColor: '#000', shadowOpacity: 0.2 }}>

        </Header>
       
         
         
      <View>Chat</View>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'

  },


  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});