import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const Inputs = () => {
  const [myInput, setMyInput] = useState('');
  const [names, setNames] = useState(['sujal', 'vivek']);

  const onChangeInput = event => {
    setMyInput(event);
  };

  const onAddUser = () => {
    const newState = [...names, myInput];
    setNames(newState);
    setMyInput('');
  };

  return (
    <>
      <TextInput
        style={Styles.inputs}
        value={myInput}
        onChangeText={e => onChangeInput(e)}
        //   multiline={true}
        //   maxLength={5}
        //   keyboardType="number-pad"
        //   editable={false}
      />
      <Button title="Add User" onPress={onAddUser} />
      <View>
        {names.map(name => (
          <Text style={Styles.user} key={name}>
            {name}
          </Text>
        ))}
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  inputs: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: 20,
  },
  user: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    marginBottom: 20,
  },
});

export default Inputs;
