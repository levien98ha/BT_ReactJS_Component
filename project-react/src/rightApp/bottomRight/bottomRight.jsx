import React, {Component} from 'react';
import TitleBottom from './titleBottom/titleBottom';
import BottomCard from './bottomCard/bottomCard';
import Bottom1 from './bottom1.jpg';
import Bottom2 from './bottom2.jpg';
import Bottom3 from './bottom3.jpg';
import Bottom4 from './bottom4.jpg';
import Bottom5 from './bottom5.jpg';
import './bottomRight.css';

class BottomRight extends Component{
    render(){
        return(
            <div className="bottomRight">
                <div className="titleBot">
                    <TitleBottom />
                </div>
                <div className="decriptionBot">
                    <div className="cardBottom">
                        <BottomCard 
                            urlLinkBottom= {Bottom1}
                            titleCard= "Hãy sống chung với Deadline "
                            decriptionCard= "Em đã quen với Deadline"
                            dateCard= "Th5 03.10.2019"
                        />
                    </div>
                    <div className="cardBottom">
                        <BottomCard 
                            urlLinkBottom= {Bottom2}
                            titleCard= "Làm Deadline tích đức"
                            decriptionCard= "Deadline tích đức"
                            dateCard= "Th6 04.10.2019"
                        />
                    </div>
                    <div className="cardBottom">
                        <BottomCard 
                            urlLinkBottom= {Bottom3}
                            titleCard= "Hãy sống chung với Deadline"
                            decriptionCard= "Em đã quen với Deadline"
                            dateCard= "Th7 05.10.2019"
                        />
                    </div>
                    <div className="cardBottom">
                        <BottomCard 
                            urlLinkBottom= {Bottom4}
                            titleCard= "Làm Deadline tích đức"
                            decriptionCard= "Làm Deadline tích đức"
                            dateCard= "CN 06.10.2019"
                        />
                    </div>
                    <div className="cardBottom">
                        <BottomCard 
                            urlLinkBottom= {Bottom5}
                            titleCard= "Hãy sống chung với Deadline"
                            decriptionCard= "Em đã quen với Deadline"
                            dateCard= "Th2 07.10.2019"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default BottomRight;