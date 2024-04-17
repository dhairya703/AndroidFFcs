import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const data = [
  { id: '1', image: 'https://vit.ac.in/system/files/vitmb_0.jpg', text: 'Vit vellore' },
  { id: '2', image: 'https://chennai.vit.ac.in/wp-content/uploads/2020/03/about_banner.jpg', text: 'Vit Chennai' },
  { id: '3', image: 'https://vit.ac.in/system/files/vitmb_0.jpg', text: 'Vit Andhra Pradesh' },
  { id: '4', image: 'https://chennai.vit.ac.in/wp-content/uploads/2020/03/about_banner.jpg', text: 'Vit Bhopal' },
];

const CardGrid = () => {
  const renderCardItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderCardItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Change the number of columns as needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  card: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  text: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CardGrid;
