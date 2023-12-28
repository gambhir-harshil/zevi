import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
interface SearchbarProps {
  handleIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  productPage?: any;
}

const Searchbar: React.FC<SearchbarProps> = ({ handleIsOpen, productPage }) => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setInput("");
    navigate("/products", { state: input });
  }

  return (
    <form
      action="submit"
      onSubmit={handleSubmit}
      className={`lg:w-[50%] w-[70%] mt-28 ${productPage && "mt-6"}`}
    >
      <input
        type="text"
        placeholder="Search"
        onFocus={() => {
          if (handleIsOpen) handleIsOpen(true);
        }}
        onBlur={() => {
          if (handleIsOpen) handleIsOpen(false);
        }}
        onChange={(e) => setInput(e.target.value)}
        className={`shadow-md lg:px-8 text-lg px-4 py-4 lg:text-2xl rounded-lg  w-full h-[60px] outline-none ${
          productPage && "border border-gray-200"
        }`}
      />
    </form>
  );
};

export default Searchbar;
