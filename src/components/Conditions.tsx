import { useFormDataContext } from "../Context";
import "../App.css";

function Conditions() {
  //using custom hook
  const userData = useFormDataContext();

  const handleConditionsChange = () => {
    userData.setConditions(!userData.conditions);
  };
  return (
    <div className="container">
      <label htmlFor="conditions">
        <input
          type="checkbox"
          id="conditions"
          checked={userData.conditions}
          onChange={handleConditionsChange}
        ></input>
        Prihvaćam uvjete narudžbe
      </label>
    </div>
  );
}

export default Conditions;
