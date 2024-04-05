import { useState } from "react";
import "./App.css";

import { FormDataContext } from "./Context";
import FormComponent from "./components/FormComponent";

function App() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [country, setCountry] = useState<string>("Hrvatska");
  const [address, setAddress] = useState<string>("");
  const [payment, setPayment] = useState<string>("Pouzeće");
  const [conditions, setConditions] = useState<boolean>(false);
  const [dataIsEntered, setDataIsEntered] = useState<boolean>(false);
  return (
    <>
      <FormDataContext.Provider
        value={{
          email,
          setEmail,
          name,
          setName,
          country,
          setCountry,
          address,
          setAddress,
          payment,
          setPayment,
          conditions,
          setConditions,
          dataIsEntered,
          setDataIsEntered,
        }}
      >
        <FormComponent />
      </FormDataContext.Provider>
    </>
  );
}

export default App;
