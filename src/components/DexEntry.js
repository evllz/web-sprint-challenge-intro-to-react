import React from 'react';
import styled from 'styled-components';
import pkball from '../images/pkball.png';

const Image = styled.img`
	position: absolute;
	left: 25em;
	top: 13em;
	width: 400px;
	height: 400px;
`;
const Container = styled.div`
box-shadow: 10px 10px 5px #aaaaaa;
position:absolute;
left: -22.5em;
bottom: 1em;
font-weight: bold;
background: #9697C5;
border: 5px solid #ECEDFF;
width: 200px;
height: 400px
align-content: center;
margin: 2px
padding: 2px;
display: flex;
flex-direction: row; 
justify-content: center;
margin-left: 45%
`;

const Pkball = styled.img`
	position: absolute;
	height: 25px;
	width: 25px;
`;

const Pkball1 = styled(Pkball)`
	left: 31em;
	bottom: 20.5em;
`;
const Pkball2 = styled(Pkball)`
	left: 43.5em;
	bottom: 20.5em;
`;
const Pkball3 = styled(Pkball)`
	left: 43.5em;
	bottom: 0.5em;
`;
const Pkball4 = styled(Pkball)`
	left: 31em;
	bottom: 0.5em;
`;

const DexEntry = (props) => {
	return (
		<div>
			<div>
				<Image src={data.Image} />
			</div>
			<Container>
				<div>
					<p>Name: {props.name.toUpperCase()}</p>
					<p>Height: {props.height}dm</p>
					<p>- Base Stats -</p>
					<p>HP: {props.hp}</p>
					<p>Attack: {props.attack}</p>
					<p>Defense: {props.defense}</p>
					<p>Special-attack: {props.spattack}</p>
					<p>Special-defense: {props.spdefense}</p>
					<p>Speed: {props.speed}</p>
				</div>
			</Container>
			<Pkball1 src={pkball} />
			<Pkball2 src={pkball} />
			<Pkball3 src={pkball} />
			<Pkball4 src={pkball} />
		</div>
	);
};

export default DexEntry;
