import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {generate} from 'react-native-image-generator';

const MarkerPanel = () => {
  const [result, setResult] = useState();

  const generateImage = useCallback(async () => {
    const r = await generate(
      [
        {
          uri: 'grid',
          width: 300,
          height: 300,
          x: 0,
          y: 0,
        },
        {
          text: '1',
          fontSize: 11,
          width: 300,
          height: 300,
          x: 50,
          y: 50,
          color: [255, 0, 0, 1.0],
        },
        {
          text: '2',
          fontSize: 11,
          width: 300,
          height: 300,
          x: 150,
          y: 150,
          color: [255, 0, 0, 1.0],
        },
        {
          text: '3',
          fontSize: 11,
          width: 300,
          height: 300,
          x: 100,
          y: 100,
          color: [255, 0, 0, 1.0],
        },
        {
          text: '4',
          fontSize: 11,
          width: 300,
          height: 300,
          x: 10,
          y: 100,
          color: [255, 0, 0, 1.0],
        },
      ],
      {
        filename: 'test.png',
        width: 200,
        height: 300,
        base64: false,
      },
    );

    setResult(r);
  }, []);

  useEffect(() => {
    generateImage();
    console.log(result);
  }, [generateImage]);

  return (
    <View style={styles.container}>
      <Image
        source={{uri: result}}
        style={{width: 200, height: 300}}
        onError={e => console.error(e.nativeEvent)}
      />
      <Text>Result: {result}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

export default MarkerPanel;
