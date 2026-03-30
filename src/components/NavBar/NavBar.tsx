import { Link } from "react-router-dom";
import "./NavBar.css";
import bg3Logo from "../../assets/LogoBG3.png";

function NavBar() {
	return (
		<nav id="navBar">
			<Link to="/">
				<img id="navBar-Logo" src={bg3Logo} alt="logo BG3" />
			</Link>
			<ul id="navBar-ul">
				<li>
					<Link to="/characters">Personnages</Link>
				</li>
				<li>
					<Link to="/story">Histoire</Link>
				</li>
				<li>
					<Link to="/equipments">Equipements</Link>
				</li>
				<li>
					<Link to="/classes">Classes</Link>
				</li>
				<li>
					<Link to="/abilities">Compétences</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
