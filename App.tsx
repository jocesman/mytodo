import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#6f6f6f'
  },
  container:{
    paddingTop:50,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(239, 238, 245, 1)',
  },
  text:{
    fontSize: 16,
    color: '#6f6f6f',
  },
  textDone:{
    fontSize: 16,
    color: '#6f6f6f',
    textDecorationLine: 'line-through',
  },
  whiteText:{
    fontSize: 16,
    color: '#fff'
  },
  textInput:{
    borderColor: '#6f6f6f',
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.6,
    borderRadius: 6,
    paddingLeft: 15,
  },
  inputContainer:{
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButtom:{
    backgroundColor: '#2cbaff',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.25,
    borderRadius: 6,
    },
    scrollContainer:{
      marginTop: 20
    },
    itemContainer:{
      paddingVertical: 20,
      borderBottomColor: '#100f61ff',
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    removeButtom:{
      backgroundColor: '#f33d3d',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
      height: 40,
      width: Dimensions.get('screen').width * 0.25,
      paddingHorizontal: 15,
    }
});

const task = [
  {
    id: 1,
    title: 'Hacer un video de mi vida',
    date: new Date(),
    done: false
  },
  {
    id: 2,
    title: 'Hacer un post de mi blog',
    date: new Date(),
    done: true
  },
  { 
    id: 3,
    title: 'Planear mis actividades',
    date: new Date(),
    done: false
  },
  {
    id: 4,
    title: 'Hacer una presentación de mi proyecto',
    date: new Date(),
    done: false
  },
  {
    id: 5,
    title: 'Hacer una charla en mi ciudad',
    date: new Date(),
    done: false
  },
  {
    id: 6,
    title: 'Hacer un curso de React Native',
    date: new Date(),
    done: false
  },
  {
    id: 7,
    title: 'Hacer un curso de React',
    date: new Date(),
    done: false
  },
  {
    id: 8,
    title: 'Hacer un curso de Node.js',
    date: new Date(),
    done: false
  },
  {
    id: 9,
    title: 'Hacer un curso de TypeScript',
    date: new Date(),
    done: false
  },
  {
    id: 10,
    title: 'Hacer un curso de JavaScript',
    date: new Date(),
    done: false
  }
]

interface Task  {
  id: number,
  title: string,
  date: Date,
  done: boolean
}


export default function App() { 

  const renderItem = ({item} : {item: Task}) => {
    return <View style={styles.itemContainer}>
                <TouchableOpacity>
                  <Text style={styles.text}>Tarea # {item.id}</Text>
                  <Text style={item.done ? styles.textDone : styles.text}>{item.title}</Text>
                  <Text style={item.done ? styles.textDone : styles.text}>{item.date.toLocaleDateString()}</Text>
                  <Text style={item.done ? styles.textDone : styles.text}>{item.done ? 'Hecho' : 'Pendiente'}</Text>
                </TouchableOpacity>
                {item.done && 
                    <TouchableOpacity style={styles.removeButtom}>
                      <Text style={styles.whiteText}>Eliminar</Text>
                    </TouchableOpacity>
                }
            </View>
          }; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis tareas por hacer</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Escribe aquí tu tarea" />
        <TouchableOpacity style={styles.addButtom}>
          <Text style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList 
        data = {task} 
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 200}} />
      </View>
    </View>
  );
}