import { useFormDataContext } from "../Context";
import { useState } from "react";
import "../App.css";

function Contact() {
  //using custom hook
  const userData = useFormDataContext();

  const [displayError, setDisplayError] = useState(false);
  const [displayEmail, setDisplayEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);

    if (isValidEmail) {
      userData.setEmail(e.target.value);
      setDisplayError(false);
    } else {
      setDisplayError(true);
      userData.setEmail("");
      userData.setDataIsEntered(false);
    }
    setDisplayEmail(e.target.value);
  };
  return (
    <div className="container">
      <label htmlFor="email">Kontakt</label>
      <input
        type="text"
        id="email"
        autoComplete="auto"
        placeholder="Email adresa"
        value={displayEmail}
        onChange={handleEmailChange}
      ></input>
      {displayError && (
        <span className="errorMessage">Unesite ispravan e-mail</span>
      )}
    </div>
  );
}

export default Contact;
