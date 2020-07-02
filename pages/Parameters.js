import React from 'react';
import { Button, View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet } from 'react-native';
import uuid from 'uuid/v1';
import ListPlayers from '../components/ListPlayers';
import InputPlayer from '../components/InputPlayer';
var maxPoint = 6;
var maxRound = 2;
var allPlayers = [];
//var players = route.params?.players;

export default class Parameters extends React.Component {
  state = {
    pointValue: maxPoint,
    roundValue: maxRound
  }
  upMaxPoints = () => {
    this.setState({
      pointValue: this.state.pointValue +2
    })
  }
  downMaxPoints = () => {
    this.setState({
      pointValue: this.state.pointValue -2
    })
  }
  upMaxRounds = () => {
    this.setState({
      roundValue: this.state.roundValue +1
    })
  }
  downMaxRounds = () => {
    this.setState({
      roundValue: this.state.roundValue -1
    })
  }
  render() {
    return(
      <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.viewStyle}>
          <View>
            <Text>Choose max points:</Text>
            <Button
              onPress={this.upMaxPoints}
              title= "+"
            />
            <Button
              onPress={this.downMaxPoints}
              title= "-"
            />
            <Text>{this.state.pointValue}</Text>
            <Text>Choose max rounds:</Text>
            <Button
              onPress={this.upMaxRounds}
              title= "+"
            />
            <Button
              onPress={this.downMaxRounds}
              title= "-"
            />
            <Text>{this.state.roundValue}</Text>
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
