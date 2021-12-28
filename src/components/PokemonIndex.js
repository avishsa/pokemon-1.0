import { useEffect, useState } from 'react';
import { API } from "../api";
import PokemonCard from './PokemonCard';
import '../styles/app.css';

function PokemonIndex() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [urlGetPokemons, setUrlGetPokemons] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  const getBatchPokemons = async () => {
    const getPokemonList = (listPokems) => {
      listPokems.forEach(async pokemon => {
        const res = await API(pokemon.url);
        setAllPokemons(currList => [...currList, res.data]);

      })      
    };
    const res = await API(urlGetPokemons);
    const data = res.data.results;
    setUrlGetPokemons(res.data.next);    
    getPokemonList(data);

  };
  useEffect(() => {
    getBatchPokemons();
  }, [])
  const onClickCard = ()=>{
      console.log("move to page")
  }
  return (
    <div className="App">
      <h1 className="text-center mt-5">Pokedex </h1>
      <div className="pokemon-container d-flex flex-column align-items-center ">
        <div className=" pokemon-all d-flex flex-wrap">
          {allPokemons.map((pokemon, index) => (<PokemonCard
            onClick={onClickCard}
            key={index}
            keyIndex={index} 
            imgSrc={pokemon.sprites.front_default} 
            id={pokemon.id} name={pokemon.name} 
            types={pokemon.types} />
          ))}
        </div>
        <button className="load-more btn btn-primary" onClick={getBatchPokemons}>load more</button>
      </div>
    </div>
  );
}

export default PokemonIndex;
