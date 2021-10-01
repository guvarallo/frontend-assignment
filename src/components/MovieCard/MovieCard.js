import { IMAGE_URL_PREFIX } from '../App'
import {
  Image,
  ImageWrapper,
  Title,
  VoteAverageText,
  VoteAverageWrapper
} from './MovieCard.styles'

export const MovieCard = ({ movie, index, handleOpenModal }) => {
  return (
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
  )
}
