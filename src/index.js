import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header'
// import Bline from './Bline'
import App from './App';
import reportWebVitals from './reportWebVitals';

const instructor_names = ["steven", "caryn", "greg"]

// let instructors = instructor_names.map(function(name){
//   return <Header name={name} />
// })

// console.log(instructors)

ReactDOM.render(
  <div>
    <Header instructors={instructor_names} />
  </div>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
