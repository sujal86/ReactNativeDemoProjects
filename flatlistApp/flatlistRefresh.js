import React, {useState} from 'react';
import {StyleSheet, View, Text, RefreshControl, FlatList} from 'react-native';

const FlatListRefresh = () => {
  const [Items, setItems] = useState([
    {name: 'Item 1'},
    {name: 'Item 2'},
    // {name: 'Item 3'},
    // {name: 'Item 4'},
    // {name: 'Item 5'},
    // {name: 'Item 6'},
    {name: 'Item 7'},
    {name: 'Item 8'},
    {name: 'Item 9'},
    {name: 'Item 27'},
    {name: 'Item 78'},
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {name: 'Item 69'}]);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <FlatList
      keyExtractor={index => index.toString()}
      data={Items}
      renderItem={({item}) => (
        <View key={item.name} style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 16,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default FlatListRefresh;
