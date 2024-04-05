import { createContext, useContext } from "react";

type ContextType = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  payment: string;
  setPayment: React.Dispatch<React.SetStateAction<string>>;
  conditions: boolean;
  setConditions: React.Dispatch<React.SetStateAction<boolean>>;
  dataIsEntered: boolean;
  setDataIsEntered: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FormDataContext = createContext<ContextType | undefined>(
  undefined
);

//since there is no access to the email, setEmail, name ... values
//to handle values being unknown
//custom hook
export function useFormDataContext() {
  const userData = useContext(FormDataContext);
  if (userData === undefined) {
    throw new Error("useFormDataContext must be used with FormDataContext");
  }
  return userData;
}
