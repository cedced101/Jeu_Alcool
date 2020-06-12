import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Challenges from '../components/Challenges.js';
import Popups from '../components/Popups.js';

const Information = ({ navigation, route }) => {
  const { newPoints } = route.params;
  const { challState } = route.params;
  const { currentScore } = route.params;
  const [state] = React.useState(challState);
  const instruction = (state ? "Félicitations!" : "Bois dumbass");
  return (
    <SafeAreaView
      style={styles.safeAreaStyle}>
      <View
        style={styles.viewStyle}>
        <View
          style={styles.secondViewStyle}>
          <Text
          style={styles.textStyle}>
          {instruction}
          </Text>
          <Text
          style={styles.secondTextStyle}>
          + {JSON.stringify(newPoints)} points!
          {"\n"}
          {"\n"}
          Total points : {JSON.stringify(currentScore)}
          {"\n"}
          </Text>
          <Button title="Suivant"
            onPress={() => {
              navigation.navigate('Home', {
                points: newPoints
              });
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1
  },
  viewStyle: {
    flex: 1 ,
    padding: 16
  },
  secondViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16
  },
  secondTextStyle: {
    textAlign: 'center'
  }
});

export default Information;
