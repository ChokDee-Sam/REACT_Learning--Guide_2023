export function Car(props) {
  function onClick() {
    props.onCarClick(2);
  }

  return (
    <div>
      Je suis {"<Car/>"}
      {/* <button onClick={props.onCarClick}>click</button> */}
      {/* <button onClick={onClick}>click</button> */}
      <button onClick={() => props.onCarClick(2)}>click</button>
    </div>
  );
}
