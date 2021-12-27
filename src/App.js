import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { API } from "./api";
import PokemonCard from './components/PokemonCard';
function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [urlGetPokemons, setUrlGetPokemons] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  const getFirstBatchPokemons = async () => {
    const getPokemonList = (listPokems) => {

      listPokems.forEach(async pokemon => {
        const res = await API(pokemon.url);
        setAllPokemons(currList => [...currList, res.data]);

      })
      console.log("firstBatch", allPokemons);
    };
    const res = await API(urlGetPokemons);
    const data = res.data.results;
    setUrlGetPokemons(res.data.next);
    console.log(data, urlGetPokemons);
    getPokemonList(data);

  };
  useEffect(() => {
    getFirstBatchPokemons();
  }, [])
  return (
    <div className="App">
      <h1>Pokedex </h1>
      <div className="pokemon-container">
        <div className="pokemon-all d-flex flex-wrap m-5">
          {allPokemons.map((pokemon, index) => (<PokemonCard
            key={index} imgSrc={pokemon.sprites.front_default} id={pokemon.id} name={pokemon.name} type={pokemon.types[0].type.name} />
          ))}
        </div>
        <button className="load-more btn btn-primary">load more</button>
      </div>
    </div>
  );
}

export default App;
