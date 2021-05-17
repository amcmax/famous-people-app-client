import React, { useState } from 'react';

const NewPersonForm = props => {
  const [person, setPerson] = useState(props.initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target
    setPerson({ ...person, [name]: value })
  };

  return (
      <form onSubmit={event => {
        event.preventDefault()
        if (!person.first_name) return;
        props.addPerson(person)
        setPerson(props.initialFormState)
      }}>
        <label>First Name</label>
        <input type="text" name="first_name" value={person.first_name} onChange={handleInputChange} ></input><br />
        <label>Last Name</label> 
        <input type="text" name="last_name" value={person.last_name} onChange={handleInputChange} ></input><br />
        <label>Country</label> 
        <input type="text" name="country" value={person.country} onChange={handleInputChange} ></input><br />
        <button>Add Famous Person</button>
      </form>
  )
};

export default NewPersonForm;