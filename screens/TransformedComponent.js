import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransformedComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Transform Me!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    transform: [{ rotate: '45deg' }, { scale: 1.2 }],
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default TransformedComponent;
