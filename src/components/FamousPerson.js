import React, { useState, useEffect } from 'react';

const FamousPerson = ({person, setSelectedPerson={setSelectedPerson}}) => {

  function handleClick(person) {
    setSelectedPerson(person)
  }

  return (
    <div className="person" onClick={() => handleClick(person)}>
      <button>{person.first_name + " " + person.second_name}</button>
    </div>
  )
};
export default FamousPerson;








