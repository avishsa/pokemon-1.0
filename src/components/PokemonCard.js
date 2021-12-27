import React from 'react';
const  PokemonCard= ({id,imgSrc,name,type,key})=>{
    
    return (<div className="card-container m-3" key={key}>
        <div className="number">#0{id}</div>
        <img src={imgSrc} alt={name}/>
        <div className="details-wrapper">
            <h3>
               {name} 
            </h3>
            <small>Type:{type}</small>
        </div>
    </div>);
}
export default PokemonCard;
