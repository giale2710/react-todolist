import React from 'react'
import './Tasklist.css'

export default function TaskList(props) {
    const [taskStatus, setTaskStatus] = React.useState(props.markedDone)
    const [isShown, setIsShown] = React.useState(true)

    function toggleMarkedDone() {
        setTaskStatus(prevTaskStatus => !prevTaskStatus)}
    function toggleIsShown () {
        setIsShown(prevIsShown => !prevIsShown)
    }

    console.log(taskStatus)
    
    return (
        isShown && <div className='tasklist--container'>
        <div className='tasklist--taskcontainer'>
            <div className=
                {taskStatus ? 
                "tasklist--task   green" : 
                "tasklist--task"} 
                >{props.name}</div>
            <div className='tasklist--buttons'>
                {!taskStatus && <button className='button--markDone' onClick={toggleMarkedDone}> ✓ </button>}
                <button className='button--deleteTask' onClick={toggleIsShown}> X </button>
            </div>
        </div>
        <hr className='tasklist--hr' />
    </div>
  )
}
