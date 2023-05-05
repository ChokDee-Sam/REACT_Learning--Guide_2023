export function Greetings(props) {
  console.log(props);

  return (
    <ul>
      <li>Hello {props.firstName} </li>
      <li>You are {props.age} years old </li>
      <li>You drive a {props.moto.color} motorcycle </li>
      <li>{props.image}</li>
      <li>{props.children}</li>

    </ul>
  );
}
