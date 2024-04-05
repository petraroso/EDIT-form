import { useFormDataContext } from "../Context";
import "../App.css";
import { useState } from "react";

function Address() {
  //using custom hook
  const userData = useFormDataContext();

  const [displayNameError, setDisplayNameError] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [displayAddressError, setDisplayAddressError] = useState(false);
  const [displayAddress, setDisplayAddress] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 6 && e.target.value.length <= 20) {
      userData.setName(e.target.value);
      setDisplayNameError(false);
    } else {
      setDisplayNameError(true);
      userData.setName("");
      setDisplayNameError(true);
    }
    setDisplayName(e.target.value);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    userData.setCountry(e.target.value);
  };
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 6 && e.target.value.length <= 30) {
      userData.setAddress(e.target.value);
      setDisplayAddressError(false);
    } else {
      setDisplayAddressError(true);
      userData.setAddress("");
      setDisplayAddressError(true);
    }
    setDisplayAddress(e.target.value);
  };
  return (
    <div className="container">
      <p>Adresa</p>
      <label htmlFor="name">Ime:</label>
      <input
        type="text"
        id="name"
        autoComplete="auto"
        placeholder="Vaše ime"
        value={displayName}
        onChange={handleNameChange}
      ></input>
      {displayNameError && (
        <span className="errorMessage">Ime treba biti duljine 6-20</span>
      )}

      <label htmlFor="country">Država:</label>
      <select
        id="country"
        name="countrySelect"
        value={userData.country}
        onChange={handleCountryChange}
      >
        <option value={"Hrvatska"}>Hrvatska</option>
        <option value={"BiH"}>BiH</option>
      </select>

      <label htmlFor="address">Adresa:</label>
      <input
        type="text"
        id="address"
        autoComplete="auto"
        placeholder="Vaša adresa"
        value={displayAddress}
        onChange={handleAddressChange}
      ></input>
      {displayAddressError && (
        <span className="errorMessage">Adresa treba biti duljine 6-30</span>
      )}
    </div>
  );
}

export default Address;
