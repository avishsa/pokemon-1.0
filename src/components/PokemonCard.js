import React from 'react';

const  PokemonCard= ({id,imgSrc,name,types,key})=>{
    console.log(types);
    const getTypesList = ()=>{
        var listTypes = types.map(type=>{return <buttom className={`btn type-pokemon ${type.type.name}`}>{type.type.name}</buttom>});        
        return listTypes;
    };
    return (<div className="card card-container m-3 " key={key}>
        <img className="card-img-top" src={imgSrc} alt={name}/>         
        <div className="card-body p-3 d-flex flex-column ">
        <small className="text-start">{`#0${id}`}</small>       
            <h3>
               {name} 
            </h3>
            <div class="d-flex flex-row justify-content-center">
            {getTypesList()}
            </div>
            
        </div>
    </div>);
}
export default PokemonCard;


