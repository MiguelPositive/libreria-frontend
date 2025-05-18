import { useContext } from "react";
import { store } from "../../../context/Context";
import Input from "./Input";

const SearchInput = () => {
  const { setSearchTerm, filteredBooks } = useContext(store);

  const handleChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term); // Guarda el término de búsqueda
    filteredBooks(term); // Ejecuta la búsqueda
  };

  return (
    <Input
      type="text"
      placeholder="NOMBRE DEL LIBRO"
      icon="bi bi-search"
      handleChange={handleChange}
    />
  );
};

export default SearchInput;
