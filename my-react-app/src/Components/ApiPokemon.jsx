import { useState } from 'react'
import axios from 'axios';


export const ApiPokemon = (props) => {

  const [pokemones, setPokemones]= useState ([])

  const callApi = async () => {
   const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
   const lista = response.data.results;
   setPokemones(lista)
  }


  return (
    <div>
      <button onClick={callApi} className="btn btn-primary mt-4">Buscar Pokemon</button>

      {
        pokemones.map((item, index) => {
          return <p key={index}>{index} {item.name}</p>
        })
      }
    </div>
  );
}
 
export default ApiPokemon;