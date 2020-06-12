import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Challenges from '../components/Challenges.js';
import Popups from '../components/Popups.js';
var score = 0;
var turnNum = 0;
var turnCount = 0;
var usedChalls = [];
var allPlayers = [];

const Home = ({ navigation, route }) => {

  React.useEffect(() => {
    if (route.params?.players) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.players]);
  var players = route.params?.players;
  if (allPlayers.length == 0) {

    allPlayers = JSON.parse(players);
  }

  var chall;

  do  {
    if (usedChalls.length == Challenges.length) {
      alert('Partie terminée!');
      break;
    }
    chall = parseInt(Math.random() * (Challenges.length));
  } while (usedChalls.includes(Challenges[chall]))

  usedChalls.push(Challenges[chall]);

  const popupIndex = parseInt(Math.random() * (Popups.length));

  const word = Challenges[chall];

  if (turnCount != 0 && turnNum == 0) {
    alert(Popups[popupIndex]);
  }

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.viewStyle}>
        <View
        style={styles.secondViewStyle}>
          <Text
          style={styles.textStyle}>
          C'est le tour de {allPlayers[turnNum].name}
          {"\n"}{"\n"}
          {word}
          </Text>
          <Text
          style={styles.textStyle}>
          Vous avez {allPlayers[turnNum].score} points!
          </Text>
          <View>
            <Button
            onPress={() => {
              var newPoints = Math.floor(Math.random() * 4 + 2);
              allPlayers[turnNum].score += newPoints;
              var currentScore = allPlayers[turnNum].score;
              if (turnNum >= allPlayers.length - 1) {
                turnNum = 0;
                turnCount++;
              }
              else {
                turnNum++;
              }
              navigation.navigate('Information', {
                newPoints: newPoints,
                challState: true,
                currentScore: currentScore,
              });
            }}
            title="Réussi"
            />
            <Button
            onPress={() => {
              var currentScore = allPlayers[turnNum].score;
              if (turnNum >= allPlayers.length - 1) {
                turnNum = 0;
                turnCount++;
              }
              else {
                turnNum++;
              }
              navigation.navigate('Information', {
                newPoints: 0,
                challState: false,
                currentScore: currentScore,
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
  }
});

export default Home;
