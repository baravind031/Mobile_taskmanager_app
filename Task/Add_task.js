// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
// // import Axios from 'axios';
// // import * as Notifications from 'expo-notifications';

// export default function App() {
  
//   const [tasks, setTasks] = useState([" "]);
//   const [title, setTitle] = useState(' ');
//   const [description, setDescription] = useState('');
//   const [dueDate, setDueDate] = useState('');
//   const [editTaskId, setEditTaskId] = useState(null);

  


// {/* <view style ={{}}></view> */}

//   const addTask = () => {
//     const newTask = {
//       id: tasks.length + 1,
//       title,
//       description,
//       dueDate,
       
//       completed: false,
//     };
//     // Axios.post('http://localhost:3000/insert', {
//     //   title:title,
//     //   description:description,
//     //   dueDate:dueDate
//     // })

//     setTasks([...tasks, newTask]);
//     setTitle('');
//     setDescription('');
//     setDueDate('');
    
//   };

//   const deleteTask = (taskId) => {
//     const updatedTasks = tasks.filter((task) => task.id !== taskId);
//     setTasks(updatedTasks);
//   };

//   const editTask = (taskId) => {
//     const taskToEdit = tasks.find((task) => task.id === taskId);
//     if (taskToEdit) {
//       setTitle(taskToEdit.title);
//       setDescription(taskToEdit.description);
//       setDueDate(taskToEdit.dueDate);
//       setEditTaskId(taskId);
//     }
//   };

//   // const updateTask = () => {
//   //   const updatedTasks = tasks.map((task) => {
//   //     if (task.id === editTaskId) {
//   //       return { ...task, title, description, dueDate };
//   //     }
//   //     return task;
//   //   });

//     setTasks(updatedTasks);
//     setTitle('');
//     setDescription('');
//     setDueDate('');
//     setEditTaskId(null);
//   };

//   const markTaskAsCompleted = (taskId) => {
//     const updatedTasks = tasks.map((task) => {
//       if (task.id === taskId) {
//         return { ...task, completed: true };
//       }
//       return task;
//     });

//     setTasks(updatedTasks);
//   };

//   return (
//     <View style={styles.container} >
//       <Text> Personal task management tool</Text> <br/><br/>
     
//       <Text>Add Task</Text> <br/>
//       <label>Title :</label>
//       <br/>
//       <TextInput
//         placeholder="Enter Descriptions"
//         value={title}
//         onChangeText={(text) => setTitle(text)}
//       />
//       <br/>
       
//       <TextInput
//         placeholder="Enter Descriptions"
//         value={description}
//         onChangeText={(text) => setDescription(text)}
//       />
//       <br/>
       
      
//       <TextInput
//         placeholder="Enter Due Dates"
//         value={dueDate}
//         onChangeText={(text) => setDueDate(text)}
//       /> 
//        <Button
//             title="edit"
//             onPress={() => editTask(task.id)}
//             disabled={task.completed}
//           />
//         {/* <Button
//             title="Delete"
//             onPress={() => deleteTask(task.id)}
//             disabled={task.completed}
//           /> */}
//       <Button title="Add" onPress={addTask}/>
// <br/>


// {/* unique key prop is required by React to efficiently update the list of items. */}
//       <Text>Hey..! Hear is your Task :</Text>
//       {tasks.map((task) => (
//         <View key={task.id}>  
//           <Text>{task.title}</Text>
//           <Text>{task.description}</Text>
//           <Text>{task.dueDate}</Text>
        
//           {!task.completed && (
//             <Button
//               title="Mark as Completed"
//               onPress={() => markTaskAsCompleted(task.id)}
//             />
//           )}
//         </View>
//       ))}
//     </View>
    
    
//   );

  
// }

// const styles = StyleSheet.create({
//     container: {
//       margin:"10rem",

//       // flex: 1,
//       backgroundColor: '#fff',
//       // alignItems: 'center',
//       justifyContent: 'center',
//       // padding:"10px 10px",
//     },
//     // textarea:{
//     //    border:"",
//     // },
//     // button:{
//     //     padding:"20px 20px",
//     // }
//   });
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
// import Axios from 'axios';
// import * as Notifications from 'expo-notifications';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      dueDate,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    setDueDate('');
  };
  // Axios.post('http://localhost:3000/insert', {
    //   title:title,
    //   description:description,
    //   dueDate:dueDate
    // })

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDueDate(taskToEdit.dueDate);
      setEditTaskId(taskId);
    }
  };

  const updateTask = () => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === editTaskId) {
        return { ...task, title, description, dueDate };
      }
      return task;
    });

    setTasks(updatedTasks);
    setTitle('');
    setDescription('');
    setDueDate('');
    setEditTaskId(null);
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
    <View style={styles.container}>
      <Text>Personal task management tool</Text>
      <Text>Add Task</Text><br/>
      {/* <Text>Title:</Text> */}
      <TextInput
        placeholder="Enter Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      /><br/>
      
      <TextInput
        placeholder="Enter Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      /><br/>
       
      <TextInput
        placeholder="Enter Due Date"
        value={dueDate}
        onChangeText={(text) => setDueDate(text)}
      />

      {editTaskId ? (
        <>
          <Button title="Update" onPress={updateTask} />
          <Button title="Cancel" onPress={() => setEditTaskId(null)} />
        </>
      ) : (
        <Button title="Add" onPress={addTask} />
      )}

      <Text>Hey..! Here are your tasks:</Text>
      {tasks.map((task) => (
        <View key={task.id}>
          <Text>{task.title}</Text>
          <Text>{task.description}</Text>
          <Text>{task.dueDate}</Text>
          {!task.completed && (
            <>
              <Button
                title="Mark as Completed"
                onPress={() => markTaskAsCompleted(task.id)}
              />
              <Button title="Edit" onPress={() => editTask(task.id)} />
            </>
          )}
          <Button title="Delete" onPress={() => deleteTask(task.id)} />
        </View>
      ))}
    </View>
  );
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
 