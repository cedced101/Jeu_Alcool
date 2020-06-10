import React, { Component } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
const { height, width } = Dimensions.get('window');
class ListPlayers extends Component {
  render() {
    const { text, id } = this.props;
    return(
      <View style ={styles.container}>
        <View style ={styles.column}>
          <Text>{text}</Text>
        </View>
        <View style ={styles.column}>
        <Button
        onPress={this.props.delPlayer}
        title="X"
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width -50,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: 'white',
    height: width / 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 1.5
  }
});
export default ListPlayers;
