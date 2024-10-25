import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DumbComponent = ({ contact }) => {
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.phone}>{contact.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    color: '#888',
  },
});

export default DumbComponent;
