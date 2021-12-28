import { useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { API } from "../api";
import { useNavigate } from "react-router-dom";
const PokemonPage = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});
    const navigate = useNavigate();
    const pokemonDetails = async () => {
        const res = await API(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(res.data);
    }
    const back2index=()=>{
        navigate(`/`);
    }
    useEffect(() => {
        pokemonDetails();
      }, [])
      if(pokemon.id===undefined) return <div></div>;
    return (<div className="d-flex flex-column align-items-center">
        <h1>PokemonPage {id}</h1>
        <div className="  d-flex w-100 justify-content-center">
            <div className="d-flex w-25 align-items-center">
                <img className="card-img-top" src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div className="d-flex flex-column col-6">                    
                        <div>Height: {pokemon.height * 10} cm</div>                     
                        <div>Weight:{pokemon.weight / 10} kg</div>
                </div>
            </div>
        </div>
        <button className=" btn btn-primary" onClick={back2index}>Back to index</button>
    </div>);
}
export default PokemonPage;


