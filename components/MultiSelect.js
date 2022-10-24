import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import MultiSelect from 'react-native-multiple-select';

export default class MultiSelector extends Component {
  state = {
    selectedItems: [],
  };

  onSelectedItemsChange = selectedItems => {
    this.setState({selectedItems});
  };

  render() {
    const {selectedItems} = this.state;
    const {selectedTitle, ...props} = this.props;

    return (
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.titleText}>{selectedTitle}</Text>
        <View style={styles.MainContainer}>
          <MultiSelect
            hideTags
            hideDropdown={true}
            uniqueKey="id"
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Pick an items"
            searchInputPlaceholderText="Search Items..."
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor="#CCC"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            submitButtonColor="#008000"
            submitButtonText="Submit"
            styleDropdownMenu={styles.dropdown}
            searchInputStyle={styles.dropdown}
            styleTextDropdownSelected={styles.dropdownText}
            styleTextDropdown={styles.dropdownText}
            styleRowList={styles.dropdownRow}
            itemFontSize={18}
            {...props}
          />
          <View />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    padding: 12,
    position: 'relative',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  dropdown: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    height: 50,
    paddingHorizontal: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  dropdownRow: {
    height: 40,
  },
  dropdownText: {
    flex: 1,
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    marginHorizontal: 8,
  },
});
