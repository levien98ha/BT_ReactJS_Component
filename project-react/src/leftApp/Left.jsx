import React, { Component } from 'react';
import LeftTitle from './Title/leftTitle';
import LeftCard from './LeftCard/leftCard';

class Left extends Component{
	render(){
		return(
		<div>
			<LeftTitle />
		    <LeftCard />
		</div>
		);}
}

export default Left;