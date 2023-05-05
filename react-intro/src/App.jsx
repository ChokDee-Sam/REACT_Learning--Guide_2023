// import { Greetings } from "./Greetings";
import { AgeCounter } from "./AgeCounter";

export function App() {
  return (
    <>
      <h1>Hello to the React World</h1>

      {/* ------------------------------------------- */}
      {/* Premier projet */}
      {/* ------------------------------------------- */}

      {/* <Greetings
        firstName={"Rachel"}
        age={40}
        moto={{ color: "brown", year: 2022 }}
        doSomething={function () {
          console.log("hey");
        }}
        image={
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR37vTcqyZY5gY8NsiVQjkJMw-hyJfY164aqVFjmW2F&s"
            alt="exemple"
          />
        }
        isSunny // sous-entend "true"
      /> */}
      {/* ------------------------------------------- */}
      {/* Premier projet : FIN */}
      {/* ------------------------------------------- */}

      <AgeCounter/>
    </>
  );
}
