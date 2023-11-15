// Page3.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Page3 = ({ route, navigation }) => {
  const { id } = route.params;
  // Fetch the student data based on the id (you may use context, Redux, etc.)
  const [student, setStudent] = useState({
    id: '1', // Initialize with default values
    name: '',
    age: '',
    email: '',
  });

  // Fetch the student data when the component mounts
  useEffect(() => {
    // Fetch student data based on the id and set it to the state
    // Replace the following line with your data fetching logic
    setStudent(/* Fetch student data based on the id */);
  }, [id]);

  const handleSaveChanges = () => {
    // Implement save changes logic here
    // Update the existing student data (you can use context, Redux, etc.)
    // For simplicity, I'll just navigate back to Page1 for now
    navigation.navigate('Page1');
  };

  return (
    <View>
      <Text>Edit Student Data:</Text>
      <TextInput
        placeholder="Name"
        value={student.name}
        onChangeText={(text) => setStudent({ ...student, name: text })}
      />
      <TextInput
        placeholder="Age"
        value={student.age}
        onChangeText={(text) => setStudent({ ...student, age: text })}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Email"
        value={student.email}
        onChangeText={(text) => setStudent({ ...student, email: text })}
        keyboardType="email-address"
      />
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

export default Page3;
