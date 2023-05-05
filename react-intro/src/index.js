// Recréer ce que Create-React-App auto-genère

// 1 - importer les outils React
import ReactDOM from "react-dom";

// 2 - Importer notre premier composant
import { App } from "./App"

// 3 - Cibler la div dont l'id est root
const divRoot = document.getElementById("root");

// 4 - Créer un noeud racine react à partir de la div root
//    (premier noeud du virtual dom)
const reactRoot = ReactDOM.createRoot(divRoot);

// 5 - Injecter notre premier composant le noeud racine
reactRoot.render(<App/>)