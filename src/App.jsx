import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    "The Book of Joy",
    "Wonder",
    "Tuesdays with Morrie",
    "The Five People You Meet in Heaven",
    "A Man Called Ove",
    "The Boy, the Mole, the Fox and the Horse",
    "The Alchemist",
    "The Gifts of Imperfection",
    "The Art of Happiness",
    "The Compassionate Mind",
    "Man's Search for Meaning",
    "The Little Prince",
  ]);
  const [filteredBook, setBooks1] = useState(books);
  const [input, setInput] = useState("");
  const search = (e) => {
    const input1 = e.target.value;
    setInput(input1);
    const filtered = books.filter((val) =>
      val.toLowerCase().startsWith(input1.toLowerCase()),
    );
    setBooks1(filtered);
  };
  return (
    <>
      <div className="container">
        <input type="text" onChange={search} value={input} />
        <ul>
          {filteredBook.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
