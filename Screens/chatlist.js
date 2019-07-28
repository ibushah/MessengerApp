import React, { Component } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, FlatList, Image, TextInput, Button, Text, View } from 'react-native';
import ChatView from '../Components/chatView';
import { Header, Thumbnail, Container, Content } from 'native-base'
import { Entypo } from 'react-native-vector-icons'



data = [

  { name: 'Asad', img: 'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/21731306_955571781263333_1006788999518591898_n.jpg?_nc_cat=105&_nc_oc=AQnVaN1MW4K2awfFuBWeN7CPyDHtGmDBXTy7UQswff1VIAvA91b-O1etHM_XenUXKwo&_nc_ht=scontent.fkhi2-1.fna&oh=000360607797f3919b5c64231c801fc5&oe=5DDD733D' },
  { name: 'Amer', img: 'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/16602602_1232046106878297_5954653433243686175_n.jpg?_nc_cat=110&_nc_oc=AQkaEpAYniUo2ehgDvRjJk6u2p_0rClj21CpWalALqhmo-oEogShYGGKpEBubQU_Ivc&_nc_ht=scontent.fkhi2-1.fna&oh=17c5d4081c8bb756c54826eafbcaaa9e&oe=5DAB0D65' },
  { name: 'Ali', img: 'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/17424589_1857645524453790_5456235214366608645_n.jpg?_nc_cat=100&_nc_oc=AQmiVYu5xwBVtg5aS-HuSIUS5bnc9zkenI-RzbUJ-ePi6ExSgq9BNkx5Agvmnfwg4LM&_nc_ht=scontent.fkhi2-1.fna&oh=5e23dcf77dbaab714f1536416bc06458&oe=5DDDF4CA' },
  { name: 'Hassan', img: 'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/32370953_1892487144117406_1583568477988323328_n.jpg?_nc_cat=107&_nc_oc=AQnxAADoEeE4mWiJpev8v7mTpbfVi4t0QlzJU8oRF6nxLJ3P-Saw523gtfSPxGCZc2w&_nc_ht=scontent.fkhi2-1.fna&oh=e53ce27a7d38d81dc53d9bc7354b2751&oe=5DA5B5DE' },
  { name: 'Huzaifa', img: 'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/29541220_1935859473154708_7074395019554650261_n.jpg?_nc_cat=105&_nc_oc=AQkzoc-1wPaReYFURj-vyvpwp4ob32I7ang8hmDCIoElPijTMLo5x3ocAHmoH4ikmkM&_nc_ht=scontent.fkhi2-1.fna&oh=f5bebb1564789a6aab70900d74744e4e&oe=5DA50588' },
  { name: 'Sodagar', img: 'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/58608401_1740380329440579_1226956394213670912_n.jpg?_nc_cat=104&_nc_oc=AQlmNFtq2kwc_PTLtlhtDfS3T75AFyLntBkuzvtPxe1yDisAO3JU8AJxW9QArWu4TsE&_nc_ht=scontent.fkhi2-1.fna&oh=bb0d0f18d663e26d3b2229e68ec90435&oe=5DDE649C' },
  { name: 'Azeem', img: 'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/25158374_1950957211585066_6202255613578198193_n.jpg?_nc_cat=102&_nc_oc=AQn8QshCUneg4KiBe5kzUG1HsiQy39Mzk0OzHui5rE_h72VBdIUe8Bqq-L0G9S1sevo&_nc_ht=scontent.fkhi2-1.fna&oh=31468dc8391c110e2306f9a80cbfbc98&oe=5DE0AA2C' },
  { name: 'Vishal', img: 'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/62555424_2322164698059229_8043176798428594176_n.jpg?_nc_cat=106&_nc_oc=AQlQplPv973xIKLzR6OeM3maQXDBpmfIoilbO8yoptPI3pf7e5VbrmQxGtMlOKz_EIo&_nc_ht=scontent.fkhi2-1.fna&oh=11050d3a2ec17ff46e960cd482d4c4b1&oe=5DE45C09' },
  { name: 'Arsum', img: 'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/10624850_442472039229298_2338799635777665820_n.jpg?_nc_cat=110&_nc_oc=AQm7Xxs63lKiWMJLRoXO8QI086oENmT3FMSdcBJAHjjOcthQ8U4qbr6z0t2cKDj4nq4&_nc_ht=scontent.fkhi2-1.fna&oh=e74c55c62ffc10c31deef4910eb8f23d&oe=5DAC1D5B' },
]
user = { name: 'ibrahim', img: 'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/31180113_1679928772084144_4657822874948599808_n.jpg?_nc_cat=104&_nc_oc=AQkpafDdjPglxBbNf413Vukf2l7pn4sfPYPzZ49mkB2cS59GHJp7A1BoRNI4A-0o0js&_nc_ht=scontent.fkhi2-1.fna&oh=f6e1f359c756ad5c31b60d17def7a625&oe=5DE52469' }

export default class ChatList extends Component {



  constructor(props) {
    super(props);


  }



  render() {
    return (
      <Container style={styles.container}>

        <Header style={{ borderBottomColor:'#ddd',borderBottomWidth:0.2,height: 80, backgroundColor: '#fff', elevation: 20, shadowColor: '#000', shadowOpacity: 0.2 }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={{justifyContent:'center', flex: 1 }}>
              <Thumbnail small style={{ borderWidth: 2, borderColor: '#ddd' }} source={{ uri: user.img }} />
            </View>
            <View style={{ flex: 4,flexDirection:'row', justifyContent: 'space-between' }}>
              <View><Text style={{ fontSize: 26, fontWeight: 'bold' }}>Chats</Text></View>
              <View style={{alignItems:'center',flexDirection:'row'}}>
                <Entypo style={{marginHorizontal:10}} size={22} name="camera" />
                <Entypo style={{marginHorizontal:10}} size={22} name="new-message" />
              </View>
            </View>
          </View>
        </Header>
        {/* <Content> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => 'key' + index}
          data={data}
          renderItem={({ item }) => <ChatView  name={item.name} img={item.img} />}
        />
        {/* </Content> */}
      </Container >
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'

  },
  header: {
    height: 100,
    marginTop: 100


  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});