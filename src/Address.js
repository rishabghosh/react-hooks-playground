import React, { useState } from "react";

const EMPTY_STR = "";

const Address = function() {
  const [city, setCity] = useState(EMPTY_STR);
  const [country, setCountry] = useState(EMPTY_STR);

  const handleCityChange = event => setCity(event.target.value);
  const handleCountryChange = event => setCountry(event.target.value);

  return (
    <main>
      <form>
        <input placeholder="City" value={city} onChange={handleCityChange} />
      </form>
      <form>
        <input placeholder="Country" value={country} onChange={handleCountryChange} />
      </form>
      <div>You Live In {`${city}, ${country}`}</div>
    </main>
  );
};

export default Address;
