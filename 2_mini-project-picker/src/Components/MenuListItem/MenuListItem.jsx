import s from "./style.module.css";
import { useState } from "react";

export function MenuListItem({ onClick, difficulty, isSelected }) {
  function getBackgroundColor() {
    if (isSelected) {
      return "#26baea";
    } else if (isHovered) {
      return "#a5e9ff";
    } else {
      return "#eff0ef";
    }
  }

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={s.container}
      style={{ backgroundColor: getBackgroundColor() }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(difficulty)}
    >
      Set to : {difficulty}
    </div>
  );
}
