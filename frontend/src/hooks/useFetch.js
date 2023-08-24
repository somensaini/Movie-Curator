const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjAwNDg3NjA0ZDIzMzg5NGI0NWIyNjA2NGFlOTY4ZSIsInN1YiI6IjY0ZTNhZDJiYzYxM2NlMDEwYjhhOTFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NdkjPKyfd0wBo21LW5-ylfK9d4aPYk-gzW1Qqn8HnFM'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    