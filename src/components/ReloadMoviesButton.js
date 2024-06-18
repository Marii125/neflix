import "./ReloadMoviesButton.css"

const ReloadMoviesButton = (props) => {
    return (
        <button className="reload-movies-button"onClick={props.reloadButton}>Znova načtení</button>
    )
}

export default ReloadMoviesButton