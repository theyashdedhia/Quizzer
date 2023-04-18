import React from 'react'
import './Result.css'
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux'
import { attempts_Number, earnedPoints_Number, flagResult } from '../helper/helper'

import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'
import { usePublishResult } from '../hooks/setResult'

export default function Result() {


  const dispatch = useDispatch();
  const {questions: {queue, answers}, result: {result, userId}} = useSelector(state => state)


  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnedPoints = earnedPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnedPoints)

  usePublishResult({result, username : userId, attempts, points: earnedPoints, achieved: flag?"Passed":"Failed"})
  
  function onRestart(){
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <div className='result flex-center'>
        <div className='flex'>
          <span>Username</span>
          <span className='bold'>JSR</span>
        </div>
        <div className='flex'>
          <span>Total Quiz Points: </span>
          <span className='bold'>{totalPoints || 0}</span>
        </div>
        <div className='flex'>
          <span>Total Questionss: </span>
          <span className='bold'>{queue.length || 0}</span>
        </div>
        <div className='flex'>
          <span>Total Attempts: </span>
          <span className='bold'>{attempts || 0}</span>
        </div>
        <div className='flex'>
          <span>Total Earned Points: </span>
          <span className='bold'>{earnedPoints || 0}</span>
        </div>
        <div className='flex'>
          <span>Quiz Result: </span>
          <span style={{color: `${flag? 'green': 'red'}`}} className='bold'>{flag? "Passed": "Failed"}</span>
        </div>
      </div>

      <div className='start'>
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
      </div>

      <ResultTable></ResultTable>
    </div>
  )
}
