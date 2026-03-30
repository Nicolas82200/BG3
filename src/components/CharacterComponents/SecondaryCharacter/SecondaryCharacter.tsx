import "./SecondaryCharacter.css";
import { useState, useRef } from "react";
import { CLASS_LOGOS, RACE_LOGOS } from "../../../data/links";
import halsinAvatar from "../../../assets/Character/SecondaryCharacter/avatarHalsin.png";
import mintharaAvatar from "../../../assets/Character/SecondaryCharacter/avatarMinthara.png";
import jaheiraAvatar from "../../../assets/Character/SecondaryCharacter/avatarJaheira.png";
import minscAvatar from "../../../assets/Character/SecondaryCharacter/avatarMinsc.png";
import CharacterCard from "../../../components/CharacterComponents/CharacterCard/CharacterCard";

const secondaryCharacters = [
	{
		name: "Halsin",
		class: "Druide",
		summary:
			"Archidruide respecté et protecteur de la nature, Halsin est profondément lié à l’équilibre du monde. Calme et sage, il possède une grande force et un sens du devoir envers les terres sauvages.",
		origin: "Bosquet d’Émeraude",
		race: "Elfe",
		imgSrc: halsinAvatar,
		id: 0,
		glowColor: "#22c55e",
	},
	{
		name: "Minthara",
		class: "Paladin",
		summary:
			"Guerrière drow impitoyable et déterminée, Minthara suit une voie guidée par la foi et la conquête. Son ambition et sa discipline la rendent redoutable sur le champ de bataille.",
		origin: "Outreterre",
		race: "Drow",
		imgSrc: mintharaAvatar,
		id: 1,
		glowColor: "#a855f7",
	},
	{
		name: "Jaheira",
		class: "Druide",
		summary:
			"Héroïne légendaire et vétérane des conflits passés, Jaheira est une combattante expérimentée avec un fort sens de la justice. Elle allie sagesse, stratégie et puissance naturelle.",
		origin: "Porte de Baldur",
		race: "DemiElfe",
		imgSrc: jaheiraAvatar,
		id: 2,
		glowColor: "#84cc16",
	},
	{
		name: "Minsc",
		class: "Rôdeur",
		summary:
			"Aventurier aussi courageux qu’imprévisible, Minsc est connu pour sa force brute et son cœur pur. Toujours accompagné de son fidèle compagnon, il combat le mal avec enthousiasme et détermination.",
		origin: "Rashemen",
		race: "Humain",
		imgSrc: minscAvatar,
		id: 3,
		glowColor: "#facc15",
	},
];
function SecondaryCharacter() {
	const [hoveredCharacter, setHoveredCharacter] = useState<
		(typeof secondaryCharacters)[0] | null
	>(null);
	const leaveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

	const hasAppearedOnce = useRef(false);

	const handleMouseEnter = (character: (typeof secondaryCharacters)[0]) => {
		if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
		setHoveredCharacter(character);
		hasAppearedOnce.current = true;
	};
	const handleMouseLeave = () => {
		leaveTimeout.current = setTimeout(() => {
			setHoveredCharacter(null);
		}, 200);
	};
	return (
		<section className="secCharGlobal">
			<h2 className="secCharacterTypeTitle">Les personnages d'Origine</h2>
			<section
				className={`secContainerCard ${hoveredCharacter ? "is-hovered" : ""}`}
			>
				{secondaryCharacters.map((character) => {
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
							isActive={hoveredCharacter?.id === character.id}
							onMouseEnter={() => handleMouseEnter(character)}
							onMouseLeave={handleMouseLeave}
						/>
					);
				})}
			</section>

			{hoveredCharacter && (
				<section
					className="secCardInfo"
					onMouseEnter={() => {
						if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
					}}
					onMouseLeave={handleMouseLeave}
				>
					<h2 className="cardNameTitle">{hoveredCharacter.name}</h2>
					<div style={{ gridArea: "classe" }} className="cardInfoClass">
						<h3 className="cardInfoTitle">Classe :</h3>
						<img
							className="cardClassLogo"
							src={
								CLASS_LOGOS[hoveredCharacter.class as keyof typeof CLASS_LOGOS]
							}
							alt={hoveredCharacter.class}
						/>
					</div>
					<div style={{ gridArea: "description" }} className="cardInfoSummary">
						<p className="cardTextInfo">{hoveredCharacter.summary}</p>
					</div>
					<div style={{ gridArea: "race" }} className="cardInfoRace">
						<h3 className="cardInfoTitle">Race :</h3>
						<img
							className="cardRaceLogo"
							src={RACE_LOGOS[hoveredCharacter.race as keyof typeof RACE_LOGOS]}
							alt={hoveredCharacter.race}
						/>
					</div>
				</section>
			)}
		</section>
	);
}

export default SecondaryCharacter;
