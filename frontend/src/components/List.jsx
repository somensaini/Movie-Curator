import Poster from "./Poster"

const List = () => {
    {/* When the page loads, access the user's list document using a GET request to the server.
    In this GET request, use the user's username. If that does not work, use their ID (will have to change request parameters in controller in this case.)
    Using those movie IDs, get the poster images using the API for TMDB. */}

    const content = (
        <>
            <div className="section--container">
                <div className="section--title">
                    <h3>WATCHED</h3>
                </div>
                <hr className="section--divider"></hr>
                <div className="movies--list--container">
                    <ul className="movies--list">
                        <Poster />
                        <Poster />
                        <Poster />
                        <Poster />
                        <Poster />
                    </ul>
                </div>
            </div>
        </>
        )
    return content
}
export default List