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
        
        <TaskList
          key={999}
          name='Eg: Wake up'
          markedDone={false}
       />
        {tasks.map((task,index) => (
        <TaskList
          key={index}
          name={task}
          markedDone={false}
          />
        ))}
        
      <Pagination/>
      </div>
    </div>
  );
}

export default App;
