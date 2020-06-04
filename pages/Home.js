import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
var score = 0;
const Home = ({ navigation, route }) => {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);
var point = route.params?.post;
score = score + parseInt(point);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
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
            This is the First Page of the app
          </Text>
          <Button
            onPress={() => {
                      navigation.navigate('Information', {
                    itemId: Math.floor(Math.random() * 4 + 2),
                  });
                }}
            title="Reussi"
          />
          <Button
          onPress={() => {
                    navigation.navigate('Information', {
                      itemId: 0,
                    });
                  }}
            title="Raté"
          />
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Post: {route.params?.post}
          </Text>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Post: {score.toString()}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
