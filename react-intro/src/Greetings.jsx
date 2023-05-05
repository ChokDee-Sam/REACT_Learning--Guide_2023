export function Greetings(props) {
  console.log(props);

  if (props.age > 100) {
    return <p> Tu n'es pas tout jeune </p>;
  } else {
    return (
      <ul>
        <li>Hello {props.firstName} </li>
        <li>You are {props.age} years old </li>
        <li>You drive a {props.moto.color} motorcycle </li>
        <li>{props.image}</li>
        <li>{props.children}</li>
        {/* <li> {props.isSunny && "il fait beau"} </li> */}
        <li> {props.isSunny ? <ItsSunny /> : <ItsRainy />} </li>
      </ul>
    );
  }
}

function ItsSunny() {
  return <h1>Le temps est superbe !!</h1>;
}

function ItsRainy() {
  return <h1>Il pleut</h1>;
}
