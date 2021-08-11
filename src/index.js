import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Hall = () => {

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
  
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)]
    }
  
   return color
  }

  let seconds = new Date().getSeconds()

  if(!(seconds % 4)) {
    var setBackgroundColor = generateRandomColor()
  }
  
  const divStyle = {
    width: 120,
    height: 120,
    backgroundColor: setBackgroundColor
  }
    return(
      <div style={divStyle}></div>
    )
}

function Home(props) {
  let hour = props.time.getHours();
  let minutes = props.time.getMinutes();
  let seconds = props.time.getSeconds();

  if (hour.toString().length < 2) {
    hour = `0${hour}`;
  }
  else if (minutes.toString().length < 2) {
    minutes = `0${minutes}`;
  }
  else if (seconds.toString().length < 2) {
    seconds = `0${seconds}`;
  }
  return (
    <h1>{hour}:{minutes}:{seconds}</h1>
  );
}

const App = () => {
  return(
    <div>
    <Home time={new Date} />
    <Hall />
    </div>
  )
}

const tick = () => {
  return (
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    )
  )
}

setInterval(() => {
  tick()
}, 1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
