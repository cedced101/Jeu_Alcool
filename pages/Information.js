import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import Defis from '../components/Defis.js';
import Popups from '../components/Popups.js';

const Information = ({ navigation, route }) => {
  const { newPoints } = route.params;
  const { challState } = route.params;
  const [state] = React.useState(challState);
  const instruction = (state ? "Félicitations!" : "Bois dumbass");
  const [postText] = React.useState(newPoints);
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
          Tu a gagné {JSON.stringify(newPoints)} points! {"\n"}
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
