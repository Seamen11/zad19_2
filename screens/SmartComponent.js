import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DumbComponent from './DumbComponent';

const SmartComponent = ({ navigation }) => {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'Андреа', phone: '+39 335 650 5564' },
    { id: '2', name: 'Джон', phone: '+1 555 123 4567' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DumbComponent contact={item} />}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ContactScreen')}
      >
        <Text style={styles.buttonText}>Перейти к контактам</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default SmartComponent;
