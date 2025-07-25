import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';

import styles from './Styles';
import RenderItem from './RenderItem';
import AsyncStorage from '@react-native-async-storage/async-storage';


export interface Task  {
  title: string,
  date: Date,
  done: boolean
}


export default function App() { 

  const [text, setText] = useState(''); 
  const [tasks, setTasks] = useState<Task[]>([]);

  const storeData = async (value: Task[]) => {
  try {
    await AsyncStorage.setItem('myTodo-tasks', JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('myTodo-tasks');
    if (value !== null) {
      const tasksLocal = JSON.parse(value);
      setTasks(tasksLocal);
    }
  } catch (e) {
    // error reading value
  }
};

  useEffect(() => {
    getData()
  }, []);

  const addTask  = () => {
    const tmp = [...tasks];
    const newTask: Task = {
      title: text,
      date: new Date(),
      done: false
    };
    tmp.push(newTask);
    setTasks(tmp);
    storeData(tmp);
    setText(''); 
  };

  const markDone = (task: Task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex(t => t.title === task.title);
    tmp[index].done = !task.done;
    setTasks(tmp);
    storeData(tmp);
  };

  const deleteFunction = (task: Task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex(t => t.title === task.title);
    tmp.splice(index, 1);
    setTasks(tmp);
    storeData(tmp);
  };
    

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis tareas por hacer</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Escribe aquí tu tarea" 
          onChangeText={(t: string) => setText(t)}
          value={text}
          />
        <TouchableOpacity onPress={addTask} style={styles.addButtom}>
          <Text style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList 
        data = {tasks} 
        renderItem={({item}) => (
          <RenderItem 
          item={item} 
          deleteFunction={deleteFunction} 
          markDone={markDone} />
          )}
        contentContainerStyle={{ paddingBottom: 200}} />
      </View>
    </View>
  );
}