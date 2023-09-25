import { useState, useEffect } from 'react';
import axios from 'axios'
import Poster from "./Poster"

const List = () => {
    {/*Using those movie IDs, get the poster images using the API for TMDB.*/}
    const [listData, setListData] = useState(null)
    const [username, setUserName] = useState(null)
    const [data, setData] = useState([])
    
    let posters = []

    // Get the username
    useEffect(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3500/dashboard"
        }).then((res) => {
            setUserName(res.data.username)
            console.log(username)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    // Get the list data (movieIDs)
    useEffect(() => {
        let data = JSON.stringify({
            "username": username
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3500/list',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
        };
        axios.request(config)
        .then((res) => {
          setListData(res.data.map(data => data.movieId))
          //TypeError: res.data.map is not a function - running before res.data is received?
        })
        .catch((err) => {
          console.log(err);
        });
    }, [username])

    // Get the poster image links from TMDB using IDs and create an array of Poster components
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
                    console.log(data)
                  })
                  .catch((err) => {
                    console.log(err);
                  })
            }
        }
    }, [listData])

    if (data.length !== 0){
        posters = data.map(link => (
            <Poster 
                posterPath = {`https://image.tmdb.org/t/p/original/${link}`}
            />
        ))
        console.log(posters)
    }

    const content = (
        <>
            <div className="section--container">
                <div className="section--title">
                    <h3>WATCHED</h3>
                </div>
                <hr className="section--divider"></hr>
                <div className="movies--list--container">
                    <ul className="movies--list">
                        {posters}
                    </ul>
                </div>
            </div>
        </>
        )
    return content
}
export default List