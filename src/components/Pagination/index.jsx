import React from 'react'
import './Pagination.css'

export default function Pagination() {
  return (
    <div className='pagination--container'>
        <hr className='pagination--hr'/>
        <div className='page--container'>
            <button> 1 </button>
            <button> 2 </button>
            <button> {'>'} </button>
            <button> {'>>'} </button>
        </div>
        
    </div>
  )
}
