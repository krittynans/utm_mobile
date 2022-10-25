import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
  {
    title: 'OBSection',
    data: [
      {
        description: 'Add / Edit\n a marker',
        gesture: 'gesture-tap',
      },
      {
        description: 'Move / Delete\n a marker',
        gesture: 'gesture-tap-hold',
      },
      {
        description: 'Zoom In / Zoom Out',
        gesture: 'gesture-pinch',
      },
    ],
  },
];

const Item = data => (
  <View
    style={[
      styles.container,
      {
        flexDirection: 'row',
      },
    ]}>
    <View style={[styles.boxStart, {backgroundColor: '#f0f0f0'}]}>
      <Icon size={65} color="#6e6e6e" name={data.item.gesture} />
    </View>
    <View style={[styles.boxEnd, {backgroundColor: '#f0f0f0'}]}>
      <Text style={styles.text}>{data.item.description}</Text>
    </View>
  </View>
);

const OnboardingModal = props => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    props.toggle(isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Modal propagateSwipe={true} isVisible={props.isVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingTop: 20,
            paddingBottom: 30,
          }}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => <Item item={item} />}
          />
          <TouchableOpacity onPress={toggleModal}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>OK, Got it !</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxStart: {
    width: '30%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  boxEnd: {
    width: '70%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: '#6e6e6e',
  },
  button: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default OnboardingModal;
