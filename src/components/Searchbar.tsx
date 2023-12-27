interface SearchbarProps {
  handleIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Searchbar: React.FC<SearchbarProps> = ({ handleIsOpen }) => {
  return (
    <form action="submit" className="lg:w-[50%] w-[70%]">
      <input
        type="text"
        placeholder="Search"
        onFocus={() => handleIsOpen(true)}
        onBlur={() => handleIsOpen(false)}
        className="shadow-md lg:px-8 text-lg px-4 py-4 lg:text-2xl rounded-lg  w-full h-[60px] outline-none mt-28"
      />
    </form>
  );
};

export default Searchbar;
