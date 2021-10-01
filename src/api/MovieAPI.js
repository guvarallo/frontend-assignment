export const fetchMovies = async () => {
  const apiKey = '7315ec59ea2264da1fa4f4eb8d647853'

  return await fetch(
    `https://api.themoviedb.org/3/movie/76341?api_key=${apiKey}`
  )
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err))
}
