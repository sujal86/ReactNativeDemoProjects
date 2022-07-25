import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
  ImageBackground,
} from 'react-native';

import Nav from './src/nav';
import Generate from './src/generate';
import ListItems from './src/listitems';
import Inputs from './src/inputs';
import ModalComponent from './src/modal';

import UserProfile from './src/assets/userprofile.jpg';

const App = () => {
  const [hello, setHello] = useState(true);
  const [random, setRandom] = useState([20, 55]);

  useEffect(() => {
    // setTimeout(()=>{
    //   setHello(false)
    // },2000)
  }, []);

  const onAddRandom = () => {
    const randomval = Math.floor(Math.random() * 100) + 1;
    const newState = [...random, randomval];
    setRandom(newState);
  };

  const onItemRemove = position => {
    const newArray = random.filter((item, i) => {
      return position !== i;
    });
    setRandom(newArray);
  };

  return (
    <View style={Styles.mainView}>
      <Nav nameOfApp="Awesome App" />
      <ScrollView style={{width: '100%'}}>
        <ModalComponent />

        {/* <ImageBackground source={UserProfile} style={Styles.userprofile}>
          <Text>Inside text</Text>
        </ImageBackground> */}

        {/* <Image
          // source={UserProfile}
          source={{uri: 'https://picsum.photos/400/400'}}
          style={Styles.userprofile}
          resizeMode="contain"
          onLoadEnd={() => alert('Image loaded')}
        /> */}
        {/* <View style={Styles.textView}>
          <Text style={Styles.text}>Hello From Sujal</Text>
        </View>
        <View style={Styles.textView}>
          <Text style={Styles.text}>Hello From Vivek</Text>
        </View>
        <View style={Styles.textView}>
          <Text style={Styles.text}>Hello From Sumit</Text>
        </View>

        // { hello ?
        //<Text>Hello Everybody</Text>
        //: null
        // }

        <View>
          <Generate add={() => onAddRandom()} />
        </View>
        <View>
          <ListItems items={random} remove={pos => onItemRemove(pos)} />
        </View>
        <Inputs />
        <ActivityIndicator animating={false} />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="large" color="blue" /> */}
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: 'orange',
    alignItems: 'flex-start', // set X axis
    justifyContent: 'flex-start', // set Y axis
  },
  textView: {
    alignItems: 'center', // set x axis
    // justifyContent: 'center', // set Y axis
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 5,
  },

  text: {
    alignItems: 'center',
    fontSize: 20,
    color: 'blue',
    padding: 5,
  },
  userprofile: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
});

export default App;
