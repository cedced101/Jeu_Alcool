import React from 'react';
import { Button, View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet } from 'react-native';
import uuid from 'uuid/v1';
import ListPlayers from '../components/ListPlayers';
import InputPlayer from '../components/InputPlayer';
import '../App';
var maxPoint = 6;
var maxRound = 2;
var allPlayers = [];
var players = route.params?.players;

export default class Parameters extends React.Component {
  render() {
    if (allPlayers.length == 0) {
      allPlayers = JSON.parse(players);
    }
    return(
      <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.viewStyle}>
          <View>
            <Text>Choose max points:</Text>
            <Button
            onPress={() => {
              var newMaxPoint = 2;
              maxPoint += newMaxPoint;
              alert(maxPoint);
            }}
            title= "+"
            />
            <Button
            onPress={() => {
              var newMaxPoint = 2;
              maxPoint -= newMaxPoint;
              alert(maxPoint);
            }}
            title= "-"
            />
            <Text>{maxPoint}</Text>
            <Text>Choose max rounds:</Text>
            <Button
            onPress={() => {
              var newMaxRound = 1;
              maxRound += newMaxRound;
              alert(maxRound);
            }}
            title= "+"
            />
            <Button
            onPress={() => {
              var newMaxRound = 1;
              maxRound -= newMaxRound;
              alert(maxRound);
            }}
            title= "-"
            />
            <Text>{maxRound}</Text>
            <Button
            onPress={() => {
              this.props.navigation.navigate('Home')
              }
            }
            title="Start game"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1
  },
  viewStyle: {
    flex: 1 ,
    padding: 16
  }
});
