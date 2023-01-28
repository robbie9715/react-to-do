import React, { useEffect } from "react";
import {useState} from 'react';
// import submite from '../../src/icon/submite.svg'
import submite from '../../src/icon/register.png'


function TodoForm({addTodo, resetTodo, ekey, num, resets}){

    const[value, setValue]=useState("");
    const[time, setTime]=useState("");

 console.log(ekey);

    useEffect(()=>{
        setValue(resets.text);
        setTime(resets.date);
    },[resets.text])

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!value || !time) {
            alert('please input the text or time');
            return;
        }   else{
            if(ekey)
            {
                resetTodo(value, time, num);         
            }
            else{
                addTodo(value,time);
            }
        }
        setValue("");
        setTime("");       
    }

    console.log(value);


        
    
    return(
        <div>
            <form className="inputField">
                <input
                    type="text"
                    className="input"
                    value={value}
                    onChange={e=>setValue(e.target.value)}

                />                
            </form>
            <div className="tb">
                <input 
                    type="date" 
                    className="settime" 
                    value={time} 
                    onChange={e=>setTime(e.target.value)}
                />
                
               
                <img className="Subbtn1" src={submite} onClick={handleSubmit} alt="aaa"></img>
                {/* <img className="Subbtn1" src={submite} onClick={reset} alt="aaa"></img> */}
            </div>
        </div>
    )
}

export default TodoForm