import { useState, useEffect } from 'react';
import axios from 'axios'
import Poster from "./Poster"

const Profile = () => {
    // const [username, setUserName] = useState(null)
    const [userListData, setUserListData] = useState(null)
    const [userRecentData, setUserRecentData] = useState(null)
    const [favoritesPosters, setFavoritesPosters] = useState([])
    const [recentPosters, setRecentPosters] = useState([])
    const userData = JSON.parse(sessionStorage.getItem('user'));
    
    let favorites = []
    let recents = []

    // Get the username
    // useEffect(() => {
    //     axios({
    //         method: "GET",
    //         url: "https://movie-curator-api.onrender.com/dashboard"
    //     }).then((res) => {
    //         setUserName(res.data.username)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }, [])

    // Get the User's list and filter the list to include only favorites
    useEffect(() => {
        let data = JSON.stringify({
            "username": userData.username
        })
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: "https://movie-curator-api.onrender.com/list",
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
        }
        axios.request(config)
        .then((res) => {
            //Filter the data to only include favorites
            if (Array.isArray(res.data)){
                setUserListData(res.data.filter(x => x.isFavorite === true).map(x => x.movieId))
            }
            
            //Reverse the data to show latest entries first
            if (Array.isArray(res.data)){
                setUserRecentData(res.data.map(x => x.movieId).reverse())
            }            
        })
        .catch((err) => {
          console.log(err)
        })
    }, [])
    
    // Display the first 5 favorites on the page
    useEffect(() => {
        if (userListData !== null){
            setFavoritesPosters([])
            for (let i = 0; i < userListData.length; i++){
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `https://api.themoviedb.org/3/movie/${userListData[i]}/images`,
                    headers: { 
                      'Authorization': import.meta.env.VITE_LETTERBOXD_TOKEN
                    },
                  }
                  axios.request(config)
                  .then((res) => {
                    setFavoritesPosters(prevData => [...prevData, res.data.posters[0].file_path])
                  })
                  .catch((err) => {
                    console.log(err);
                  })
            }
        }
    }, [userListData])

    //Display the first 5 recents on the page
    useEffect(() => {
        if (userRecentData !== null){
            setRecentPosters([])
            for (let i = 0; i < 5; i++){
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `https://api.themoviedb.org/3/movie/${userRecentData[i]}/images`,
                    headers: { 
                      'Authorization': import.meta.env.VITE_LETTERBOXD_TOKEN
                    },
                  }
                  axios.request(config)
                  .then((res) => {
                    setRecentPosters(prevData => [...prevData, res.data.posters[0].file_path])
                  })
                  .catch((err) => {
                    console.log(err)
                  })
            }
        }
    }, [userRecentData])

    // Generate the Poster components for the favorites
    if (favoritesPosters.length !== 0){
        favorites = favoritesPosters.map(link => (
            <Poster 
                key={link.id}
                posterPath = {`https://image.tmdb.org/t/p/original/${link}`}
            />
        ))
    }

    // Generate the Poster components for the recents
    if (recentPosters.length !== 0){
        recents = recentPosters.map(link => (
            <Poster key={link.id}
                posterPath = {`https://image.tmdb.org/t/p/original/${link}`}
            />
        ))
    }

    const content = (
        <>
            <div className="section--container">
                <div className="section--title">
                    <h3>FAVORITE FILMS</h3>
                </div>
                <hr className="section--divider"></hr>
                <div className="movies--list--container">
                    <ul className="movies--list profile--list">
                        {favorites}
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
                        {recents}
                    </ul>
                </div>
            </div>
        </>
    )

    return content
}
export default Profile