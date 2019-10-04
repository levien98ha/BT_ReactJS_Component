import React, {Component} from 'react';
import './imageBlock.css';

class ImageBlock extends Component{
    constructor(props){
        super(props);
        this.state = {
            linkImage: this.props.linkImage
        }
    }

    render(){
        return(
            <img className="image" src={this.props.linkImage} alt=""/>
        );
    }
}

export default ImageBlock;