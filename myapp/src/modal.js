import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, Modal} from 'react-native';

const ModalComponent = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <View>
      <Modal
        visible={modal}
        animationType={'none'}
        onShow={() => alert('Showing Modal')}>
        <View style={{marginTop: 50}}>
          <Text>My Modal Component</Text>
        </View>
        <Button title="Close Modal" onPress={handleModal} />
      </Modal>
      <Button title="Open Modal" onPress={handleModal} />
    </View>
  );
};
const Styles = StyleSheet.create({});

export default ModalComponent;
