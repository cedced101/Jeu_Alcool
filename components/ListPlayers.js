import React, {component} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

class List extends Component {
  render() {
    const { id } = this.props;
    return(
      <View style ={styles.container}>
        <View style ={styles.column}>
          <TouchableOpacity onPress={alert('fonction pour supprimer')}>
            <View
              style={[
                styles.circle,
              ]}
            />
          </TouchableOpacity>
          <Text>{text}</Text>
        </View>
        <View>
          <TouchableOpacity onPressOut={() = deletePlayer(id)}>
          </TouchableOpacity>
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
