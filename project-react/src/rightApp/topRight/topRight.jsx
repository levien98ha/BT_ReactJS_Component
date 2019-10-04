import React, {Component} from 'react';
import './topRight.css';
import DecriptionTopRight from './decriptionTopRight/decriptionTopRight';
import TitleTopRight from './titleTopRight/titleTopRight';

class TopRight extends Component{
    render(){
        return(
            <div className="topRight">
                <TitleTopRight />
                <DecriptionTopRight />
            </div>
        );
    }
}

export default TopRight;