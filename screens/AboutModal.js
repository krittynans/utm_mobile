import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import {Select, MultiSelect} from '../components/';
import Modal from 'react-native-modal';

const InsItems = [
  {
    id: 'MARINE',
    name: 'Marine',
  },
  {
    id: 'OIL_GAS',
    name: 'Oil & Gas',
  },
  {
    id: 'PIPELINE',
    name: 'Pipeline',
  },
  {
    id: 'CHEM',
    name: 'Chemical & Petroleum',
  },
  {
    id: 'NUCLEAR',
    name: 'Nuclear Energy',
  },
  {
    id: 'AEROSPACE',
    name: 'Aerospace',
  },
  {
    id: 'CONSTRUCTION',
    name: 'Construction',
  },
  {
    id: 'INFRA',
    name: 'Infrastructure',
  },
  {
    id: 'RAILWAY',
    name: 'Railway',
  },
  {
    id: 'POWERGEN',
    name: 'Power Generation',
  },
  {
    id: 'AMUSEMENT',
    name: 'Amusement',
  },
  {
    id: 'AUTOMOTIVE',
    name: 'Automotive',
  },
  {
    id: 'NONE',
    name: 'None',
  },
];

const NDTItems = [
  {
    id: 'TM',
    name: '(TM) Thickness Measurement',
  },
  {
    id: 'UT',
    name: '(UT) Ultrasonic',
  },
  {
    id: 'RT',
    name: '(RT) Radiography',
  },
  {
    id: 'PT',
    name: '(PT) Dye Penetrant',
  },
  {
    id: 'MT',
    name: '(MT) Magnetic Particle',
  },
  {
    id: 'ET',
    name: '(ET) Eddy Current',
  },
  {
    id: 'AE',
    name: '(AE) Acoustic Emission',
  },
  {
    id: 'LT',
    name: '(LT) Leak Testing',
  },
  {
    id: 'OTHER',
    name: 'Other',
  },
];

const About = props => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    props.toggle(isModalVisible);
  };

  const Views = [
    {
      id: 'industrySection',
      title: 'In which industry(ies) do you practice NDT surveys',
      item: InsItems,
    },
    {
      id: 'NDTSection',
      title: 'Which NDT techniques do you practice?',
      item: NDTItems,
    },
  ];

  return (
    <Modal propagateSwipe={true} isVisible={props.isVisible}>
      <View style={{flex: 1}}>
        <ScrollView nestedScrollEnabled={true}>
          <FlatList
            data={Views}
            renderItem={({item, index}) => (
              <View
                key={index}
                style={(styles.firstContainer, {zIndex: 99 - index})}>
                <MultiSelect selectedTitle={item.title} items={item.item} />
              </View>
            )}
          />
          <View>
            <Text style={styles.titleText}>What's your job title?</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder={"What's your job title?"}
            />
          </View>
          <View>
            <Text style={styles.titleText}>What's your team size?</Text>
            <Select
              defaultIndex={1}
              options={[
                '1',
                '2-10',
                '10-30',
                '30-60',
                '60-100',
                'More than 100',
              ]}
              style={styles.selectStyle}
            />
          </View>
        </ScrollView>
        <Button title="Hide modal" onPress={toggleModal} />
      </View>
    </Modal>
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
  firstContainer: {
    flex: 1,
    zIndex: 90,
    position: 'relative',
    alignItems: 'flex-start',
  },
  selectStyle: {
    backgroundColor: 'white',
    marginTop: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2,
  },
  formLabel: {
    fontSize: 20,
    color: '#fff',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  inputStyle: {
    marginTop: 20,
    height: 55,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default About;
