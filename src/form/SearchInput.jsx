import React from 'react'; 
import { useContext } from "react";
import { SearchContext } from '../contexts/SearchContext';

function SearchInput(){
  //recibe como parametro el contexto que va usar y obtiene la funcion por medio del contexto
  const { funcFilterItems } = useContext(SearchContext);
 // console.log(fiilterItems)
  return(
    <input type="text" onChange={(ev) => funcFilterItems(ev.target.value)} />
  )
}

export default SearchInput;