import { Greetings } from "./Greetings";

export function App() {
  return (
    <>
      <h1>Hello to the React World</h1>
      <Greetings
        firstName={"Rachel"}
        age={30}
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
      />
    </>
  );
}
