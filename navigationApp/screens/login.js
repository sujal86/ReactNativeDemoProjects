import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Button,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Login extends Component {
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
      AsyncStorage.getItem('userName').then(value => {
        if (value !== null) {
          this.props.navigation.navigate('home');
        }
      });
    } catch (error) {
      console.warn(error);
    }
  };

  setData = async () => {
    if (this.state.name.length === 0 || this.state.age.length === 0) {
      Alert.alert('Navigation App', 'All field must be filled');
    } else {
      try {
        var user = {
          Name: this.state.name,
          Age: this.state.age,
        };
        await AsyncStorage.setItem('userData', JSON.stringify(user));
        console.log(this.state.name);
        this.props.navigation.navigate('home');
      } catch (error) {
        console.warn(error);
      }
    }
  };

  render() {
    return (
      <SafeAreaView>
        <Text>Hello from Login</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Name"
          onChangeText={ch => {
            this.setState({name: ch});
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Age"
          onChangeText={ch => {
            this.setState({age: ch});
          }}
        />
        <Button style={styles.button} title="Login" onPress={this.setData} />
        <Text>{this.state.name}</Text>
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

export default Login;
