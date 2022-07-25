import React from 'react';
import {Text, SafeAreaView, Button, Alert, StyleSheet} from 'react-native';
import {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput} from 'react-native-gesture-handler';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    try {
      AsyncStorage.getItem('userData').then(value => {
        if (value !== null) {
          let user = JSON.parse(value);
          this.setState({name: user.Name});
          this.setState({age: user.Age});
          console.log('value\t', value);
          console.log('state\t', this.state.name);
        }
      });
    } catch (error) {
      console.warn(error);
    }
  };

  updateData = async () => {
    if (this.state.name.length === 0) {
      Alert.alert('Navigation App', 'Name is empty');
    } else {
      try {
        var user = {
          Name: this.state.name,
        };
        await AsyncStorage.mergeItem('userData', JSON.stringify(user));
        console.log(this.state.name);
        Alert.alert('Updated', 'Name is updated');
      } catch (error) {
        console.warn(error);
      }
    }
  };

  removeData = async () => {
    try {
      await AsyncStorage.removeItem('userName');
      //   await AsyncStorage.clear();  // clear all keys
      this.props.navigation.navigate('login');
    } catch (error) {
      console.warn(error);
    }
  };

  render() {
    return (
      <SafeAreaView>
        <Text>
          Welcome {this.state.name} your age is {this.state.age} !
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Update Name"
          onChangeText={ch => {
            this.setState({name: ch});
          }}
        />
        <Button
          style={styles.button}
          title="Update"
          onPress={this.updateData}
        />
        <Button
          style={styles.button}
          title="Remove"
          onPress={this.removeData}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    margin: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
    justifyContent: 'center',
  },
  button: {
    margin: 20,
    backgroundColor: 'black',
    color: 'white',
  },
});

export default Home;
