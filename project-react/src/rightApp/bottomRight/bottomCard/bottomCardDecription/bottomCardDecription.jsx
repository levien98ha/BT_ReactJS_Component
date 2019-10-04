import React, {Component} from 'react';
import './bottomCardDecription.css';

class BottomCardDecription extends Component{
    constructor(props){
        super(props);
        this.state = {
            dateBottom: this.props.dateBottom,
            context: this.props.context
        }
    }
    render(){
        return(
            <p className="bottomContext">{this.state.dateBottom} | {this.state.context} </p>
        );
    }
}
export default BottomCardDecription;