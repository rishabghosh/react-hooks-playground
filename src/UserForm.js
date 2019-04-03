import React, { useState } from "react";

const EMPTY_STR = "";

/** designing custom hooks */
const useInput = function() {
  const [firstName, setFirstName] = useState(EMPTY_STR);
  const [lastName, setLastName] = useState(EMPTY_STR);
  const [age, setAge] = useState(EMPTY_STR);
  const handleFirstNameChange = event => setFirstName(event.target.value);
  const handleLastNameChange = event => setLastName(event.target.value);
  const handleAgeChange = event => setAge(event.target.value);

  return {
    firstName,
    handleFirstNameChange,
    lastName,
    handleLastNameChange,
    age,
    handleAgeChange
  };
};

const UserForm = function() {
  const ui = useInput();
  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        value={ui.firstName}
        onChange={ui.handleFirstNameChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={ui.lastName}
        onChange={ui.handleLastNameChange}
      />
      <input
        type="text"
        placeholder="Age"
        value={ui.age}
        onChange={ui.handleAgeChange}
      />
      <p>{`Name: ${ui.firstName} ${ui.lastName}`}</p>
      <p>{`Age: ${ui.age}`}</p>
    </form>
  );
};

export default UserForm;
