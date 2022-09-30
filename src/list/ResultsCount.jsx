import { useContext } from 'react';
import React from 'react';
import { ItemsContext } from '../contexts/ItemContext';
import { SearchContext } from '../contexts/SearchContext';

function ResultCount(){
  const elements = useContext(ItemsContext);
  const {seacrh} = useContext(SearchContext);

  return (
    <p>Se encontreron {elements.filter(el => !!el).length}  elementos para la busqueda de '{seacrh}'</p>
  )
}

export default ResultCount;
