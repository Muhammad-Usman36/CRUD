// Page1.js
import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const Page1 = ({ navigation }) => {
  const [students, setStudents] = useState([
    { id: '1', name: 'John', age: 25, email: 'john@example.com' },
    { id: '2', name: 'Jane', age: 22, email: 'jane@example.com' },
    // Add more students as needed
  ]);

  const handleDelete = (id) => {
    // Implement delete logic here
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const handleEdit = (id) => {
    // Navigate to Page3 for editing
    navigation.navigate('Page3', { id });
  };

  return (
    <View>
      <Text>List of Students:</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{`Name: ${item.name}, Age: ${item.age}, Email: ${item.email}`}</Text>
            <Button title="Edit" onPress={() => handleEdit(item.id)} />
            <Button title="Delete" onPress={() => handleDelete(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default Page1;
