import * as React from 'react';
import ReactDOM from 'react-dom';
import { Button, View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';
import uuid from 'uuid/v1';
//import ListPlayers from '../components/ListPlayers';
var cpt = 0;
const players = [
];
//generate a random id for player
var idPlayer = uuid();
/*function ShowPlayers(props) {
  return <View><Text>{props.name}</Text></View>
}*/
/*function FillScrollView(props){
  class ScrollPlayer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {''};
    }

    render() {
        const player = props;
        Object.keys(player).map(function(key, index) {
        player[key] = player.name;
        return (
          <ScrollView>{player.name}</ScrollView>
        );
      }
    }
  }
}
/*function FillScrollView(props){
  render() {
    const player = props;
    Object.keys(player).map(function(key, index) {
      player[key] = player.name;
    });
    return(
      <ScrollView>{player.name}</ScrollView>
      alert(player.name);
    );
  }
}*/

const Login = ({ navigation, route }) => {

  const [inputValue, onChangeText] = React.useState('');
  var allPlayers = [];
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 , padding: 16}}>
          <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <TextInput
            style={{ height: 40, width:120, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={inputValue}
            />
            <Button
            onPress={() => {
              var player = {name: inputValue, score: 0, id: cpt};
              players.push(player);
              FillScrollView(player);
              cpt++;
              //inputValue = '';
            }}
            title="Add player"
            />
            <Button
            onPress={() => {
              players.splice(-1,1);
            }}
            title="Erase player"
            />
            <Button
            onPress={() => {
              allPlayers = players;
              navigation.navigate('Home', {
                players: JSON.stringify(allPlayers)
              });
            }}
            title="Go"
            />
            <ScrollView>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
}

export default Login;
