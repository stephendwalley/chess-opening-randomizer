import "../styles/DisplayOpening.css"

function DisplayOpening(props) {
    const opening = props.opening;

    return (
        <div>
            <p className="openingName">{opening.name}</p>
            <p className="openingMoves">{opening.moves}</p>
        </div>
    )
}

export { DisplayOpening }