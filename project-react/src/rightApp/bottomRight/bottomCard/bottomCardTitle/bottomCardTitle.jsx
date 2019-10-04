import React, {Component} from 'react';
import './bottomCardTitle.css';

class BottomCardTitle extends Component{
    constructor(props){
        super(props);
        this.state ={
            bottomCardTitle: this.props.bottomCardTitle
        }
    }

    render(){
        return(
            <p className="bottomCardTitle">{this.state.bottomCardTitle}</p>
        );
    }
}
export default BottomCardTitle;