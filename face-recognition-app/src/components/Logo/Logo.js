import React from 'react';
import 'tachyons';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain-logo.png';

const Logo = () => {
	return (
		<div>
			<Tilt className="Tilt ml3 br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3"> 
 					<img style= {{paddingTop: '15px'}} src={brain}/>
 				</div>
			</Tilt>
		</div>
		);
}

export default Logo ;