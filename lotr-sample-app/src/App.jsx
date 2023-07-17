import { useState } from "react";
import Header from "./components/Header.jsx";
import CharacterDetails from "./components/CharacterDetails.jsx";
import charactersData from "./assets/data/characters.json";
import "./App.css";

function App() {
  const [character, setCharacter] = useState(null);
  return (
    <>
      <Header />
      {charactersData.map((elem) => {
        return (
          <CharacterDetails
            key={elem.name}
            name={elem.name}
            race={elem.race}
            description={elem.description}
          ></CharacterDetails>
        );
      })}
    </>
  );
}

export default App;
