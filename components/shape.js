import React from 'react';
import styled from 'styled-components';

const Icon = ({ color, shape, shade }) => {
	var style = {
		width: '100px',
		height: '100px',
		color: color,
		borderColor: color,
		border: '3px solid ' + color,
		marginBottom: '10px',
	}
	// shape
	if (shape === 'oval') {
		style.borderRadius = '50%';
	}
	else if (shape === 'triangle') {
		style.clipPath = 'polygon(0% 100%, 50% 0%, 100% 100%)';
	}	
	// shade
	if (shade === 'striped') {
		style.background = `repeating-linear-gradient(90deg, white 5px, ${color} 10px, white 15px)`;
	}
	else if (shade === 'gradient') {
		style.background = `linear-gradient(${color}, white)`;
	}
	else {
		style.backgroundColor = color;
	}
		
	const className = `${color} ${shade} ${shape}`;
	return (
		<div className={className} style={style}></div>
	);
}

const Card = ({ color, shape, shade, number}) => {
	let icons = []
	for (let i = 0; i < number; i++) {
		icons.push(<Icon color={color} shape={shape} shade={shade} />);
	}
	const style = {
		backgroundColor: 'white',
		borderRadius: '10px',
		padding: '10px',
		margin: '10px',
		border: '1px solid black',
		height: '350px',
		width: '120px',
		display: 'inline-block',
	}
	return (
		<div className="card" style={style}>
			{icons}
		</div>
	);
}

export default Card;
