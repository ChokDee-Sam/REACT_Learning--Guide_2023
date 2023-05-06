import { useState } from "react";
import { AgeDisplay } from "./AgeDisplay";



export function AgeCounter(props) {
  const [age, setAge] = useState(30);
  // let age = 30 // ne pas faire ça

  function increaseAge() {
    setAge(age + 1);
    // age++ // ne pas faire ça
  }

  return (
    <>
      <button onClick={increaseAge}>Increase Age</button>
      <AgeDisplay age={age} />
    </>
  );
}
