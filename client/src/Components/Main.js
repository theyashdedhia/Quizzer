import './Main.css';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { setUserId } from '../redux/result_reducer';

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()

    function startQuiz(){
      if(inputRef.current?.value){
        dispatch(setUserId(inputRef.current?.value))
      }
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        <ol>
            <li>Rule No 1</li>
            <li>Rule No 2</li>
            <li>Rule No 3</li>
            <li>Rule No 4</li>
            <li>Rule No 5</li>
        </ol>
        <form id='form'>
            <input ref={inputRef} type="text" className='userid' placeholder='Username'/>
        </form>

        <div className='start'>
          <Link className='btn' to={'quiz'} onClick= {startQuiz} >Start Quiz</Link>
        </div>
    </div>
  )
}
