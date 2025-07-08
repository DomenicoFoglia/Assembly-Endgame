function Box({ char, guessedLetters, showAll }) {
    const isGuessed = guessedLetters.includes(char);
    const showLetter = isGuessed || showAll;

    const style = {
        backgroundColor: !showLetter
        ? "#444"               
        : !isGuessed && showAll
        ? "red"                
        : "transparent",       
        color: showLetter ? "white" : "transparent", 
        fontWeight: "bold",
    };

    return (
        <div className="col-auto">
        <div
            className="rounded p-2 text-center box d-flex justify-content-center align-items-center"
            style={style}
        >
            {showLetter ? char.toUpperCase() : ""}
        </div>
        </div>
    );
}

export default Box;