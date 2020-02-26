import React from 'react';

// Timer component

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: this.props.seconds,
      color : 'inherit'
    }
  }


  tick = () => {
    let col;
    if(this.state.seconds <= 16){
      col = 'red';
    }

    this.setState(state => ({
      seconds: state.seconds - 1,
      color : col
    }));
  }

  stop = () => {
    // console.log('1', this.props.isPlaying);
    // this.props.endGame();
    clearInterval(this.interval);
    // console.log('2', this.props.isPlaying);
    //alert("End of the party");
  }

  reset = () => {
    this.props.newGame();
    this.setState(state => ({
      seconds: 80,
      color : 'white'
    }));
  }


  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.interval2 = setInterval(() => this.stop(), 80000);
    //this.interval3 = setInterval(() => this.reset(), 65000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }



  render() {
    console.log(this.props.seconds);
    return (
      <div className="timer">
        <h1 style={{color : this.state.color}}> {this.state.seconds} </h1>
      </div>
    );
  }
}

export default Timer;
