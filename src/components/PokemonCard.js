import React from 'react';

const  PokemonCard= ({id,imgSrc,name,type,key})=>{
    
    return (<div className="card card-container m-3" key={key}>
        <img className="card-img-top" src={imgSrc} alt={name}/>        
        <div className="card-body">
            <h3>
               {name} 
            </h3>
            <small>Type:{type}</small>
        </div>
    </div>);
}
export default PokemonCard;


