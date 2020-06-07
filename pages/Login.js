import * as React from 'react';
import ReactDOM from 'react-dom';
import { Button, View, Text, SafeAreaView, TextInput, ListView } from 'react-native';
cpt = 0;
const players = [
];
class ShowPlayers extends React.Component {
  render(){
    return <h1> Hello, {this.props.name}</h1>;
  }
}
/*function ShowPlayers(props) {
  return <View><Text>{props.name}</Text></View>
}*/
// On ne peut pas utiliser document.[...] en react native( Trouver une nouvelle solution)
const element = <ShowPlayers name = "Sara" />;
ReactDOM.render(element,
  window.getElementById('root'));

const Login = ({ navigation, route }) => {

  const [value, onChangeText] = React.useState('');
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
          value={value}
          />
          <Button
          onPress={() => {
            var player = {name: value, score: 0, id: cpt};
            players.push(player);
            Welcome
            cpt++;
            //value = '';
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
          <View>{rows}</View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
