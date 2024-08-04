import { useState, useEffect } from "react"
import Poster from "./Poster"

const Home = () => {
  const [discover, setDiscover] = useState([])
  const [popular, setPopular] = useState([])
  let userData = ""

  if (sessionStorage.getItem("user") === null) {
    sessionStorage.setItem("user", JSON.stringify(""))
  } else {
    userData = JSON.parse(sessionStorage.getItem("user"))
  }

  //Fetch API for Discover
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_LETTERBOXD_TOKEN,
      },
    }
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((res) => {
        setDiscover(res.results)
      })
      .catch((err) => console.error(err))
  }, [])

  //Fetch API for Popular
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_LETTERBOXD_TOKEN,
      },
    }
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((res) => {
        setPopular(res.results)
      })
      .catch((err) => console.error(err))
  }, [])

  // Create 6 Poster components for the New on Letterboxd section
  const discoverElements = discover
    .slice(0, 6)
    .map((movieElement) => (
      <Poster
        key={movieElement.id}
        posterPath={`https://image.tmdb.org/t/p/original/${movieElement.poster_path}`}
      />
    ))

  // Create 6 Poster components for the Popular on Letterboxd section
  const popularElements = popular
    .slice(6, 12)
    .map((popularElement) => (
      <Poster
        key={popularElement.id}
        posterPath={`https://image.tmdb.org/t/p/original/${popularElement.poster_path}`}
      />
    ))

  const content = (
    <>
      <h1 className="welcome">
        Welcome{" "}
        {userData !== ""
          ? `back ${
              userData.username[0].toUpperCase() + userData.username.slice(1)
            }`
          : "to Movie Curator"}
      </h1>

      <div className="section--container--home">
        <div className="section--title">
          <h3>NEW ON MOVIE CURATOR</h3>
        </div>

        <hr className="section--divider"></hr>

        <div className="movies--list--container">
          <ul className="movies--list--home">{discoverElements}</ul>
        </div>
      </div>

      <div className="section--container--home">
        <div className="section--title">
          <h3>POPULAR ON MOVIE CURATOR</h3>
        </div>

        <hr className="section--divider"></hr>

        <div className="movies--list--container">
          <ul className="movies--list--home">{popularElements}</ul>
        </div>
      </div>
    </>
  )
  return content
}
export default Home
