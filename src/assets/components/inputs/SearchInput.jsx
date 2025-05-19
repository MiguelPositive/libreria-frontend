import { useContext } from "react";
import { store } from "../../../context/Context";
import Input from "./Input";

const SearchInput = ({ placeholder, handleChange }) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      icon="bi bi-search"
      handleChange={handleChange}
    />
  );
};

export default SearchInput;
