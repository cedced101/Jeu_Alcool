import * as React from 'react';
import { Button, View, Text, SafeAreaView, TextInput } from 'react-native';
var cpt = 0;
const players = [
]
const Login = ({ navigation, route }) => {
  const [value, onChangeText] = React.useState('Undefined');
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
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
          />
          <Button
            onPress={() => {
                      var player = {name: value, score: 0, id: cpt};                      
                      players.push(player);
                      alert(players[0].id)
                      cpt++;
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
                    navigation.navigate('Home', {
                      players: players[cpt].id
                    });
                  }}
            title="Go"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
