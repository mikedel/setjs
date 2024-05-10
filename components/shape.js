import React from 'react';
import styled from 'styled-components';

const Icon = ({ color, shape, shade }) => {
	const style = {
		width: shape === 'triangle' ? '0px' : '100px',
		height: shape === 'triangle' ? '0px' : '100px',
		color: color,
		borderColor: color,
		borderLeft: shape === 'triangle' ? '50px solid transparent' : 'none',
		borderRight: shape === 'triangle' ? '50px solid transparent' : 'none',
		borderBottom: shape === 'triangle' ? '5px solid ${color}' : 'none',
		borderRadius: shape === 'oval' ? '50%' : '0px',
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
	return (
		<div className="card">
			{icons}
		</div>
	);
}

export default Card;
