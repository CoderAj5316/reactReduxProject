import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import "./App.css"
import NavBar from './NavBar';
// import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

const App = () =>
{
  const amount=useSelector(state=>state.amount);
  const dispactch=useDispatch();
  const [value,setValue]=useState(0);

  const increament=(e)=>
    {
        e.preventDefault();
        setValue(value+1);
    }

    const decreament=(e)=>
    {
        e.preventDefault();
        setValue(value-1);
    }

  return (
    <>
    <NavBar />
      <div className='mainDiv'>
      <h1>Increament/Decreament Counter</h1>
      <h4>Using React & Redux</h4>
      <div className='innerDiv'>
        <button href="" onClick={()=> dispactch(actionCreators.withdraw(50))}>-</button>
        <input type="text" value={amount}/>
        <button href="" onClick={()=> dispactch(actionCreators.deposit(50))}>+</button>
      </div>
    </div>
    </>
    
  )
}

export default App
