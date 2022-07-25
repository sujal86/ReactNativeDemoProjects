import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
  Button,
  Image,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

const Home = props => {
  const [DATA, setData] = useState(null);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const getData = () => {
    fetch('https://reqres.in/api/users?page=2', {method: 'GET'})
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson.data);
        console.log(DATA);
        console.log(responseJson);
      });
  };

  const Item = ({item, onPress}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => props.navigation.navigate('UserDetails', item)}>
      <View>
        <View style={styles.headerView}>
          <Image source={{uri: item.avatar}} style={styles.imgs} />
          <Text style={styles.itemText}>
            {' '}
            {item.first_name} {item.last_name}
          </Text>
        </View>
        <View>
          <Text style={styles.itemText}>Contact Me @ {item.email} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    return <Item item={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>API Learning</Text>
        <Button title="Get Data through API" onPress={getData} />
        <View style={styles.flatListView}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            refreshControl={
              <RefreshControl
                refreshing={Refreshing}
                onRefresh={onRefresh}
                colors={['#ff00ff']}
              />
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    // marginTop: 50,
    // marginBottom: 70,
  },
  headerView: {
    alignItems: 'center',
    padding: 15,
  },
  headerText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,
  },
  imgs: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'lightgrey',
  },
  card: {
    margin: 10,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 20,
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 20,
    paddingBottom: 10,
    alignItems: 'center',
  },
  itemText: {
    margin: 10,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  flatListView: {
    marginBottom: 40,
  },
});

export default Home;
