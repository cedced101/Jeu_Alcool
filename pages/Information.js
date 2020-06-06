import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import Challenges from '../components/Challenges.js';
import Popups from '../components/Popups.js';

const Information = ({ navigation, route }) => {
  const { newPoints } = route.params;
  const { challState } = route.params;
  const { currentScore } = route.params;
  const [state] = React.useState(challState);
  const instruction = (state ? "Félicitations!" : "Bois dumbass");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            marginBottom: 16
          }}>
          {instruction}
          </Text>
          <Text>
          + {JSON.stringify(newPoints)} points! {"\n"}
          {"\n"}
          Total points : {JSON.stringify(currentScore)}
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

export default Information;
