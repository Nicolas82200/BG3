import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

import Equipments from "./pages/Equipment/Equipments";
import Classes from "./pages/Classes/Classe";
import Abilities from "./pages/Abilities/Competence";
import Story from "./pages/Story/Story";
import Characters from "./pages/Characters/Characters";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
	{
		path: "/", // ← ajoute ce path sur le layout
		element: <App />,
		children: [
			{ index: true, element: <Home /> }, // ← index route au lieu de path: "/"
			{ path: "equipments", element: <Equipments /> },
			{ path: "classes", element: <Classes /> },
			{ path: "abilities", element: <Abilities /> },
			{ path: "story", element: <Story /> },
			{ path: "characters", element: <Characters /> },
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
}
