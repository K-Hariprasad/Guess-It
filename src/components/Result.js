import React from "react";
import smile from '../images/smile.jpg'
import sad from '../images/sad.jpg'

class Result extends React.Component {
    constructor() {
      super();
      this.state = {
         
      };
    }
    reload=()=>{
        window.location.reload()
    }
    render() {
        if(this.props.result==="won"){
            return(
            <React.Fragment>
                <div className="col-md-4 offset-md-4 text-center result-won text-light">
                    
                        <p>Congratulations, You won the game..!</p>
                        <div className="pic">
                            <img src={smile} alt="smile_image"></img>
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={this.reload}>Play Again</button>
                        </div>
                </div>
            </React.Fragment>
            )
            }
        else{
            return(
                <React.Fragment>
                    <div className="col-md-4 offset-md-4 text-center result-lost text-light">
                        <p>Bad luck, You loose the game..!</p>
                        <div>
                            <p>The number was {this.props.number}</p>
                        </div>
                        <div className="pic">
                            <img src={sad} alt="sad_image"></img>
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={this.reload}>Play Again</button>
                        </div>
                    </div>
                </React.Fragment>
                )
        }
    }
}

export default Result;