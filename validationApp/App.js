import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [invalidEmail, setInValidEmail] = useState(null);

  const [mobile, setMobile] = useState('');
  const [invalidMobile, setInvalidMobile] = useState(null);

  const [name, setName] = useState('');
  const [invalidName, setInvalidName] = useState(null);

  const [password, setPassword] = useState('');
  const [invalidPassword, setInvalidPassword] = useState(null);

  const [confPassword, setConfPassword] = useState('');
  const [invalidConfPassword, setInvalidConfPassword] = useState(null);

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getUTCDate();
    var month = new Date().getUTCMonth() + 1;
    var year = new Date().getUTCFullYear();
    var hour = new Date().getUTCHours();
    var min = new Date().getUTCMinutes();
    var sec = new Date().getUTCSeconds();
    var milisec = new Date().getUTCMilliseconds();
    setCurrentDate(
      date +
        '/' +
        month +
        '/' +
        year +
        ' ' +
        hour +
        ':' +
        min +
        ':' +
        sec +
        ':' +
        milisec,
    );
  }, []);

  const checkName = e => {
    let nameRGX = /^[a-zA-z]+$/;
    setName({name: e});

    if (e.length < 2) {
      setInvalidName('Name Must be more than 1 characters');
    } else if (!nameRGX.test(e)) {
      setInvalidName('Enter Alphabets only');
    } else if (e.length > 20) {
      setInvalidName('Name Can not be more than 20 characters');
    } else {
      setInvalidName(null);
    }
  };

  const checkMobile = e => {
    let mobileRGX = /^[\d]+$/;
    setMobile({mobile: e});

    if (e === '') {
      setInvalidMobile("Mobile number can't be empty");
    } else if (!mobileRGX.test(e)) {
      setInvalidMobile('enter only Numbers');
    } else if (e.length !== 10) {
      setInvalidMobile('enter 10 digits ');
    } else {
      setInvalidMobile(null);
    }
  };

  const checkEmail = e => {
    let emailRGX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    setEmail({email: e});

    if (e === '') {
      setInValidEmail('Email can not be empty');
    } else if (!emailRGX.test(e)) {
      setInValidEmail('Enter Valid Email Address only');
    } else {
      setInValidEmail(null);
    }
  };

  const checkPassword = e => {
    let passwordRGX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!@#\\$%^&*])/; //(?=.{8,}) to add length
    setPassword({password: e});

    if (e === '') {
      setInvalidPassword("Password can't be empty");
    } else if (!passwordRGX.test(e)) {
      setInvalidPassword(
        'Password should contain at least one lowercase uppercase digit and special character ',
      );
    } else if (e.length < 8) {
      setInvalidPassword('Enter at least 8 or more letters');
    } else {
      setInvalidPassword(null);
    }
  };

  // const checkConfPassword = e => {
  //   setConfPassword({confPassword: e});
  //   console.log(password);
  //   console.log(confPassword);

  //   if (e === '') {
  //     setInvalidConfPassword('Confirm Password can not be empty');
  //   } else if (confPassword !== password) {
  //     setInvalidConfPassword('Password dose not match');
  //   } else {
  //     setInvalidConfPassword(null);
  //   }
  // };

  const submit = () => {
    if (name !== '' && mobile !== '' && email !== '' && password !== '') {
      alert(name, mobile, email, password);
    } else {
      alert('All field are not filled');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Validation Check</Text>
      </View>
      <View style={styles.contentView}>
        <TextInput
          style={styles.inputField}
          // maxLength={5}
          placeholder="Your Name"
          // onBlur={() => submit()}
          onChangeText={e => checkName(e)}
        />

        <Text style={styles.errorText}>{invalidName}</Text>
        <TextInput
          style={styles.inputField}
          keyboardType={'number-pad'}
          placeholder="Phone Number"
          onChangeText={e => checkMobile(e)}
        />
        <Text style={styles.errorText}>{invalidMobile}</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Your Email"
          onChangeText={e => checkEmail(e)}
        />
        <Text style={styles.errorText}>{invalidEmail}</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          onChangeText={e => checkPassword(e)}
        />
        <Text style={styles.errorText}>{invalidPassword}</Text>
        {/* <TextInput
          style={styles.inputField}
          placeholder="Confirm Password"
          onChangeText={e => checkConfPassword(e)}
        />
        <Text style={styles.errorText}>{invalidConfPassword}</Text> */}
        <Button title="Submit" onPress={() => submit()} />
        <Text>{currentDate}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    alignItems: 'center',
    margin: 15,
    backgroundColor: 'lightgrey',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  inputField: {
    borderColor: 'blue',
    margin: 15,
    borderWidth: 2,
    height: 40,
    width: '93%',
    fontSize: 18,
  },
  contentView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },
});

export default App;
