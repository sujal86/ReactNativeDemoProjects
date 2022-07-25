import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import Details from './details';

const ViewNames = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {names} = route.params;
  return (
    <>
      <View>
        <Text>Your Guest List</Text>
      </View>
      <View style={styles.guestName}>
        {names.map(name => (
          <Text key={name}>{name.split(',').join('\n')}</Text>
        ))}
      </View>
      <View>
        <Button
          title="Go to Details screen"
          onPress={() => navigation.navigate(Details)}
        />
      </View>
    </>
  );
};

export default ViewNames;

const styles = StyleSheet.create({
  guestName: {
    alignItem: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
