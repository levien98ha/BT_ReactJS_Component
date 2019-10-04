import React, {Component} from 'react';
import './bottomCardImage.css';

class BottomCardImage extends Component{
    constructor(props){
        super(props);
        this.state = {
            linkImageBottom: this.props.linkImageBottom
        }
    }
    render(){
        return(
            <img className="imgBottom" src={this.state.linkImageBottom} alt=""></img>
        );
    }
}
export default BottomCardImage;

