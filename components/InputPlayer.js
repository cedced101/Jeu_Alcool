import React from 'react';
import { StyleSheet, TextInput} from 'react-native';
const InputPlayer = ({ inputValue, onChangeText, onDoneAddItem }) => (
  <TextInput
    style={styles.input}
    value={inputValue}
    onChangeText={onChangeText}
<<<<<<< HEAD
    placeholder="Player name"
=======
    placeholder="Add player..."
>>>>>>> e50fb4a905da7cf4c7ac29bf529b9f1a00345811
    multiline={true}
    autoCapitalize="sentences"
    underlineColorAndroid="transparent"
    selectionColor={'white'}
    maxLength={30}
    returnKeyType="done"
    autoCorrect={false}
    blurOnSubmit={true}
    onSubmitEditing={onDoneAddItem}
  />
);
const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 34,
    color: 'black',
    fontWeight: '500'
  }
});
export default InputPlayer;
