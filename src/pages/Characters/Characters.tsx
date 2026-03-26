import CharacterCard from "../../components/CharacterCard/CharacterCard";
import "./Characters.css";

const mainCharacters = [
	{
		name: "Astarion",
		class: "Roublard",
		summary:
			"Vampire esclave manipulateur et sarcastique qui cherche à se libérer de son maître.",
		origin: "Porte de Baldur",
		race: "Elfe",
		imgSrc:
			"https://bg3.wiki/w/images/thumb/3/3c/Astarion.png/480px-Astarion.png.webp",
		id: 0,
		glowColor: "#c084fc",
	},
	{
		name: "Ombrecoeur",
		class: "Clerc",
		summary: "Prêtresse mystérieuse de Shar avec des souvenirs perdus.",
		origin: "Ordre de Shar",
		race: "Humaine",
		imgSrc:
			"https://bg3.wiki/w/images/thumb/f/f9/Shadowheart.png/480px-Shadowheart.png.webp",
		id: 1,
		glowColor: "#7c3aed",
	},
	{
		name: "Gayle",
		class: "Magicien",
		summary: "Mage talentueux avec une bombe magique dans la poitrine.",
		origin: "Eauprofonde",
		race: "Humain",
		imgSrc: "https://bg3.wiki/w/images/thumb/f/fd/Gale.png/480px-Gale.png.webp",
		id: 2,
		glowColor: "#3b82f6",
	},
	{
		name: "Lae'zel",
		class: "Guerrier",
		summary: "Guerrière githyanki disciplinée cherchant un remède au parasite.",
		origin: "Crèche githyanki",
		race: "Githyanki",
		imgSrc:
			"https://bg3.wiki/w/images/thumb/3/3c/Laezel.png/480px-Laezel.png.webp",
		id: 3,
		glowColor: "#4ade80",
	},
	{
		name: "Wyll",
		class: "Occultiste",
		summary: "La 'Lame des Frontières', héros lié à un démon par un pacte.",
		origin: "Porte de Baldur",
		race: "Humain",
		imgSrc: "https://bg3.wiki/w/images/thumb/2/25/Wyll.png/480px-Wyll.png.webp",
		id: 4,
		glowColor: "#f59e0b",
	},
	{
		name: "Karlach",
		class: "Barbare",
		summary: "Guerrière tieffeline avec un cœur infernal en fusion.",
		origin: "Averne",
		race: "Tieffelin",
		imgSrc:
			"https://bg3.wiki/w/images/thumb/b/b1/Karlach.png/480px-Karlach.png.webp",
		id: 5,
		glowColor: "#f97316",
	},
];

function Characters() {
	return (
		<section className="container">
			{mainCharacters.map((character) => {
				return (
					<CharacterCard
						key={character.id}
						imgSrc={character.imgSrc}
						charName={character.name}
						charOrigin={character.origin}
						charSummary={character.summary}
						charRace={character.race}
						charClass={character.class}
						glowColor={character.glowColor}
					/>
				);
			})}
		</section>
	);
}

export default Characters;
