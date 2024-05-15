import React from 'react';
import styled from 'styled-components';

const Icon = ({ color, shape, shade }) => {
	const style = {
		width: shape === 'triangle' ? '0px' : '100px',
		height: shape === 'triangle' ? '0px' : '100px',
		color: color,
		borderColor: color,
		backgroundColor: shade === 'solid' ? color : 'white',
		borderLeft: shape === 'triangle' ? '50px solid transparent' : '3px solid ' + color,
		borderRight: shape === 'triangle' ? '50px solid transparent' : '3px solid ' + color,
		borderBottom: shape === 'triangle' ? '100px solid ' + color : '3px solid ' + color,
		borderTop: shape === 'triangle' ? '0px' : '3px solid ' + color,
		borderWidth: shape === 'triangle' ? '50px' : '3px',
		borderRadius: shape === 'oval' ? '50%' : '0px',
		marginBottom: '10px',
	}
		
	const className = `${color} ${shade} ${shape}`;
	return (
		<div className={className} style={style}>
		</div>
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
