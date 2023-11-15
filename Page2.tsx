// Page2.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Page2 = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // Implement save logic here
    // You may want to generate a unique id for the new student
    const newStudent = { id: Date.now().toString(), name, age, email };
    // Add the new student to the list (you can use context, Redux, etc.)
    // For simplicity, I'll just navigate back to Page1 for now
    navigation.navigate('Page1');
  };

  return (
    <View>
      <Text>Enter Student Data:</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default Page2;
