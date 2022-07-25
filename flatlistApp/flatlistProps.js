import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'First Item',
  },
  {
    id: 2,
    title: 'Second Item',
  },
  {
    id: 3,
    title: 'Third Item',
  },
  {
    id: 4,
    title: 'Fourth Item',
  },
  {
    id: 5,
    title: 'Fifth Item',
  },
  {
    id: 6,
    title: 'Sixth Item',
  },
  {
    id: 7,
    title: 'Seventh Item',
  },
  {
    id: 8,
    title: 'Eighth Item',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>
      {item.id} {item.title}
    </Text>
  </TouchableOpacity>
);

const FlatListProperties = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? 'green' : 'white';
    const color = item.id === selectedId ? 'white' : 'blue';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>FlatList in React Native</Text>
      </View>
      <FlatList
        // horizontal
        numColumns={2}
        // inverted
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
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
export default FlatListProperties;
