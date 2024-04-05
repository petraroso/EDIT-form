import { useFormDataContext } from "../Context";
import "../App.css";

function Payment() {
  //using custom hook
  const userData = useFormDataContext();

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    userData.setPayment(e.target.value);
  };
  return (
    <div className="container">
      <p>Način plaćanja</p>
      <label htmlFor="pouzece">
        <input
          type="radio"
          id="pouzece"
          name="payment"
          checked={userData.payment === "Pouzeće"}
          value={"Pouzeće"}
          onChange={handlePaymentChange}
        ></input>
        Pouzeće
      </label>
      <label htmlFor="kartica">
        <input
          type="radio"
          id="kartica"
          name="payment"
          value={"Kartica"}
          onChange={handlePaymentChange}
        ></input>
        Kartica
      </label>
    </div>
  );
}

export default Payment;
