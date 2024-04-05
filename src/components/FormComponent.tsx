import "../App.css";
import Contact from "./Contact";
import Address from "./Address";
import Payment from "./Payment";
import Conditions from "./Conditions";
import DataDisplay from "./DataDisplay";
import { useFormDataContext } from "../Context";

function FormComponent() {
  const userData = useFormDataContext();

  function handleDisplay() {
    if (
      userData.email &&
      userData.name &&
      userData.address &&
      userData.country &&
      userData.payment &&
      userData.conditions
    )
      userData.setDataIsEntered(true);
    else {
      userData.setDataIsEntered(false);
      window.alert("Unesite sve podatke i prihvatite uvjete");
    }
  }
  return (
    <>
      <div className="form">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <h4>Račun --&gt; Plaćanje</h4>
        <Contact />
        <Address />
        <Payment />
        <Conditions />
        <button onClick={handleDisplay}>Naruči</button>
      </div>
      {userData.dataIsEntered && <DataDisplay />}
    </>
  );
}

export default FormComponent;
