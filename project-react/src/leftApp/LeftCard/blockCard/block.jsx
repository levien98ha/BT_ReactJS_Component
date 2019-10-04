import React, {Component} from 'react';
import ButtonBlock from './buttonBlock/buttonBlock';
import DecriptionBlock from './decriptionBlock/decriptionBlock';
import TitleBlock from './titleBlock/titleBlock';
import ImageBlock from './imageBlock/imageBlock';
import './block.css';

class Block extends Component {
    constructor(props){
        super(props);
        this.state = {
            titleBlock: this.props.titleBlock,
            urlBlock: this.props.urlBlock,
            postByBlock: this.props.postByBlock,
            postDateBlock: this.props.postDateBlock,
            postDecriptionBlock:  this.props.postDecriptionBlock
        }
    }
    render(){
        return(
            <div className="containerBlock">
                <div className="imageBlock">
                    <ImageBlock linkImage={this.props.urlBlock}/>
                </div>
                <div className="info">
                    <TitleBlock title={this.props.titleBlock}/>
                    <DecriptionBlock postBy={this.props.postByBlock} postDate={this.props.postDateBlock} postDecription={this.props.postDecriptionBlock} />
                    <ButtonBlock />
                </div>
            </div>
        );
    }
}

export default Block;