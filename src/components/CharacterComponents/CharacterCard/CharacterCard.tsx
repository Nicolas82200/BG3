import "./CharacterCard.css";
function CharacterCard(props: any) {
	return (
		<div
			className={`charCard ${props.isActive ? "is-active" : ""}`}
			style={{ "--glow-color": props.glowColor } as React.CSSProperties}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
		>
			<div className="picture">
				<img className="charImg" src={props.imgSrc} alt={props.charName} />
			</div>
		</div>
	);
}

export default CharacterCard;
