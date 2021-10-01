export const fetchMovies = async () => {
  const apiKey = '7315ec59ea2264da1fa4f4eb8d647853'

  return await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  )
    .then(res => res.json())
    .then(data => data.results)
    .catch(err => console.error(err))
}
