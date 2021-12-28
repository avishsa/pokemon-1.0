import React from 'react';
import { useNavigate } from "react-router-dom";

const  PokemonCard= ({id,imgSrc,name,types,keyIndex})=>{   
    const navigate = useNavigate(); 
    const goToPokemonPage = () =>{         
        navigate(`/pokemon/${id}`);
      }
    const getTypesList = ()=>{
        var listTypes = types.map((type,index)=>{return <button key={index} className={`btn type-pokemon ${type.type.name}`}>{type.type.name}</button>});        
        return listTypes;
    };
    return (<div onClick={goToPokemonPage} className="card card-container m-3 " key={keyIndex}>
        <img className="card-img-top" src={imgSrc} alt={name}/>         
        <div className="card-body p-3 d-flex flex-column ">
        <small className="text-start">{`#0${id}`}</small>       
            <h3>
               {name} 
            </h3>
            <div className="d-flex flex-row justify-content-center">
            {getTypesList()}
            </div>
            
        </div>
    </div>);
}
export default PokemonCard;


