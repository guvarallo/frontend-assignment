import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { fetchMovies } from '../api/MovieAPI'
import logo from '../images/logo.svg'

const AppContainer = styled.div`
  max-width: 75rem;
`

const ImageWrapper = styled.div`
  width: 17.625rem;
  height: 21.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.625rem;
  background: #ffffff;
  border: 1px solid #e1e3e6;
  box-sizing: border-box;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`

const Image = styled.img`
  width: 17.5rem;
  height: 18.875rem;
  object-fit: cover;
  border-radius: 8px;
`

const Title = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
`

const App = () => {
  const [movies, setMovies] = useState([])
  const imageURLPrefix = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies()
      setMovies(data)
    }
    fetchData()
  }, [])

  return (
    <AppContainer>
      <img src={logo} alt='Timescale' />
      {movies.map(movie => (
        <ImageWrapper key={movie.overview}>
          <Image
            src={imageURLPrefix + movie.poster_path}
            alt={movie.original_title}
          />
          <Title>{movie.original_title}</Title>
        </ImageWrapper>
      ))}
    </AppContainer>
  )
}

export default App
