import { useState } from "react";
import Searchbar from "./components/Searchbar";
import Modal from "./components/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <main className="relative h-screen px-5 bg-[url('./background.avif')] bg-cover gap-4 bg-center flex flex-col items-center">
      <Searchbar handleIsOpen={setIsOpen} />
      {isOpen && <Modal />}
    </main>
  );
};

export default App;
