import React, { useState } from "react";

const EMPTY_STR = "";

/** designing custom hooks */
const useInput = function() {
  const [value, setValue] = useState(EMPTY_STR);
  const onChange = event => setValue(event.target.value);
  return { value, onChange };
};

const UserForm = function() {
  /**
   * destructuring process in the lines below in a es6 feature
   * where its possible to rename something while destructuring
   */
  const { value: firstName, onChange: handleFirstNameChange } = useInput();
  const { value: lastName, onChange: handleLastNameChange } = useInput();
  const { value: age, onChange: handleAgeChange } = useInput();

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={handleAgeChange}
      />
      <p>{`Name: ${firstName} ${lastName}`}</p>
      <p>{`Age: ${age}`}</p>
    </form>
  );
};

export default UserForm;
