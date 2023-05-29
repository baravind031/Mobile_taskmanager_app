// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function App() {
  
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');


<view style ={{}}></view>

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      dueDate,
      priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('');
  };

  const markTaskAsCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container} >
      {/* <Text>First Screen</Text> */}
      <Text>Add Task</Text> <br/>
      <label>Title :</label>
      <br/>
      <TextInput
        placeholder="Enter your Titles"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <br/>
      <label>Descriptions :</label>
      <br/>
      <TextInput
        placeholder="Enter Descriptions"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <br/>
      <label>Due Dates :</label>
      <br/>
      <TextInput
        placeholder="Enter Due Dates"
        value={dueDate}
        onChangeText={(text) => setDueDate(text)}
      /> 
      <br/>
      <label>Priority :</label>
      <br/>
     
      <TextInput
        placeholder="Enter priority levels."
        value={priority}
        onChangeText={(text) => setPriority(text)}
      />
      <Button title="Add" onPress={addTask}/>
<br/>
      <Text>Hey..! Hear is your Task :</Text>
      {tasks.map((task) => (
        <View key={task.id}>  
          <Text>{task.title}</Text>
          <Text>{task.description}</Text>
          <Text>{task.dueDate}</Text>
          <Text>{task.priority}</Text>
          {!task.completed && (
            <Button
              title="Mark as Completed"
              onPress={() => markTaskAsCompleted(task.id)}
            />
          )}
        </View>
      ))}
    </View>
    
    
  );
  // return (
  //   <View style={styles.container}>
  //     <ScrollView>
  //       <View>
  //         {persons.map((person) => {
  //           return (
  //             <View>
  //               <Text style={styles.item}>{person.name}</Text>
  //             </View>
  //           );
  //         })}
  //       </View>
  //     </ScrollView>
  //   </View>
  // );
}

const styles = StyleSheet.create({
    container: {
      margin:"10rem",

      // flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      justifyContent: 'center',
      // padding:"10px 10px",
    },
    // textarea:{
    //    border:"",
    // },
    // button:{
    //     padding:"20px 20px",
    // }
  });