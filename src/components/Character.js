// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DexEntry from './DexEntry';

const Search = styled.input`
	font-size: 15px;
	text-align: left;
	height: 20px;
	with: 30px;
`;

const Button = styled.button`
	font-size: 15px;
	background: white;
	color: black;
	height: 25px;
	with: 30px;
`;

const Character = (props) => {
	const [data, setData] = useState([]);
	const [url, setUrl] = useState('');
	const [pokemon, setPokemon] = useState('');
	const [secondRender, setSecondRender] = useState(false);

	useEffect(() => {
		axios.get(url).then((response) => {
			setData(response.data);
			setSecondRender(true);
		});
	}, [url]);

	const hanldeInputChange = (event) => {
		setPokemon(event.target.value.toLowerCase());
	};

	const handleClick = (event) => {
		props.list.map((element) => {
			if (element.name === pokemon) {
				setUrl(element.url);
			}
		});
		return event;
	};

	return (
		<div>
			{secondRender ? (
				<div>
					<div>
						<Search
							type='text'
							placeholder='Pokemon Name'
							onChange={hanldeInputChange}
						/>
						<Button onClick={handleClick}> Search </Button>
					</div>
					<DexEntry
						image={data.sprites.other['official-artwork'].front_default}
						height={data.height}
						hp={data.stats[0].base_stat}
						attack={data.stats[1].base_stat}
						defense={data.stats[2].base_stat}
						spattack={data.stats[3].base_stat}
						spdefense={data.stats[4].base_stat}
						speed={data.stats[5].base_stat}
					/>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default Character;
