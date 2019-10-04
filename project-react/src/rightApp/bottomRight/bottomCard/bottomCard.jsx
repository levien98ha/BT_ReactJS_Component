import React, {Component} from 'react';
import BottomCardTitle from './bottomCardTitle/bottomCardTitle';
import BottomCardDecription from './bottomCardDecription/bottomCardDecription';
import BottomCardImage from './bottomCardImage/bottomCardIamge';
import './bottomCard.css';

class BottomCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            urlLinkBottom: this.props.urlLinkBottom,
            titleCard: this.props.titleCard,
            decriptionCard: this.props.decriptionCard,
            dateCard: this.props.dateCard
        }
    }

    render(){
        return(
            <div className="bottomCard">
                <div className="bottomCardLeft">
                    <BottomCardImage linkImageBottom={this.state.urlLinkBottom} />
                </div>
                <div className="bottomCardRight">
                    <BottomCardTitle bottomCardTitle={this.state.titleCard}/>
                    <BottomCardDecription dateBottom={this.state.dateCard} context={this.state.decriptionCard}/>
                </div>
            </div>
        );
    }
}
export default BottomCard;