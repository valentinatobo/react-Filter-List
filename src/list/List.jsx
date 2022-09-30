import frameworks from './item'
import React from 'react';
import ListView from './ListView'
import { useState } from 'react';

//componentes de presentación (mostrar datos) y componentes contenedores(manejo de informacion)

function List(){

  let [items, setItems] = useState(frameworks);

  function filterItems(searchPattern){
    if(searchPattern === ""){
      setItems(frameworks);
    }else{
      let newItems= filterItemsBySearchPattern(searchPattern)
      setItems(newItems);
    }
  }

  function filterItemsBySearchPattern(searchPatern){
    let filterItems = frameworks.filter( item => item.toLowerCase().includes(searchPatern.toLowerCase()))

    // para mayor rendimiento 
    // let filterItems = frameworks.map( item => item.toLowerCase().includes(searchPatern.toLowerCase()) ? item : null)

    return filterItems;
  }

  return (
    <>
    <ListView elements={items} funcFilterItems={filterItems} />
    </>
  )
}

export default List;