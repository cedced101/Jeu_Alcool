import React, { Component } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
const { height, width } = Dimensions.get('window');

class ListPlayers extends Component {
  render() {
    const { name, id, delPlayer, score } = this.props;
    return(
      <View horizontal={true} style ={styles.container}>
          <View style = {styles.viewTuile}>
            <View style = {styles.viewItem}>
              <Text style ={styles.textStyle}>{name}</Text>
              <View>
                <Button
                  onPress={() => delPlayer(id)}
                  title="X"
                />
              </View>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: 50,
  },
  viewTuile:{
    width: 185,
    height: 185,
    backgroundColor: 'white',
    borderColor: 'black',
    marginRight: 10
  },
  viewItem:{
    alignItems: 'center'
  }
});
export default ListPlayers;
