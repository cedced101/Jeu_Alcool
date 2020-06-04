import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import Defis from './components/Defis';
import Popups from './components/Popups';

GenerateRandomNumber=()=>
  {
    const Word = Defis[new Random().nextInt(Defis.length)];
    this.setState({
      NumberHolder : Word
    })
  }

const Information = ({ navigation, route }) => {
  const { itemId } = route.params;
  const [postText] = React.useState(itemId);
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
            This is Second Page of the App
          </Text>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            
            {Word}
          </Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Button title="Suivant"
            onPress={() => {
              navigation.navigate('Home', {
                post: postText
              });
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Information;
