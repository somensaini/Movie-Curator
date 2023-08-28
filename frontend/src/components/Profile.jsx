const Profile = () => {
    const content = (
        <>
            <h2>Username</h2>
            <div className="section--container">
                <div className="section--title">
                    <h3>FAVORITE FILMS</h3>
                </div>
                <hr></hr>
                <div>
                    <ul className="movies--list">
                        {/* <Poster />
                        <Poster />
                        <Poster />
                        <Poster /> */}
                    </ul>
                </div>
            </div>
            
            <div className="section--container">
                <div className="section--title">
                    <h3>RECENT ACTIVITY</h3>
                </div>
                <hr></hr>
                <div>
                    <ul className="movies--list">
                        {/* <Poster />
                        <Poster />
                        <Poster />
                        <Poster /> */}
                    </ul>
                </div>
            </div>
        </>
    )

    return content
}
export default Profile

