import { useFormDataContext } from "../Context";
import "../App.css";

function DataDisplay() {
  //using custom hook
  const userData = useFormDataContext();

  return (
    <div className="dataDisplay">
      <h4>Sažetak podataka</h4>
      <p>Kontakt: {userData.email}</p>
      <p>Ime: {userData.name}</p>
      <p>Država: {userData.country}</p>
      <p>Adresa: {userData.address}</p>
      <p>Način plaćanja: {userData.payment}</p>
    </div>
  );
}

export default DataDisplay;
