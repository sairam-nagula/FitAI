import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Retrieve user data from Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        console.log('User Data:', userDoc.data());
      } else {
        console.log('No user data found!');
      }

      Alert.alert('✅ Login Successful');
      navigation.navigate('Main');
    } catch (error) {
      Alert.alert('❌ Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to FitAI</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text onPress={() => navigation.navigate('SignUp')} style={styles.link}>
        Don't have an account? Sign up
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 },
  link: { color: 'blue', marginTop: 10, textAlign: 'center' },
});