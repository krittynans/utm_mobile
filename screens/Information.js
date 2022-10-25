import React, {useState} from 'react';
import {StyleSheet, View, Button, SafeAreaView} from 'react-native';
import AboutModal from './AboutModal';
import OnboardingModal from './OnboardingModal';

const Information = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSecondModalVisible, setSecondModalVisible] = useState(false);
  const toggleFirstModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleSecondModal = () => {
    setSecondModalVisible(!isSecondModalVisible);
  };

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        <Button title="First Task Modal" onPress={toggleFirstModal} />
        <AboutModal toggle={toggleFirstModal} isVisible={isModalVisible} />
        <Button title="Second Task Modal" onPress={toggleSecondModal} />
        <OnboardingModal
          toggle={toggleSecondModal}
          isVisible={isSecondModalVisible}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#356859',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default Information;
