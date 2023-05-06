import s from "./style.module.css";
import { useState } from "react";
import { MenuList } from "./Components/MenuList/MenuList";
import { DisplayDifficulty } from "./Components/DisplayDifficulty/DisplayDifficulty";

export function App() {
  // Défini la valeur de base, et prépare la futur modification
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  // Permet de modifier le State, avec la difficulté envoyée
  function updateDifficulty(difficulty) {
    setCurrentDifficulty(difficulty);
  }

  // Cette function là, on va devoir l'envoyer à MenuList
  //  pour que MenuList l'envoie à chaque MenuListItem
  //  pour que chaque MenuListItem puisse exécuter la fonction
  //  pour modifier le State
  //  pour que le State puisse modifier lee DisplayDifficulty

  return (
    <div>
      <h1 className={s.title}>Select your React Difficulty</h1>
      <div className={s.workspace}>
        <MenuList
          onItemClick={updateDifficulty}
          difficulty={currentDifficulty} // la couleur
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}

//
