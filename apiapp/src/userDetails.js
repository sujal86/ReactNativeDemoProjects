import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

const UserDetails = props => {
  const route = useRoute();
  const {id, avatar, email, first_name, last_name} = route.params;
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>User Details Screen of ID: {id}</Text>
      </View>
      <TouchableOpacity
        style={styles.card}
        onPress={() => props.navigation.goBack()}>
        <View style={styles.itemView}>
          <View style={styles.headerView}>
            <Image source={{uri: avatar}} style={styles.imgs} />
            <Text style={styles.itemText}>
              {' '}
              {first_name} {last_name}
            </Text>
          </View>
          <View>
            <Text style={styles.itemText}>Contact me @ {email} </Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'default',
    marginBottom: 70,
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
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'lightgrey',
  },
  itemView: {
    backgroundColor: 'black',
    borderRadius: 20,
    overflow: 'hidden',
    paddingBottom: 10,
    alignItems: 'center',
  },
  itemText: {
    margin: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    margin: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 8,
    backgroundColor: 'lightgrey',
    padding: 20,
    borderRadius: 20,
  },
});

export default UserDetails;
