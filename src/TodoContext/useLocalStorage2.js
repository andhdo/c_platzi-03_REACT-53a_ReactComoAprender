import React, { useEffect, useState } from "react";

function useLocalStorage2(itemName, initialValue) {
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  const [item, setItem] = useState(initialValue); // parsedItem

  useEffect(()=> {
    setTimeout(() => {
      try {

        const localStorageItem = localStorage.getItem('TODOS_V1');
        let parsedItem;
      
        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem=initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        
        setItem(parsedItem);
        setLoading(false);
  

      }
      catch(error) {
        setError(error);

      }


    }, 1000)
  });




  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
  
    } catch(error) {
      setError(error);
    }
  };  

  return {
    item,
    saveItem,
    loading,
    error
  };

}

export {useLocalStorage2};