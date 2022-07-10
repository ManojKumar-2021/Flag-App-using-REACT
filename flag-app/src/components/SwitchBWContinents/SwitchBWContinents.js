import React from 'react'
import ('./SwitchBWContinents.css')


const SwitchBWContinents=({onSelect})=> {

const selectHandler=(e)=>{
    const regionName=e.target.value
    onSelect(regionName)
}

  return (
    <>
      <select onChange={selectHandler}>
        <option>Switch Between Continents....</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Americas">America</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  );
}

export default SwitchBWContinents;

