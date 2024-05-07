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
		borderBottom: shape === 'triangle' ? '5px solid {color}' : 'none',
	}
		
	return (
		<div data-color={color} data-shape={shape} data-shade={shade} style={{ style }}>
			{shape === 'oval' && <div className="oval"></div>}
			{shape === 'square' && <div className="square"></div>}
			{shape === 'triangle' && <div className="triangle"></div>}
		</div>
	);
}

const Card = ({ count, icon }) => {
	return (
		<div data-count={count}>
			{Array.from({ length: count }).map((_, i) => (
				<Icon {...icon} />
			))}
		</div>
	);
}

export default Card;
