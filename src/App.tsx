import { useState } from "react";
import Searchbar from "./components/Searchbar";
import Modal from "./components/Modal";
import { generateFakeProducts } from "./utils/createFakeProducts";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const data = generateFakeProducts(5);
  console.log(data);
  return (
    <main className="relative h-screen px-5 bg-[url('./background.avif')] bg-cover gap-4 bg-center flex flex-col items-center">
      <Searchbar handleIsOpen={setIsOpen} />
      {isOpen && <Modal handleIsOpen={setIsOpen} />}
    </main>
  );
};

export default App;
