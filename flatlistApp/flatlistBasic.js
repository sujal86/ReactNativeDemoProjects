import React from 'react';
import {
  Text,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const DATA = [
  {
    id: 0,
    title: 'First Item',
  },
  {
    id: 1,
    title: 'Second Item',
  },
  {
    id: 2,
    title: 'Third Item',
  },
  {
    id: 3,
    title: 'Fourth Item',
  },
];

const Item = ({id, title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      {id} {title}
    </Text>
  </View>
);

const BasicFlatList = () => {
  const renderItem = ({item}) => <Item id={item.id} title={item.title} />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>FlatList in React Native</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  headerView: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: 'white',
    padding: 12,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});
export default BasicFlatList;
