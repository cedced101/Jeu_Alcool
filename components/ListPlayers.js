import React, { Component } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
const { height, width } = Dimensions.get('window');

class ListPlayers extends Component {

  render() {
    const { name, id, delPlayer, score } = this.props;

    return(
      <View style ={styles.container}>
        <View style ={styles.column}>
          <View style = {styles.viewStyle}>
            <Text style ={styles.textStyle}>{name}</Text>
            <Button
            onPress={() => delPlayer(id)}
            title="X"
            />
          </View>
        </View>
        <View style ={styles.column}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: 'white',
    height: 150,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 1.5
  },
  textStyle: {
    alignItems: 'center',
    paddingRight: 10
  },
  viewStyle:{
    paddingLeft: 45,
  }
});
export default ListPlayers;
