import apiConfig from '../utils/apiKeys'

export const fetchMovies = async () => {
  const apiKey = apiConfig.apiKey

  return await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  )
    .then(res => res.json())
    .then(data => data.results)
    .catch(err => console.error(err))
}
