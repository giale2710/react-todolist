import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header--container'>
        <h1 className='header--title'>TO DO LIST APPLICATION</h1>
        <div class='header--lower'>
            
                <input type='text' placeholder='Add a new task in here' className='header--input'></input>
                <button type='submit' className='header--submit'> + </button>
            
        </div>
        <div>
        <hr className='header--hr'/>
        </div>
        
    </div>
  )
}
