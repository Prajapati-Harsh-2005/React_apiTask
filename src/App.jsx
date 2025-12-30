import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Api from './Api';
import Api2 from './Api2';
import Hooks from './Hooks';
import E_com from './E_com';
import Api3 from './Api3';
import Api4 from './Api4';
import Axios from './Axios';
import Add_api from './Add_api';
import View_api from './View_api';
function App(){
  return(
    <div>
      <Router>
        <Link to='/api'>API</Link> | 
        <Link to='/api2'>API2</Link> | 
        <Link to='/hooks'>Hooks</Link> | 
        <Link to='/E_com'>E-com</Link> | 
        <Link to='/api3'>API3</Link> | 
        <Link to='/api4'>API4</Link> | 
        <Link to='/axios'>Axios</Link> |
        <Link to='/add_api'>Add_api</Link> |
        <Link to='/view_api'>View_api</Link>
        <Routes>
          <Route element={<Api/>} path='/api'/>
          <Route element={<Api2/>} path='/api2'/>
          <Route element={<Hooks/>} path='hooks'/>
          <Route element={<E_com/>} path='/E_com'/>
          <Route element={<Api3/>} path='api3'/>
          <Route element={<Api4/>} path='/api4'/>
          <Route element={<Axios/>} path='/axios'/>
          <Route element={<Add_api/>} path='/add_api'/>
          <Route element={<View_api/>} path='view_api'/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;