import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Navbar';
import Auth from './containers/Auth';
import { IReducer } from './interfaces/IReducers';
import { ITask } from './interfaces/ITask';

function App() {
  const tasks = useSelector<IReducer>((state) => state.allProjects)
  console.log(tasks);

  // const [user, setuser] = useState<boolean>(false)
  
  return (
    <>
      <Header />  
      <Nav /> ,,,
    </>
  )
}

export default App
