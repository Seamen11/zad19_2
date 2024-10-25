import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Button, Icon } from 'react-native-elements';

const ContactScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="xlarge"
        source={{
          uri: 'https://example.com/profile-photo.jpg',
        }}
        containerStyle={styles.avatar}
      />
      <Text style={styles.name}>Андреа</Text>
      <Text style={styles.phone}>Мобильный +39 335 650 5564</Text>

      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Icon name="call" type="ionicon" size={40} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
          <Icon name="chatbubbles" type="ionicon" size={40} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="videocam" type="ionicon" size={40} color="darkblue" />
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.sectionButton}>
          <Text style={styles.buttonText}>Журнал</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionButton}>
          <Text style={styles.buttonText}>Место хранения</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  avatar: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  phone: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 30,
  },
  sectionContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  sectionButton: {
    width: '45%',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ContactScreen;
