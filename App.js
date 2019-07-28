import React, { Component } from 'react';
import { StyleSheet, FlatList, TextInput, Button, View } from 'react-native';

import { Ionicons, Feather } from 'react-native-vector-icons';

import Navigation from './Config/Navigation'

import { Left, Card, CardItem, Container, Content, Text, Thumbnail, Badge } from 'native-base'
import ChatList from './Screens/chatlist';



class App extends Component {


  constructor(props) {
    super(props);

  }


  render() {
    return (
   
      //   <CardItem>
     <Navigation />
     
    );
  }

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;