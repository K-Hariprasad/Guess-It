import React from "react";
import './Game.css'
import Result from  './Result'
class Game extends React.Component {
  constructor() {
    super();
    this.state = {
        result : '',
        left : 5,
        guess : '',
        display : '?',
        message:"Let's start guessing.....",
        style:{color:'white',border:'solid 2px white'}
    };
  }
  guessInput = (event) => {
     this.setState({guess:event.target.value});
  }
  submitGuess = (event) => {
      event.preventDefault();
      if(Number(this.state.left)>=1 && (this.state.guess)){
        this.setState({display:this.state.guess,guess:''});
        this.setState({left:this.state.left-1});
        this.compare()}
        ;
  }
  compare = () => {
      var input = Number(this.state.guess);
      var number = Number(this.props.number);
      if (this.state.left>1){
        
        if(input===number){
            this.setState({message:'You got it..!',result:'won'})
        }
        else if((number-2)<=input && input<=(number+2)){
            this.setState({
                style:{color:'rgb(83, 225, 10)',border:'solid 2px rgb(83, 225, 10)'},
                message:"You are too close...!"
            })
        }
        else if((number-5)<=input && input<=(number+5)){
            this.setState({
                style:{color:'rgb(241, 255, 10)',border:'solid 2px rgb(241, 255, 10)'},
                message:"You are close to it...!"
            })
        }
        else if((number-10)<=input && input<=(number+10)){
            this.setState({
                style:{color:'yellow',border:'solid 2px yellow'},
                message:"You are coming closer...!"
            })
        }
        else if((number-20)<=input && input<=(number+20)){
            this.setState({
                style:{color:'orange',border:'solid 2px orange'},
                message:"You are somewhere in middle way...!"
            })
        }
        else if((number-30)<=input && input<=(number+30)){
            this.setState({
                style:{color:'rgb(253, 94, 2)',border:'solid 2px rgb(253, 94, 2)'},
                message:"You are far from it...!"
            }) 
        }
        else{
            this.setState({
                style:{color:'red',border:'solid 2px red'},
                message:"You are too far...!"
            })   
        }
      }
      else{
        if(input===number){
            this.setState({message:'You got it..!',result:'won'})
        }
        else{ 
             this.setState({message:'You loose it..!',result:'loose'})
            
        }
      }
  }
  render() {
      if(this.state.result){
          return <Result result={this.state.result} number={this.props.number}></Result>
      }
      else{
        return(
            <React.Fragment>
                <div id="game" className="col-md-4 offset-md-4 text-light text-center">
                <div className="game-title">
                <h1>GUESS IT</h1>
                </div>   
                <div id="chances">
                    <p>You have {this.state.left} chances left</p>
                </div>
                <div id="display" >
                    <p style={this.state.style}>{this.state.display}</p>
                </div>

                <div id="message" style={this.state.style}>
                    <p>{this.state.message}</p>
                </div>

                <div id="gameInput">
                    <form onSubmit={this.submitGuess}>
                        <div>
                            <input type="number" value={this.state.guess} onChange={this.guessInput} placeholder="Guess here..."></input>
                        </div>
                        <div>
                            <button type="submit">GUESS</button>
                        </div>
                    </form>
                </div>
                </div>
            </React.Fragment>
        )
        }
    }
}

export default Game;