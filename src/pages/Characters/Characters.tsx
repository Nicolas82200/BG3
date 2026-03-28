import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { useState } from "react";
import { CLASS_LOGOS, RACE_LOGOS } from "../../data/links";
import "./Characters.css";
import karlachAvatar from "../../assets/Character/avatarKarlach.png";
import astarionAvatar from "../../assets/Character/avatarAstarion.png";
import galeAvatar from "../../assets/Character/avatarGale.png";
import laezelAvatar from "../../assets/Character/avatarLaezel.png";
import shadowheartAvatar from "../../assets/Character/avatarShadowheart.png";
import theDarkUrgeAvatar from "../../assets/Character/avatarTheDarkUrge.png";
import wyllAvatar from "../../assets/Character/avatarWyll.png";

const mainCharacters = [
	{
		name: "Astarion",
		class: "Roublard",
		summary:
			"Vampire elfe autrefois réduit en esclavage par un maître cruel, Astarion a passé des siècles à obéir, manipuler et survivre dans l’ombre. Charmeur, sarcastique et souvent cynique, il utilise l’humour et la séduction comme des armes pour garder le contrôle des situations. Derrière son arrogance apparente se cache une peur profonde de redevenir prisonnier et une obsession pour la liberté. Au fil de l’aventure, Astarion doit choisir entre rester le prédateur qu’on a fait de lui ou devenir quelqu’un de meilleur.",
		origin: "Porte de Baldur",
		race: "Elfe",
		imgSrc: astarionAvatar,
		id: 0,
		glowColor: "#c084fc",
	},
	{
		name: "Ombrecoeur",
		class: "Clerc",
		summary:
			"Prêtresse de Shar discrète, secrète et méfiante, Ombrecoeur souffre d’étranges pertes de mémoire qui cachent un passé bien plus complexe qu’elle ne le laisse paraître. Élevée dans la foi de la déesse de la nuit et des secrets, elle a appris à ne faire confiance à personne et à toujours garder ses véritables intentions cachées. Derrière son apparente froideur se cache pourtant une personne en conflit entre sa foi, son passé oublié et la personne qu’elle pourrait devenir si elle découvrait la vérité sur elle-même.",
		origin: "Ordre de Shar",
		race: "DemiElfe",
		imgSrc: shadowheartAvatar,
		id: 1,
		glowColor: "#7c3aed",
	},
	{
		name: "Gayle",
		class: "Magicien",
		summary:
			"Mage prodige originaire de la grande cité d’Eauprofonde, Gale est un érudit brillant, passionné par la magie et les connaissances anciennes. Poli, cultivé et souvent enthousiaste lorsqu’il parle d’artefacts ou de sorts anciens, il cache néanmoins un lourd secret : une expérience magique qui a mal tourné a laissé en lui une anomalie extrêmement dangereuse. Pour survivre, il doit constamment absorber de puissants artefacts magiques, ce qui fait de lui à la fois un allié précieux et une bombe à retardement.",
		origin: "Eauprofonde",
		race: "Humain",
		imgSrc: galeAvatar,
		id: 2,
		glowColor: "#3b82f6",
	},
	{
		name: "Lae'zel",
		class: "Guerrier",
		summary:
			"Guerrière githyanki fière, disciplinée et redoutable, Lae'zel a été élevée dans une culture où la force, la hiérarchie et la guerre sont les seules véritables valeurs. Directe, brutale et souvent méprisante envers les autres peuples, elle voit le monde comme un champ de bataille où seuls les plus forts survivent. Pourtant, au fil de son voyage loin de son peuple, elle pourrait découvrir que l’honneur, la loyauté et la vérité ne sont pas toujours ceux qu’on lui a enseignés.",
		origin: "Crèche githyanki",
		race: "Githyanki",
		imgSrc: laezelAvatar,
		id: 3,
		glowColor: "#4ade80",
	},
	{
		name: "Wyll",
		class: "Occultiste",
		summary:
			"Connu sous le nom de la Lame des Frontières, Wyll est un héros qui protège les innocents et combat les monstres qui menacent les peuples. Charismatique, courageux et noble, il incarne le héros parfait… du moins en apparence. Car ses pouvoirs viennent en réalité d’un pacte démoniaque qu’il a conclu pour sauver des vies, un pacte dont le prix est bien plus lourd qu’il ne veut l’admettre. Wyll doit vivre avec les conséquences de ce choix et décider s’il est encore un héros ou simplement un homme enchaîné à un démon.",
		origin: "Porte de Baldur",
		race: "Humain",
		imgSrc: wyllAvatar,
		id: 4,
		glowColor: "#f59e0b",
	},
	{
		name: "Karlach",
		class: "Barbare",
		summary:
			"Karlach est une tieffeline ancienne soldate ayant combattu dans les enfers de l’Averne pendant des années. Malgré son passé violent et son corps alimenté par un moteur infernal qui brûle en permanence dans sa poitrine, elle est joyeuse, énergique et profondément attachante. Elle savoure chaque instant de liberté avec une intensité rare, car elle sait que son cœur infernal pourrait s’arrêter à tout moment. Karlach représente la force, la liberté et la joie de vivre malgré une destinée tragique.",
		origin: "Averne",
		race: "Tieffelin",
		imgSrc: karlachAvatar,
		id: 5,
		glowColor: "#f97316",
	},
	{
		name: "Sombre Pulsion",
		class: "ADefinir",
		summary:
			"Le Sombre Pulsion est un personnage mystérieux souffrant d’amnésie et de pulsions violentes incontrôlables. Contrairement aux autres compagnons, son histoire est profondément liée à ses choix : résister à ses instincts ou les accepter. Des souvenirs sanglants, des voix dans son esprit et une étrange sensation de déjà-vu l’accompagnent partout. Son passé semble lié à quelque chose de sombre, de dangereux et de très ancien. Le Sombre Pulsion n’essaie pas seulement de sauver le monde, mais aussi de découvrir s’il est un monstre… ou quelqu’un qui peut encore être sauvé.",
		origin: "Inconnue",
		race: "ADefinir",
		imgSrc: theDarkUrgeAvatar,
		id: 6,
		glowColor: "#ef4444",
	},
];
// const secondaryCharacters = [
// 	{
// 		name: "Halsin",
// 		class: "Druide",
// 		summary:
// 			"Archidruide respecté du Bosquet d’Émeraude, Halsin est un homme profondément connecté à la nature et guidé par un fort sens de la justice. Sage, calme et protecteur, il voit le monde comme un équilibre fragile entre forces naturelles et corruption. Malgré son apparence imposante, il agit toujours avec réflexion et compassion. Il rejoint le groupe pour combattre les menaces qui pèsent sur la nature et restaurer l’équilibre là où il a été brisé.",
// 		origin: "Bosquet d’Émeraude",
// 		race: "Elfe des bois",
// 		imgSrc: halsinAvatar,
// 		id: 7,
// 		glowColor: "#22c55e",
// 	},
// 	{
// 		name: "Minthara",
// 		class: "Paladin",
// 		summary:
// 			"Drow noble et redoutable, Minthara est une guerrière impitoyable animée par une foi fanatique et une volonté de domination. Froide, calculatrice et autoritaire, elle croit fermement en la loi du plus fort et en la nécessité d’imposer l’ordre par la force. Pourtant, derrière cette façade dure se cache une personnalité complexe façonnée par la culture cruelle des profondeurs. Elle peut devenir une alliée redoutable… à condition de suivre son chemin.",
// 		origin: "Outreterre",
// 		race: "Elfe noir (Drow)",
// 		imgSrc: mintharaAvatar,
// 		id: 8,
// 		glowColor: "#a21caf",
// 	},
// 	{
// 		name: "Jaheira",
// 		class: "Druide",
// 		summary:
// 			"Héroïne légendaire et vétérane de nombreuses batailles, Jaheira est une figure emblématique des Royaumes Oubliés. Mi-druide, mi-guerrière, elle combine sagesse, expérience et détermination. Ayant déjà affronté des menaces majeures par le passé, elle garde une vision lucide et pragmatique du monde. Elle agit comme une guide pour les plus jeunes, tout en restant une combattante redoutable prête à défendre ce qui compte.",
// 		origin: "Harpers",
// 		race: "DemiElfe",
// 		imgSrc: jaheiraAvatar,
// 		id: 9,
// 		glowColor: "#84cc16",
// 	},
// 	{
// 		name: "Minsc",
// 		class: "Rôdeur",
// 		summary:
// 			"Minsc est un guerrier aussi courageux qu’imprévisible, célèbre pour sa force brute et son cœur immense. Accompagné de son fidèle hamster Boo, qu’il considère comme un compagnon héroïque, il combat le mal avec une énergie débordante et une logique parfois… unique. Derrière son apparente folie se cache une loyauté absolue et un sens du bien profondément ancré. Il est prêt à tout pour protéger les innocents.",
// 		origin: "Rashemen",
// 		race: "Humain",
// 		imgSrc: minscAvatar,
// 		id: 10,
// 		glowColor: "#eab308",
// 	},
// ];

