import React, { useState, useEffect } from 'react';

const FamousPerson = ({ person, setSelectedPerson, removePerson }) => {

  return (
    <div className="person">
      <button onClick={() => setSelectedPerson(person)}>{person.first_name + " " + person.second_name}</button> 
      <button className="remove" onClick={ () => removePerson(person.id) }> X </button>
    </div> 
  )
};
export default FamousPerson;








