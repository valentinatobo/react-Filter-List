import { createContext, useState, useEffect, useContext } from 'react';
import React from 'react';
import frameworks from '../list/item'
import { SearchContext } from '../contexts/SearchContext';

//para llevar informacion o variables a otros componentes por medio de un contexto
export const ItemsContext = createContext([]);

//se crea la función para que la logica de esta sea usada por todos los hijos de este contexto 
export function ItemsProvider({children}){

  let [items, setItems] = useState(frameworks);
  let { seacrh } = useContext(SearchContext); 

  useEffect(function(){
    //valida que en input no este vacio o null
    if(!seacrh || seacrh==="") {
      setItems(frameworks)
      return};
    filterItems(seacrh);
  }, [seacrh]);

  function filterItems(searchPattern){
    let newItems= filterItemsBySearchPattern(searchPattern)
      setItems(newItems);
  }

  function filterItemsBySearchPattern(searchPatern){
    // let filterItems = frameworks.filter( item => item.toLowerCase().includes(searchPatern.toLowerCase()))

    // para mayor rendimiento 
    let filterItems = frameworks.map( item => item.toLowerCase().includes(searchPatern.toLowerCase()) ? item : null)

    return filterItems;
  }

  return(
    //se usa la constante de contexto creada para los items 
    <ItemsContext.Provider value={items}>
      {children}
    </ItemsContext.Provider>
  )
}