import { useState } from "react";

const TodoSearch = ({ searchValue, setSearchValue}) => {
  // conclases class: constructor() this.state = {... }
  // const [searchValue,setSearchValue] = useState('');
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  }; 
  return [
    <input
      onChange={onSearchValueChange} 
      value={searchValue}
      placeholder="Cebolla" 
    />,
    <p>{searchValue}</p>
  ];
};
export { TodoSearch };