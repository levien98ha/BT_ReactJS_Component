import React, {Component} from 'react';
import './decriptionBlock.css';

class DecriptionBlock extends Component{
    //const {title, decription} = props;
    constructor(props){
        super(props);
        this.state = {
            postBy: this.props.postBy,
            postDate: this.props.postDate,
            postDecription:  this.props.postDecription
        }
    }
    render(){
        return(
            <div className="containerDecription">
                <p className="post">Posted by {this.props.postBy} | {this.props.postDate} | Javascript</p>
                <p className="decription">{this.props.postDecription}</p>
            </div>
        );
        }
}

export default DecriptionBlock;
