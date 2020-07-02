import * as React from 'react';
import { Button, View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Challenges from '../components/Challenges.js';
import Popups from '../components/Popups.js';
import ListPlayers from '../components/ListPlayers';
import { NavigationActions } from 'react-navigation';
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
  var maxPoint = route.params?.pointValue;
  var maxRound = route.params?.roundValue;
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
  if(allPlayers[turnNum].score >= maxPoint){
    alert('Partie terminée');
    for( var cpt =0; cpt <= allPlayers.lenght; cpt++)
    {
      var test = 0;
      allPlayers[turnNum].score = test;
    }
  }
    return (
      <SafeAreaView style={styles.safeAreaStyle}>
        <Text>
        Max points: {maxPoint} Max Rounds: {maxRound}
        </Text>
        <View>
          <View style={styles.viewPlayers}>
            <ScrollView>
            {Object.values(allPlayers)
                .reverse()
                .map((item, index) => (
                  <ListPlayers
                    key={item.id}
                    index={index}
                    {...item}
                    isDeletable={false}
                    turnCount={turnNum}
                  />
                ))}
            </ScrollView>
          </View>
          <View style={styles.viewStyle}>
            <View
            style={styles.secondViewStyle}>
              <Text
              style={styles.textStyle}>
              C'est le tour de {allPlayers[turnNum].name}
              {"\n"}{"\n"}
              {word}
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
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    flexDirection: 'row'
  },
  viewPlayers:{
    alignItems:'flex-start'
  },
  viewStyle: {
    flex: 1 ,
    alignItems: 'flex-end',
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
