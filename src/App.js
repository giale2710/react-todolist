import './App.css';
import Header from './components/Header'
import TaskList from './components/TaskList';
import Pagination from './components/Pagination'

function App() {
  return (
    <div className="App">
      <div className='div--container'>
      <Header />

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
       markedDone={true}
       />

      <Pagination/>
      </div>
    </div>
  );
}

export default App;
