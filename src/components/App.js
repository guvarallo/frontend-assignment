import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { fetchMovies } from '../api/MovieAPI'
import logo from '../images/logo.svg'
import { GlobalStyle } from '../styles'
import { Modal } from './Modal'
import { MovieCard } from './MovieCard'

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Logo = styled.div`
  border-bottom: 1px solid #c0c4cc;
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

  return (
    <>
      <GlobalStyle />
      <Logo>
        <img src={logo} alt='Timescale' />
      </Logo>
      <AppContainer>
        {movies.map((movie, index) => (
          <MovieCard
            key={movie.overview}
            movie={movie}
            index={index}
            handleOpenModal={handleOpenModal}
          />
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
