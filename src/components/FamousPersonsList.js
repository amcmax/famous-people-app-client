import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewPersonForm from './NewPersonForm';
import FamousPerson from './FamousPerson';

const FamousPersonsList = ({setSelectedPerson}) => {

  useEffect(() => {
    axios.get('/api/v1/persons.json')
        .then(res => setPersons(res.data))
      }, []);

  const [persons, setPersons] = useState([]);
  
  function handleClick(person) {
    setSelectedPerson(person)
  }

  const initialFormState = {
    first_name:'',
    last_name:''
  };

  const addPerson = person => {
    const qs = require('qs');
  
    axios.post('/api/v1/persons', qs.stringify(
        {
          person:{
            first_name: person.first_name,
            second_name: person.last_name,
            country: person.country
          }
        }))
        .then(res=>( console.log(res)))
        .catch( error => console.log(error))
    
    setPersons([...persons, person]);
  };

  return (
      <div>
        {persons.map((person, index) => (
          <FamousPerson person={person} setSelectedPerson={setSelectedPerson} />
            ))}
            <br />
            
              <div>
        <NewPersonForm addPerson={addPerson} initialFormState={initialFormState}/>
      </div>
      </div>
  )
};
export default FamousPersonsList;