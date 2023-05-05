import s from "./style.module.css"

export function Bonjour() {
  return <p className={`${s.box} ${s.box2}`} > Bonjour </p>;

  // Autre façon
  // return <p className={s.box + " "+ s.box2} > Bonjour </p>;
}
