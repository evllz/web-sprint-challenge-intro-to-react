// Write your Character component here
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

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

const Image = styled.img`
width: 200px;
height: 200px
`;
const Container = styled.div`
font-weight: bold;
background: #FFCB05;
border: 5px solid #3B5CA8;
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

const Character = (props) => {

    const [data,setData] = useState([]);
    const [url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon/1');
    const [pokemon, setPokemon] = useState('bulbasaur');
    const [secondRender, setSecondRender] = useState(false);

    useEffect(()=>{
        axios.get(url)
        .then(response=>{setData(response.data);setSecondRender(true)})
    },[url])

    const hanldeInputChange = (event) =>{
        setPokemon(event.target.value.toLowerCase());
    } 

    const handleClick = (event) => {
        props.list.map(element => {
            if (element.name === pokemon){
                setUrl(element.url);
            }
        });
        return event;
    }


    return (
        <div>
            {secondRender ? 
                    <div>
                        <div>
                            <Search type='text' placeholder='Pokemon Name' onChange={hanldeInputChange}/>
                            <Button onClick={handleClick}> Search </Button>
                        </div>
                        <div>
                            <Image src={data.sprites.other["official-artwork"].front_default}/>
                        </div>
                        <Container>
                            <div>
                                <p>Name: {data.species.name.toUpperCase()}</p>
                                <p>Height: {data.height}dm</p>
                                <p>- Base Stats -</p>
                                <p>HP: {data.stats[0].base_stat}</p>
                                <p>Attack: {data.stats[1].base_stat}</p>
                                <p>Defense: {data.stats[2].base_stat}</p>
                                <p>Special-attack: {data.stats[3].base_stat}</p>
                                <p>Special-defense: {data.stats[4].base_stat}</p>
                                <p>Speed: {data.stats[5].base_stat}</p>
                            </div>

                        </Container>
                   </div>
            : <p>Loading...</p>}
        </div>

    );
}

export default Character;
