function Box(props) {
    const isGuessed = props.guessedLetters.includes(props.char);

    return (
        <div className="col-auto">
            <div className="rounded p-2 text-center box d-flex justify-content-center align-items-center">
                {isGuessed ? props.char.toUpperCase() : ""}
            </div>
        </div>
    );
}

export default Box;