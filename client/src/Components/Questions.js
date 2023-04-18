import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { useFetchQuestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setResult';

export default function Questions({onChecked}) {

    const [checked, setChecked] = useState(undefined);
    const {trace} = useSelector(state => state.questions)
    const {result} = useSelector(state => state.result)
    const [{isLoading, apiData, serverError}] = useFetchQuestion();
   

    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(updateResult({trace, checked}))
    })

    function onSelect(i){
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({trace, checked}))
    }


    if(isLoading){
        return <h3 className='text-light'>isLoading</h3>
    }
    if(serverError){
        return <h3 className='text-light'>{serverError || 'unknown error'}</h3>
    }

  return (
    <div className='questions'>
        <h2 className='text-light'>{questions?.question}</h2>

        <ul key={questions?.id}>
            {
                questions?.options.map((ques, index) =>(
                <li key={index}>
                    <input 
                    type='radio'
                    value={false}
                    name = 'options'
                    id={`q${index}-option`}
                    onChange={() => onSelect(index)}
                    />
                    <label htmlFor={`q${index}-option`} className='text-primary'>{ques}</label>
                    <div className={`check ${result[trace] === index? 'checked': ''}`}></div>
                </li>
                ))
            }
            
        </ul>

    </div>


  )
}
