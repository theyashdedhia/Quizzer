import React, { useState } from 'react'
import Questions from './Questions'

import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion'
import { PushAnswer } from '../hooks/setResult'

import {useSelector, useDispatch} from 'react-redux'

import {Navigate} from 'react-router-dom'

export default function Quiz() {

  const [check, setChecked] = useState(undefined);
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  
  function onNext(){
    if(state.questions.trace < state.questions.queue.length){
      dispatch(MoveNextQuestion());
      
      if(state.result.result.length <= state.questions.trace){
        dispatch(PushAnswer(check))
      }
    }

    setChecked(undefined)
  }
  function onPrev(){
    if(state.questions.trace > 0){
      dispatch(MovePrevQuestion())
    }
  }

  function onChecked(check){
    setChecked(check)
    // console.log(check)
  }

  if(state.result.result.length && state.result.result.length >= state.questions.queue.length){
    return <Navigate to={'/result'} replace={true}></Navigate>
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <Questions onChecked = {onChecked} />

      <div className='grid'>
        {state.questions.trace > 0? <button className='btn prev' onClick={onPrev}>Prev</button>: <div></div>}
        
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}
