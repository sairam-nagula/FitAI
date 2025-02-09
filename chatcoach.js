import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatCoachScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI-Powered Chat Coach</Text>
      <Text>Chat with your virtual fitness coach here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
