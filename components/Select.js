import React from 'react';
import {StyleSheet} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

export default class DropDown extends React.Component {
  state = {
    value: 1,
  };

  handleOnSelect = (index, value) => {
    const {onSelect} = this.props;

    this.setState({value: value});
    onSelect && onSelect(index, value);
  };

  render() {
    const {onSelect, style, ...props} = this.props;
    return (
      <ModalDropdown
        style={[styles.qty, style]}
        isFullWidth={true}
        onSelect={this.handleOnSelect}
        dropdownStyle={styles.dropdown}
        textStyle={styles.textStyle}
        dropdownTextStyle={{paddingLeft: 16, fontSize: 18}}
        {...props}
      />
    );
  }
}

const styles = StyleSheet.create({
  qty: {
    backgroundColor: '#DCDCDC',
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 14.5,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  textStyle: {
    fontSize: 18,
  },
  dropdown: {
    width: '90%',
    marginTop: 8,
    marginLeft: -16,
  },
});
