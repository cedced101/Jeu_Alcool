import React from 'react';
import { Button, View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet } from 'react-native';
import uuid from 'uuid/v1';
import ListPlayers from '../components/ListPlayers';
import InputPlayer from '../components/InputPlayer';
var maxPoint = 6;
var maxRound = 2;

export default class Parameters extends React.Component {

  render() {
    const { inputValue, allItems } = this.state;
    return(
      <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.viewStyle}>
          <View>
            <Text>Choose max points:</Text>
            <Button
            onPress={() => {
              var newMaxPoint = 2;
              maxPoint += newMaxPoint;
            }}
            title= "+"
            />
            <Button
            onPress={() => {
              var newMaxPoint = 2;
              maxPoint -= newMaxPoint;
            }}
            title= "-"
            />
            <Text>{maxPoint}</Text>
            <Text>Choose max rounds:</Text>
            <Button
            onPress={() => {
              var newMaxRound = 1;
              maxRound += newMaxRound;
            }}
            title= "+"
            />
            <Button
            onPress={() => {
              var newMaxRound = 1;
              maxRound -= newMaxRound;
            }}
            title= "-"
            />
            <Text>{maxRound}</Text>
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
