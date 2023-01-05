import './App.css';
import Header from './components/Header'
import TaskList from './components/TaskList';
import Pagination from './components/Pagination'
import React from 'react';

function App() {

  // const [task, setTask] = React.useState('')
  const [tasks, setTasks] = React.useState([])

  const handleClick = (data) => {
    setTasks(prev=> [...prev, data])
    // setTask('')
    console.log('tasks from appjs: ', tasks)
  }

  return (
    <div className="App">
      <div className='div--container'>
        <Header onSubmit={handleClick}/>
        
        {tasks.map((task,index) => (
        <TaskList
          key={index}
          name={task}
          markedDone={false}
          />
        ))}
        
        <TaskList
       name='Wake up'
       markedDone={false}
       />
        <TaskList
       name='Commute'
       markedDone={false}
       />
        <TaskList
       name='Working'
       markedDone={false}
       />
        <TaskList
       name='Meeting with clients'
       markedDone={false}
       />
        <TaskList
       name='Lunch Break'
       markedDone={false}
       />
        <TaskList
       name='Afternoon Shift'
       markedDone={false}
       />
        <TaskList
       name='Go home'
       markedDone={false}
       />
  
      <Pagination/>
      </div>
    </div>
  );
}

export default App;
