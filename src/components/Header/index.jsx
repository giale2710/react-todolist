import React from 'react'
import './Header.css'

export default function Header(props) {
  const [taskData, setTaskData] = React.useState('')
  
  const handleChange = (e) => {
    setTaskData(e.target.value)
    console.log('changed task data: ',taskData)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setTaskData(e.target.value)
    props.onSubmit(taskData)
    console.log('submitted task data: ',taskData)
  }

  return (
    <div className='header--container'>
        <h1 className='header--title'>TO DO LIST APPLICATION</h1>
        <form onSubmit={handleSubmit} class='header--lower'>
                <input type='text' 
                        placeholder='Add a new task in here' 
                        className='header--input' 
                        onChange={handleChange}
                        name='taskData'></input>
                <button type='submit' 
                className='header--submit'> + </button>
            
        </form>
        <div>
        <hr className='header--hr'/>
        </div>
    </div>
  )
}
