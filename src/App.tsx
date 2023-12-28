import { useState } from "react";
import Searchbar from "./components/Searchbar";
import Modal from "./components/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Searchbar handleIsOpen={setIsOpen} home />
      {isOpen && <Modal />}
    </>
  );
};

export default App;
