import React from 'react';
import { Button, View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';
import uuid from 'uuid/v1';
import ListPlayers from '../components/ListPlayers';
import InputPlayer from '../components/InputPlayer';
var cpt = 0;
const players = [
];

/*class FillScrollView extends React.Component {
  render(){
    return(
      <ScrollView>{players.name}</ScrollView>
    );
  }
}

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

/*const Login = ({ navigation, route }) => {

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
              //generate a random id for player
              var idPlayer = uuid();
              var player = {name: inputValue, score: 0, id: idPlayer};
              players.push(player);
//              FillScrollView(player);
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
            {Object.values(allPlayers)
                .reverse()
                .map(item => (
                  <ListPlayers
                    key={item.id}
                    {...item}
                  />
                ))}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
}*/
/*function NavigateHome(props) {
  const navigation = props;
  navigation.navigate('Home', {
  players: JSON.stringify(allPlayers)
  });
}*/
function FillScrollView(props){
    alert(props);
    /*const player = props;
    Object.keys(player).map(function(key, index) {
      player[key] = player.name;
    });
    return(
      alert('tt')
    );*/
  }

export default class Login extends React.Component {
  state = {
    inputValue: '',
    loadingItems: false,
    allItems: {},
    isCompleted: false
  };
  newInputValue = value => {
  this.setState({
    inputValue: value
  });
};
onDoneAddItem = () => {
    const { inputValue } = this.state;
    if (inputValue !== '') {
      this.setState(prevState => {
        const id = uuid();
        const newItemObject = {
          [id]: {
            id,
            text: inputValue
          }
        };
        const newState = {
          ...prevState,
          inputValue: '',
          allItems: {
            ...prevState.allItems,
            ...newItemObject
          }
        };
        return { ...newState };
      });
    }
  };
  delPlayer = () => {
    alert(players);
    if (players.length > 0)
    {
      alert(players);
      players.splice(-1,1);
      alert(players);
    }
  }

  render() {
//    var allPlayers = [];
    const { inputValue, allItems } = this.state;
    return(
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 , padding: 16}}>
          <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <InputPlayer
            inputValue={inputValue}
            onChangeText={this.newInputValue}
            onDoneAddItem={this.onDoneAddItem}
          />
            <Button
            onPress={() => {
              allPlayers = players;
              //NavigateHome();
              this.props.navigation.navigate('Home', {
                players: JSON.stringify(allPlayers)
              });
            }}
            title="Go"
            />
            <ScrollView delPlayer={this.delPlayer}>
            {Object.values(allItems)
                .reverse()
                .map(item => (
                  <ListPlayers
                    key={item.id}
                    {...item}
                  />
                ))}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