function Characters() {
	const [hoveredCharacter, setHoveredCharacter] = useState<
		(typeof mainCharacters)[0] | null
	>(null);

	return (
		<main>
			<h2 className="characterTypeTitle">Les personnages d'Origine</h2>

			<section className="charGlobal">
				<section
					className={`containerCard ${hoveredCharacter ? "is-hovered" : ""}`}
				>
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
								onMouseEnter={() => setHoveredCharacter(character)}
								onMouseLeave={() => setHoveredCharacter(null)}
							/>
						);
					})}
				</section>
				{hoveredCharacter && (
					<section style={{ gridArea: "name" }} className="cardInfo">
						<h2 className="cardNameTitle">{hoveredCharacter.name}</h2>
						<div style={{ gridArea: "classe" }} className="cardInfoClass">
							<h3 className="cardInfoTitle">Classe :</h3>
							<img
								className="cardClassLogo"
								src={
									CLASS_LOGOS[
										hoveredCharacter.class as keyof typeof CLASS_LOGOS
									]
								}
								alt={hoveredCharacter.class}
							/>
						</div>
						<div
							style={{ gridArea: "description" }}
							className="cardInfoSummary"
						>
							<p className="cardTextInfo"> {hoveredCharacter.summary}</p>
						</div>
						<div style={{ gridArea: "race" }} className="cardInfoRace">
							<h3 className="cardInfoTitle">Race :</h3>
							<img
								className="cardRaceLogo"
								src={
									RACE_LOGOS[hoveredCharacter.race as keyof typeof RACE_LOGOS]
								}
								alt={hoveredCharacter.race}
							/>
						</div>
					</section>
				)}
			</section>
		</main>
	);
}

export default Characters;
