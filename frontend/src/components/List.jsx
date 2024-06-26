import { useState, useEffect } from 'react';
import axios from 'axios'
import Poster from "./Poster"

const List = () => {
    // const [username, setUserName] = useState(null)
    const [listData, setListData] = useState(null)
    const [data, setData] = useState([])
    const userData = JSON.parse(sessionStorage.getItem('user'));
    
    let posters = []

    // Get the username and store it in username
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

    // Get the User's list data (movieIDs) and store it in listData
    useEffect(() => {
        let data = JSON.stringify({
            "username": userData.username
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: "https://movie-curator-api.onrender.com/list",
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
        };
        axios.request(config)
        .then((res) => {
          setListData(res.data.map(data => data.movieId))
        })
        .catch((err) => {
          console.log(err)
        });
    }, [])

    // Get the image links for each poster from TMDB using their IDs.
    // Set the Data variable equal to the previous values and the image links generated in the for loop.
    useEffect(() => {
        if (listData !== null){
            setData([])
            for (let i = 0; i < listData.length; i++){
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `https://api.themoviedb.org/3/movie/${listData[i]}/images`,
                    headers: { 
                      'Authorization': import.meta.env.VITE_LETTERBOXD_TOKEN
                    },
                  }

                  axios.request(config)
                  .then((res) => {
                    setData(prevData => [...prevData, res.data.posters[0].file_path])
                  })
                  .catch((err) => {
                    console.log(err)
                  })
            }
        }
    }, [listData])

    // If Data is not empty, create the Poster components for each movie and store it in posters
    if (data.length !== 0){
        posters = data.map(link => (
            <Poster 
                key={link.id}
                posterPath = {`https://image.tmdb.org/t/p/original/${link}`}
            />
        ))
    }

    const content = (
        <>
            <div className="section--container">
                <div className="section--title">
                    <h3>WATCHED</h3>
                </div>
                <hr className="section--divider"></hr>
                <div className="movies--list--container">
                    <ul className= "movies--list profile--list">
                        {posters}
                    </ul>
                </div>
            </div>
        </>
        )
    return content
}
export default List