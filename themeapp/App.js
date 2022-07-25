import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { themes } from './src/Theme';
import styles from './styles';

class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.text}>Hello Theme</Text>
          <TextInput
            style={themes.textInput}
            placeholder={'text input'}
          />
          <Button
            style={themes.buttons}
            title={'Button Press'}
          />
          <TouchableOpacity>
            <Text style={themes.textInput}>Another Hello</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
export default App;
