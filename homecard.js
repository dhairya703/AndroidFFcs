import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfV1ocM6ikvU0au5y0eY6Cc6jClkYnw0JhZt3N8PPabw&s' }} // Corrected source format
        style={styles.logo}
        resizeMode="contain" 
      />
      <Text style={styles.title}>Welcome to Vit!</Text>
      <Text style={styles.subtitle}>A place of Great learning and technical environment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center', 
    justifyContent: 'center', 
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, 
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeCard;
