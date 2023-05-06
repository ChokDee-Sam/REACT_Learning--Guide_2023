import s from "./style.module.css";
import { MenuListItem } from "../MenuListItem/MenuListItem";
import { DIFFICULTIES } from "./constant";

export function MenuList({ onItemClick, difficulty }) {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((diff) => (
        <MenuListItem
          onClick={onItemClick}
          difficulty={diff}
          isSelected={difficulty === diff}
        />
      ))}
      {/* -------------------------------------- */}
      {/* SANS LE MAP */}
      {/* -------------------------------------- */}

      {/* <MenuListItem
        onClick={onItemClick}
        difficulty="Low"
        isSelected={difficulty === "Low"}
      />
      <MenuListItem
        onClick={onItemClick}
        difficulty="Medium"
        isSelected={difficulty === "Medium"}
      />
      <MenuListItem
        onClick={onItemClick}
        difficulty="High"
        isSelected={difficulty === "High"}
      />
      <MenuListItem
        onClick={onItemClick}
        difficulty="Insane"
        isSelected={difficulty === "Insane"}
      /> */}

      {/* -------------------------------------- */}
      {/* -------------------------------------- */}
    </div>
  );
}
