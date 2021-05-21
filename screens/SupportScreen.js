import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const SupportScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Support Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
