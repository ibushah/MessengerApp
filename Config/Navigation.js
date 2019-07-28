import { createSwitchNavigator, createAppContainer,createBottomTabNavigator } from "react-navigation";
import ChatList from '../Screens/chatlist';
import Profile from '../Screens/profile';
import Loader from '../Screens/loader';
import {Entypo,FontAwesome} from 'react-native-vector-icons';
import React from 'react'
import {TouchableOpacity} from 'react-native';
import Chat from '../Screens/Chat';
import ChatView from '../Components/chatView'


const frontTabNavigation = createBottomTabNavigator({
    Chatlist: ChatList,
    Profile: Profile,
  },
  {
    animationEnabled:true,
    swipeEnabled:true,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
       
     
        if (routeName === 'Chatlist') {
        
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
        return (  <Entypo name="chat" size={25} color={tintColor} />  )
          
        } else if (routeName === 'Profile') {
    return (  <FontAwesome name="user-circle"  size={25}  color={tintColor}/> )
        }

        // You can return any component that you like here!
       
      },
    }),
    tabBarOptions: {
      activeTintColor: '#0083FF',
      inactiveTintColor: 'gray',
      showLabel:false
    },
  }
  );
  

const mainNavigation = createSwitchNavigator({
    Loader:Loader,
    Main:frontTabNavigation,
    Chat,
    ChatView
   
})





export default createAppContainer(mainNavigation);





