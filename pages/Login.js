import React from 'react';
import { Button, View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet } from 'react-native';
import uuid from 'uuid/v1';
import ListPlayers from '../components/ListPlayers';
import InputPlayer from '../components/InputPlayer';
var cpt = 0;
const players = [
];

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
            name: inputValue,
            score: 0
          }
        };
        cpt++;
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
  delPlayer = id => {
    this.setState(prevState => {
    const allItems = prevState.allItems;
    delete allItems[id];
    const newState = {
      ...prevState,
      ...allItems
    };
    return {...newState};
    });
  }

  render() {
    var allPlayers = [];
    const { inputValue, allItems } = this.state;
    return(
      <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.viewStyle}>
          <View>
            <InputPlayer
            inputValue={inputValue}
            onChangeText={this.newInputValue}
            onDoneAddItem={this.onDoneAddItem}
          />
            <Button
            onPress={() => {
              allPlayers = Object.values(allItems);
              if(allPlayers != null){
              this.props.navigation.navigate('Home', {
                players: JSON.stringify(allPlayers)
              });
            }
            else{
              alert("Vous devez d'abord ajouter des joueurs");
            }
            }}
            title="Go"
            />
            <Button
            onPress={() => {
              allPlayers = Object.values(allItems);
              if(allPlayers != null){
                this.props.navigation.navigate('Parameters', {
                  players: JSON.stringify(allPlayers)
                });
              }
            }}
            title="Go to Parameters"
            />
            <View style={styles.viewPlayers}>
              <ScrollView>
              {Object.values(allItems)
                  .reverse()
                  .map(item => (
                    <ListPlayers
                      key={item.id}
                      {...item}
                      delPlayer={this.delPlayer}
                      isDeletable={true}
                      turnCount={-1}
                    />
                  ))}
              </ScrollView>
            </View>
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
  },
  viewPlayers:{
    flexDirection: 'row'
  }
});
