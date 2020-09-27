import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components/Character';
import './App.css';
import Character from './components/Character';

const App = () => {
	const [list, setList] = useState([]);
	const [initialRender, setInitalRender] = useState(false);

	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.
	useEffect(() => {
		if (initialRender === false) {
			axios
				.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
				.then((response) => {
					setList(response.data.results);
					setInitalRender(true);
				});
		}
	}, [initialRender]);

	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.
	return (
		<div className='App'>
			<h1 className='Header'>Pokemon Kanto Dex</h1>
			{initialRender ? <Character list={list} /> : <p>Loadging...</p>}
		</div>
	);
};

export default App;
