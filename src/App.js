import './App.css';
import AddFun from './Components/AddContact';
import HomeFun from './Components/Home';

import {NavLink, Route,Switch} from 'react-router-dom'
import React from 'react';
import {ToastContainer} from 'react-toastify'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import EditFun from './Components/EditStudent';
//import { useSelector } from 'react-redux';

function App() {
  //const myState=useSelector((state)=>{return state})
  //console.log(myState.ContactReducer)
  return (
    <div >
      <ToastContainer></ToastContainer>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
        <NavLink to="/" className="navbar-brand ml-5">
          React Redux Contact App
        </NavLink>
        </nav>
     

     
      <Switch>
        <Route path='/' component= {HomeFun} exact></Route>
        <Route path="/AddContact" component={AddFun} exact></Route>
        <Route path="/Edit/:id"  component={EditFun}></Route>
      </Switch>
     
      
    </div>
  );
}

export default App;
