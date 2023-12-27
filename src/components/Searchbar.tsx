interface SearchbarProps {
  handleIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Searchbar: React.FC<SearchbarProps> = ({ handleIsOpen }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      onFocus={() => handleIsOpen(true)}
      onBlur={() => handleIsOpen(false)}
      className="shadow-md px-8 py-4 text-2xl rounded-lg lg:w-[50%] w-[70%] h-[60px] outline-none mt-28"
    />
  );
};

export default Searchbar;
