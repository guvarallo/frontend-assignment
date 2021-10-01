import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { fetchMovies } from '../api/MovieAPI'
import logo from '../images/logo.svg'

const AppContainer = styled.div`
  max-width: 75rem;
  display: flex;
  flex-wrap: wrap;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
`

const ImageWrapper = styled.div`
  width: 17.625rem;
  height: 21.75rem;
  position: relative;
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
  border-radius: 7px 7px 0px 0px;
`

const VoteAverageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 34px;
  height: 34px;
  left: 14px;
  top: 14px;
  z-index: 1000;

  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 50%;
`

const VoteAverageText = styled.p`
  font-size: 12px;
  font-weight: bold;
`

const Title = styled.p``

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

  console.log(movies)

  return (
    <>
      <img src={logo} alt='Timescale' />
      <AppContainer>
        {movies.map(movie => (
          <ImageWrapper key={movie.overview}>
            <VoteAverageWrapper>
              <VoteAverageText>{movie.vote_average}</VoteAverageText>
            </VoteAverageWrapper>
            <Image
              src={imageURLPrefix + movie.poster_path}
              alt={movie.original_title}
            />
            <Title>{movie.original_title}</Title>
          </ImageWrapper>
        ))}
      </AppContainer>
    </>
  )
}

export default App
