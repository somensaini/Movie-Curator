import { useState, useEffect } from 'react';
import axios from 'axios'
import Poster from "./Poster"

const List = () => {
    {/*Using those movie IDs, get the poster images using the API for TMDB.*/}
    const [listData, setListData] = useState(null)
    const [username, setUserName] = useState(null)
    let listPosters = []
    let posters

    // Get the username
    useEffect(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3500/dashboard"
        }).then((res) => {
            // console.log(res.data.username)
            setUserName(res.data.username)
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
        //   console.log(res.data.map(data => data.movieId))
          setListData(res.data.map(data => data.movieId))
        })
        .catch((error) => {
          console.log(error);
        });
    }, [username])

    // Get the poster image links from TMDB using IDs and create an array of Poster components
    useEffect(() => {
        if (listData !== null){
            for (let i = 0; i < listData.length; i++){
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `https://api.themoviedb.org/3/movie/${listData[i]}/images`,
                    headers: { 
                      'Authorization': import.meta.env.VITE_LETTERBOXD_TOKEN
                    },
                  };
                  axios.request(config)
                  .then((res) => {
                    console.log(res.data.posters[0].file_path)
                    listPosters.push(res.data.posters[0].file_path)
                    console.log(listPosters)
                    // there is something wrong with accessing the array
                    // maybe something wrong in setting listData because it is logging the wrong array first
                    // good luck
                  })
                  .catch((err) => {
                    console.log(err);
                  });
            }
            console.log('test')
            // posters = listPosters[0]
            // // <Poster 
            // //             posterPath = {`https://image.tmdb.org/t/p/original/${listPosters[0]}`}
            // //           />
            // console.log(posters) 
            // console.log([1, 2, 3])
        }
    }, [listData])

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
                        {/* <Poster />
                        <Poster />
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
export default List