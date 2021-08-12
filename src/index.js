import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Hall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount() {
    this.backgroundChangerTimer = setInterval(
      () => {
        let seconds = new Date().getSeconds()

        if(!(seconds % 4)) {
          return this.tick()
        }
        else {
          return false
        }
      },
       1000
     )
  }

  componentWillMount() {
    clearInterval(this.backgroundChangerTimer)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }
  
    generateRandomColor() {
    const letters = '0123456789ABCDEF';
  
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)]
    }
    return color
  }

  divStyle() {
    let style = { width: 120,
      height: 120,
      backgroundColor: this.generateRandomColor()};
    return(
      style
    )
  }

  render() {
    return <div style={this.divStyle()}></div>
  }

}


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillMount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  hour() {
    let hour = this.state.date.getHours();
    if (hour.toString().length < 2) {
      hour = `0${hour}`;
    }
    return hour;
  }

  minutes() {
    let minutes = this.state.date.getMinutes();
    if (minutes.toString().length < 2) {
      minutes = `0${minutes}`;
    }
    return minutes;
  }

  seconds() {
    let seconds = this.state.date.getSeconds();
    if (seconds.toString().length < 2) {
      seconds = `0${seconds}`;
    }
    return seconds;
  }


  render() {
    return(
        <h1>{this.hour()}:{this.minutes()}:{this.seconds()}</h1>
    )
  }

}

const App = () => {
  return(
    <div>
    <Home />
    <Hall />
    </div>
  )
}


    ReactDOM.render(
      <App />,
      document.getElementById('root')
    )




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
