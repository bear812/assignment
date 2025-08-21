import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const addTodo = (text: string) => {
  setTodos([...todos, text]);
};

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    };

return (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>My To-Do List</Text>
    <TodoInput onAdd={addTodo} />
    <TodoList items={todos} onDelete={deleteTodo} />
  </SafeAreaView>
);

}const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#f6edfcff",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});