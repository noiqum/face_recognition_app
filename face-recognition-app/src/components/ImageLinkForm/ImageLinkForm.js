import React from 'react';
import 'tachyons';
import Tilt from 'react-tilt';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange,onButtonSummit}) => {
	return (
		<div>
		<p className='f3'>
			{'this magic brain will detect faces in your pics'}
		</p>
			<div className='center'>
				<div className='form  center pa4 br3 shadow-5'>
				<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
				<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-blue'
				onClick={onButtonSummit}
				>Detect </button>
				</div>
			</div>
		</div>
		);
}

export default ImageLinkForm ;