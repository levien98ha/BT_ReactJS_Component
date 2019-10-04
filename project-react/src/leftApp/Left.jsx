import React, { Component } from 'react';
import LeftTitle from './Title/leftTitle';
import LeftCard from './LeftCard/leftCard';
import './leftApp.css';

class Left extends Component{
	render(){
		return(
		<div className="leftApp">
			<LeftTitle />
		    <LeftCard />
		</div>
		);}
}

export default Left;