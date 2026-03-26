import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Equipments from "./pages/Equipment/Equipments";
import Classes from "./pages/Classes/Classe";
import Abilities from "./pages/Abilities/Competence";
import Story from "./pages/Story/Story";
import Characters from "./pages/Characters/Characters";
import Home from "./pages/Home/Home";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/personnage" element={<Characters />} />
				<Route path="/histoire" element={<Story />} />
				<Route path="/equipement" element={<Equipments />} />
				<Route path="/classe" element={<Classes />} />
				<Route path="/competence" element={<Abilities />} />
			</Routes>
		</>
	);
}

export default App;
