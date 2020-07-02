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
    allPlayers.forEach((item, i) => {
      allPlayers[i].score = item.score * 0;
    });
  }
  if(allPlayers[turnNum].turnCount >= maxRound){
    alert('Partie terminée');
    allPlayers.forEach((item, i) => {
      allPlayers[i].score = item.score * 0;
    });
  }
    return (
      <SafeAreaView style={styles.safeAreaStyle}>
        <View>
            <Text>
              Max points: {maxPoint} Max Rounds: {maxRound}
            </Text>
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
            <View style={styles.viewText}>
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
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute'

  },
  viewPlayers:{
    alignContent: 'flex-start',
    flexDirection: 'column'
  },
  viewText: {
    alignContent: 'flex-end',
    flexDirection: 'column'
  },
  textStyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16
  }
});

export default Home;
