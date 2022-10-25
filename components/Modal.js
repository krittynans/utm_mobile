import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';

export default class ModalPanel extends React.Component {
  onToggleModal = selected => {
    const [isModalVisible, setModalVisible] = useState(false);
  };
  render() {
    const {toggleVisible, toggleModal} = this.props;
    return (
      <View style={{flex: 1}}>
        <Modal isVisible={toggleVisible}>
          <View style={{flex: 1}}>
            {this.props.children}
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}
