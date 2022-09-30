import frameworks from './item'
import React from 'react';
import ListView from './ListView'
import { useState, useContext, useEffect } from 'react';
import { SearchContext, SearchProvider } from '../contexts/SearchContext';

//componentes de presentación (mostrar datos) y componentes contenedores(manejo de informacion)

function List(){

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

  return (
   
    <ListView elements={items}/>
  
  )
}

export default List;