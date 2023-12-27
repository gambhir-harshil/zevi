const Searchbar = ({ handleIsOpen }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      onFocus={() => handleIsOpen(true)}
      onBlur={() => handleIsOpen(false)}
      className="shadow-md px-8 py-4 text-2xl rounded-lg lg:w-[50%] w-[70%] h-[60px] outline-none mt-40"
    />
  );
};

export default Searchbar;
