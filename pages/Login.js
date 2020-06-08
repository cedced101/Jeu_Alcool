import * as React from 'react';
import ReactDOM from 'react-dom';
import { Button, View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';
import uuid from 'uuid/v1';
import ListPlayers from './components/ListPlayers';
//cpt = 0;
const players = [
];
//generate a random id for player
const idPlayer = uuid();
class ShowPlayers extends React.Component {
  state = {
    inputValue:'',
    players: [],
  };

}
/*function ShowPlayers(props) {
  return <View><Text>{props.name}</Text></View>
}*/
// On ne peut pas utiliser document.[...] en react native( Trouver une nouvelle solution)

const Login = ({ navigation, route }) => {

  const [inputValue, onChangeText] = React.useState('');
  var allPlayers = [];
  render() {
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
              var player = {name: inputValue, score: 0, id: idPlayer};
              players.push(player);
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
                .map(item = (
                  <ListPlayers
                    key={item.id}
                    {...item}
                    deleteItem={this.deleteItem}
                  />
                })}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;
