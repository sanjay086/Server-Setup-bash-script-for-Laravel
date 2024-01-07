import React, { useState } from 'react';
import './App.css';
const App = ()=> {

  //console.log(useState('Kumar'));
  //let myfirstVal = useState('Kumars')[0];
  //console.log(myfirstVal);
  //var val = 'Hello Sanjay';

const [myName, setMyName] = useState('Kumar Sanjay');

const changeName = () => {

  /* val = 'Hello World';
  console.log(val); */
  //setMyName('HELLO INDIA');
  let val = myName;

if(val === 'Kumar Sanjay'){
 setMyName('HELLO INDIA');
}else{
  setMyName('Kumar Sanjay');
 }
}
  console.log(myName);
  return (

    <div>
      <h1> { myName } </h1>
      <button className='btn'onClick={changeName} >Click Me Please</button>
    </div>
  )
}
export default App