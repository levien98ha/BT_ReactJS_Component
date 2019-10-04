import React, {Component} from 'react';
import TopRight from './topRight/topRight';
import BottomRight from './bottomRight/bottomRight';
import './rightApp.css';

class Right extends Component{
    render(){
        return(
            <div className="containerRight">
                <div className="top">
                    <TopRight />
                </div>
                <div className="bottom">
                    <BottomRight />
                </div>
            </div>
        );
    }
}

export default Right;