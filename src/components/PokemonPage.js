import React from 'react';
import { useParams } from 'react-router';
const  PokemonPage= ()=>{    
    const { id } = useParams();
    return (<div> <h1>PokemonPage {id}</h1>
    </div>);
}
export default PokemonPage;


