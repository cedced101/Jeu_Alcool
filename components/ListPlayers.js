import React, { Component } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
const { height, width } = Dimensions.get('window');

class ListPlayers extends Component {
  render() {
    const { name, id, delPlayer, score, isDeletable, turnCount, index } = this.props;
    return(
      <View horizontal={true} style ={styles.container}>
          <View style = {[styles.viewTuile, turnCount == index ? { backgroundColor:'blue' } : {}]}>
            <View style = {styles.viewItem}>
            <View style = {styles.delButton}>
              {isDeletable &&
                <Button color="#ff5c5c"
                  onPress={() => delPlayer(id)}
                  title="X"
                />
              }
            </View>
            <View style = {styles.playerName}><Text style ={[styles.textStyle, turnCount == index ? { color:'white' } : {}]}>{name}{'\n'}{'\n'}Points: {score}</Text></View>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  viewTuile: {
    width: 185,
    height: 185,
    backgroundColor: 'white',
    borderColor: 'black',
    marginRight: 10,
    borderRadius: 10
  },
  viewItem: {
    alignItems: 'center'
  },
  delButton: {
    alignSelf: 'flex-start'
  },
  playerName: {
    marginTop: 35
  },
  textStyle: {
    fontSize: 25,
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 16
  }
});
export default ListPlayers;
