import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import Defis from '../components/Defis.js';
import Popups from '../components/Popups.js';
var score = 0;
const Home = ({ navigation, route }) => {
  React.useEffect(() => {
<<<<<<< HEAD
    if (route.params?.players) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.players]);
  var players = route.params?.players;
  React.useEffect(() => {
    if (route.params?.post) {
=======
    if (route.params?.points) {
>>>>>>> dc9cd623cb61e14e503e6194e16debe0b09c62d5
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
<<<<<<< HEAD
            Post: {route.params?.players}
          </Text>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            This is the First Page of the app
=======
            C'est le tour de _______
            {"\n"}{"\n"}
            {word}
>>>>>>> dc9cd623cb61e14e503e6194e16debe0b09c62d5
          </Text>
          <View>
            <Button
              onPress={() => {
                        navigation.navigate('Information', {
                      newPoints: Math.floor(Math.random() * 4 + 2),
                      challState: true,
                    });
                  }}
<<<<<<< HEAD
            title="Raté"
          />
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Post: {point}
          </Text>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Post: {score.toString()}
          </Text>
=======
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
>>>>>>> dc9cd623cb61e14e503e6194e16debe0b09c62d5
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
