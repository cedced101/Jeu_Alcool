import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import Defis from '../components/Defis.js';
import Popups from '../components/Popups.js';
var score = 0;
const Home = ({ navigation, route }) => {
  React.useEffect(() => {
    if (route.params?.players) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.players]);
  var players = route.params?.players;
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.points]);
var point = route.params?.post;
score = score + parseInt(point);

const word = Defis[parseInt(Math.random() * ((Defis.length - 1) - 0) + 0)];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            C'est le tour de {players} _______
            {"\n"}{"\n"}
            {word}
          </Text>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Vous avez {score} points!
          </Text>
          <View>
            <Button
              onPress={() => {
                        navigation.navigate('Information', {
                      newPoints: Math.floor(Math.random() * 4 + 2),
                      challState: true,
                    });
                  }}
              title="Réussi"
            />
            <Button
            onPress={() => {
                      navigation.navigate('Information', {
                        newPoints: 0,
                        challState: false,
                      });
                    }}
              title="Raté"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
