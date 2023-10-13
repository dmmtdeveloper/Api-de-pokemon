import { useState } from 'react';
import './ApiPokemon.css';
import axios from 'axios';


export const ApiPokemon = (props) => {

  const [pokemones, setPokemones]= useState ([])

  const callApi = async () => {
   const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
   const lista = response.data.results;
   setPokemones(lista)
  }


  return (
    <div className='api'>
      <button onClick={callApi} className="btn btn-primary mt-4">Buscar Pokemon</button>

      {
        pokemones.map((item, index) => {
          return (
            <ul key={index}>
              <li>{index} {item.name}</li>
            </ul>
          )
        })
      }
    </div>
  );
}
 
export default ApiPokemon;