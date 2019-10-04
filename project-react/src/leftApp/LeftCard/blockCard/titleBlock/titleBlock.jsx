import React, {Component} from 'react';
import './titleBlock.css';

class TitleBlock extends Component{
    constructor(props){
        super(props);
        this.state = {title: this.props.title}
    }

    render(){
        return(
            <p className="pTitleBlock"> {this.state.title}</p>
        );
    }
}

export default TitleBlock;
