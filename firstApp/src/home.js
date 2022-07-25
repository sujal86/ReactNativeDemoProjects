import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import frontImg from './assets/frontimg.jpg';

const Home = props => {
  const [myInputs, setMyInput] = useState('');
  const [names, setNames] = useState(['']);

  const onChangeInput = event => {
    setMyInput(event);
  };

  const onAddNames = () => {
    const newState = [...names, myInputs];
    setNames(newState);
    setMyInput('');
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text>Welcome to Home Screen</Text>
      </View>
      <View>
        <Image style={styles.img} source={frontImg} />
      </View>
      <View style={styles.fieldHeader}>
        <Text>Enter Guest Names</Text>
      </View>
      <View style={styles.buttons}>
        <TextInput
          placeholder="Enter Name"
          style={styles.text_input}
          value={myInputs}
          onChangeText={e => onChangeInput(e)}
        />
        <Button style={styles.buttons} title="Add Name" onPress={onAddNames} />
        {/* <View>
          {names.map(name => (
            <Text key={name}>{name}</Text>
          ))}
        </View> */}
        <Button
          title="View Guest List"
          onPress={() =>
            props.navigation.navigate('ViewNames', {
              names: ['' + names],
            })
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    alignItems: 'center',
    fontSize: 40,
  },
  fieldHeader: {
    marginTop: 20,
    alignItems: 'center',
    fontSize: 40,
  },
  img: {
    marginLeft: 5,
    width: '97%',
    height: 260,
  },
  text_input: {
    padding: 5,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    fontSize: 15,
    borderColor: '#961100',
    borderWidth: 1,
    backgroundColor: '#FCECDC',
    textAlign: 'center',
  },
  buttons: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default Home;
