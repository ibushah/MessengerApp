import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Left, Card, CardItem, Text, Thumbnail, Badge } from 'native-base'


export default class ChatView extends Component {

route()
{
    console.log(this.props)
}

    render() {
        return (


            <TouchableOpacity onPress={this.route.bind(this)} style={{ borderBottomColor: 'gray', borderBottomStartRadius: 100, borderBottomWidth: 0.3, paddingVertical: 15, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1, backgroundColor: '#fff' }}>


                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Thumbnail style={{ height: 58, width: 58 }} source={{ uri: this.props.img }} />
                </View>
                <View style={{ flex: 3 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{this.props.name}</Text>
                    </View>

                </View>


            </TouchableOpacity>

        )
    }

}