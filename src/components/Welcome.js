import React from "react";
import Game from './game';
import './Welcome.css'

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      userName:'',
      logged:false,
      number:''
    };
  }
  getUser = (event) => {
    this.setState({ userName: event.target.value }); 
  };
  enterGame = () => {
    var x = Math.floor((Math.random() * 100) + 1);
    if (this.state.userName){
    this.setState({number:x,logged : true})
    }
    }

  render() {
     if(this.state.logged){
      return  <Game user={this.state.userName} number={this.state.number}></Game>
     }
    else{  
        return(
            <React.Fragment>
                <div id="welcome" className="col-md-4 offset-md-4 text-center text-light">
                    <div id="title-box">
                    <h1 className="title">GUESS IT</h1>
                    </div>

                    <div className="input-box">
                    <input type="text" placeholder="Enter your name" name="user" onChange={this.getUser}></input>
                    </div>

                    <div>
                    <button onClick={this.enterGame}>Let's Play</button>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}
}
export default Welcome;