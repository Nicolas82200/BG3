import "./CharacterCard.css";
function CharacterCard(props) {
	console.log(props.name);
	return (
		<div
			className="charCard"
			style={{ "--glow-color": props.glowColor } as React.CSSProperties}
		>
			<div className="picture">
				<img className="charImg" src={props.imgSrc} alt={props.charName} />
			</div>
			<div className="charInfosDiv">
				<h2 className="charName">{props.charName}</h2>
				<h3 className="secondaryTitleClass">Classe :</h3>
				<p className="charInfos">{props.charClass}</p>
				<h3 className="secondaryTitleClass">Description :</h3>
				<p className="charInfos">{props.charSummary}</p>
				<h3 className="secondaryTitleClass">Race :</h3>
				<p className="charInfos">{props.charRace}</p>
				<h3 className="secondaryTitleClass">Origine :</h3>
				<p className="charInfos">{props.charOrigin}</p>
			</div>
		</div>
	);
}

export default CharacterCard;
