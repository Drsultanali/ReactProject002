import React from 'react';
import './App.css';
import Cma from './cma.js';

function App() {
  return(
    <div className='App'>
      <h1><b>ICMA Pakistan</b></h1>
      <h3>Become A Future Professional Entrepreneur</h3>
      {/* <Cma></Cma> */}
      <u>
    <Cma courseName='IFRS' degreeHolder='Acca-Inter' />
    <Cma courseName="Accounting" degreeHolder="PIPFA" />
    <Cma courseName="Director Training" degreeHolder="MBA" />
      </u>
      </div>
  )
}

export default App;
