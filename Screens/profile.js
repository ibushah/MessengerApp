import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Image, TextInput, Button, Text, View } from 'react-native';
import { Header, Thumbnail, Container, Content } from 'native-base'
import { AntDesign,MaterialIcons } from 'react-native-vector-icons'

user = { name: 'ibrahim', img: 'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/31180113_1679928772084144_4657822874948599808_n.jpg?_nc_cat=104&_nc_oc=AQkpafDdjPglxBbNf413Vukf2l7pn4sfPYPzZ49mkB2cS59GHJp7A1BoRNI4A-0o0js&_nc_ht=scontent.fkhi2-1.fna&oh=f6e1f359c756ad5c31b60d17def7a625&oe=5DE52469' }


export default class ChatList extends Component {


  constructor(props) {
    super(props);


  }





  render() {
    return (
      <Container style={styles.container}>

        <Header style={{ borderBottomColor: '#ddd', borderBottomWidth: 0.2, height: 50, backgroundColor: '#fff', elevation: 5, shadowColor: '#000', shadowOpacity: 0.2 }}>

        </Header>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Thumbnail style={{ borderRadius: 65, borderWidth: 3, borderColor: '#ddd', height: 130, width: 130 }} source={{ uri: user.img }} />
          <Text style={{ marginVertical: 15, textAlign: 'center', fontSize: 32, fontWeight: 'bold' }}>Ibrahim Shah</Text>
        </View>
        <View style={{justifyContent:'flex-start', flex: 1 }}>
          <View style={{ borderBottomColor:'#ddd',borderBottomWidth:0.2,flex: 1, alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ paddingLeft: 15, flex: 1 }}>
              <AntDesign name="user"  style={{color:'#0083FF'}} size={32} />

            </View>
            <View style={{ flex: 4 }}>
              <Text style={{ fontSize: 24, fontStyle: 'italic', fontWeight: '200' }}>IbuShah</Text>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ paddingLeft: 15, flex: 1 }}>
            <MaterialIcons name="slideshow" style={{color:'#28B351'}}  size={32}/>
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{ fontSize: 24, fontStyle: 'italic', fontWeight: '200' }}>Active</Text>
            </View>

          </View>
        </View>
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