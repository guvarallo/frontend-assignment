import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { fetchMovies } from '../api/MovieAPI'
import logo from '../images/logo.svg'
import { GlobalStyle } from '../styles'
import { Modal } from './Modal'

const AppContainer = styled.div`
  max-width: 75rem;
  display: flex;
  flex-wrap: wrap;
`

const ImageWrapper = styled.div`
  width: 17.625rem;
  height: 22.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.625rem;
  background: #ffffff;
  border: 1px solid #e1e3e6;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;
`

const Image = styled.img`
  width: 17.5rem;
  height: 19.5rem;
  object-fit: cover;
  border-radius: 7px 7px 0px 0px;
`

const Title = styled.p`
  padding: 1rem;
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

  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 50%;
`

const VoteAverageText = styled.p`
  font-size: 12px;
  font-weight: bold;
`

export const IMAGE_URL_PREFIX = 'https://image.tmdb.org/t/p/original'

const App = () => {
  const [movies, setMovies] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [movieIndex, setMovieIndex] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies()
      setMovies(data)
    }
    fetchData()
  }, [])

  const handleOpenModal = index => {
    setOpenModal(!openModal)
    setMovieIndex(index)
  }

  console.log(openModal)

  console.log(movies)

  return (
    <>
      <GlobalStyle />
      <img src={logo} alt='Timescale' />
      <AppContainer>
        {movies.map((movie, index) => (
          <ImageWrapper onClick={() => handleOpenModal(index)}>
            <VoteAverageWrapper>
              <VoteAverageText>{movie.vote_average}</VoteAverageText>
            </VoteAverageWrapper>
            <Image
              src={IMAGE_URL_PREFIX + movie.poster_path}
              alt={movie.original_title}
            />
            <Title>{movie.original_title}</Title>
          </ImageWrapper>
        ))}
        <Modal
          movie={movies[movieIndex]}
          openModal={openModal}
          setOpenModal={setOpenModal}
          style={{ backgroundColor: 'fff', zIndex: -1 }}
        />
      </AppContainer>
    </>
  )
}

export default App
