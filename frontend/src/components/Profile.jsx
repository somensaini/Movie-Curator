import Poster from "./Poster"

const Profile = () => {
    const content = (
        <>
            <div className="section--container">
                <div className="section--title">
                    <h3>FAVORITE FILMS</h3>
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
            
            <div className="section--container">
                <div className="section--title">
                    <h3>RECENT ACTIVITY</h3>
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
export default Profile

