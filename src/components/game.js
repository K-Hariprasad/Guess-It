import React from "react";
import './Game.css'
class Game extends React.Component {
  constructor() {
    super();
    this.state = {
        left : 5,
        guess : '',
        display : '',
        message:'Lets guess'
    };
  }
  guessInput = (event) => {
     this.setState({guess:event.target.value});
  }
  submitGuess = (event) => {
    event.preventDefault();
    this.setState({display:this.state.guess});
    this.setState({left:this.state.left-1});
    this.compare()
  }
  compare = () => {
      var input = Number(this.state.guess);
      var number = Number(this.props.number);
      if (this.state.left>1){
        
        if(input===number){
            this.setState({message:'You got it..!'})
        }
        else if((number-2)<=input && input<=(number+2)){
            this.setState({message:'You are too close'})
        }
        else if((number-5)<=input && input<=(number+5)){
            this.setState({message:'You are close'})
        }
        else if((number-10)<=input && input<=(number+10)){
            this.setState({message:'You are nearby'})
        }
        else if((number-20)<=input && input<=(number+20)){
            this.setState({message:'You are little far'})
        }
        else if((number-30)<=input && input<=(number+30)){
            this.setState({message:'You are far'})
        }
        else{
            this.setState({message:'You are too far'})    
        }
      }
      else{
        if(input===number){
            this.setState({message:'You got it..!'})
        }
        else{ 
             this.setState({message:'You loose it..!'})
            
        }
      }
  }
  render() {
        return(
            <React.Fragment>
                <div id="game" className="col-md-4 offset-md-4 text-light text-center">
                <div className="game-title">
                <h1>GUESS IT  {this.props.number}</h1>
                <hr/>
                </div>   
                <div>
                    <p>You have {this.state.left} chances left</p>
                </div>
                {/* <div id="message">
                    <p>{this.state.message}</p>
                </div> */}
                <div id="display">
                    <p>{this.state.display}</p>
                </div>

                <div id="gameInput">
                    <form onSubmit={this.submitGuess}>
                        <div>
                            <input type="number" onChange={this.guessInput} placeholder="Guess here..."></input>
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

export default Game;