import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppBar = () => (
  <SafeAreaView style={styles.container}>
    <Appbar style={styles.top}>
      <Appbar.Content
        title="VIT" // Add "VIT" text
        titleStyle={styles.title} // Style for "VIT" text
      />
      <Appbar.Action
        icon="bell"
        onPress={() => console.log('Pressed label')}
        color="white"
        style={styles.action}
      />
      <Appbar.Action
        icon="share"
        onPress={() => console.log('Pressed delete')}
        color="white"
        style={styles.action}
      />
    </Appbar>
  </SafeAreaView>
);

export default AppBar;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
  },
  top: {
    position: 'absolute', 
    left: 0,
    right: 0,
    top: 0, 
    backgroundColor: 'blue',
  },
  action: {
    marginRight: 10,
  },
  title: {
    color:'white',
    fontWeight: 'bold', // Make the title bold
    fontSize: 30, // Adjust the font size if needed
  },
});
