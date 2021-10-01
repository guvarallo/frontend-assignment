import moment from 'moment'
import React, { useRef, useEffect, useCallback } from 'react'
import { IMAGE_URL_PREFIX } from '../App'
import {
  Background,
  CloseModalButton,
  Image,
  LeftContent,
  ModalTitle,
  ModalWrapper,
  RightContent,
  Section
} from './Modal.styles'

export const Modal = ({ movie, openModal, setOpenModal }) => {
  const modalRef = useRef()

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setOpenModal(false)
    }
  }

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && openModal) {
        setOpenModal(false)
        console.log('I pressed')
      }
    },
    [setOpenModal, openModal]
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <>
      {openModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper openModal={openModal}>
            <LeftContent>
              <ModalTitle>{movie.original_title}</ModalTitle>
              <Image
                src={IMAGE_URL_PREFIX + movie.poster_path}
                alt={movie.original_title}
              />
            </LeftContent>
            <RightContent>
              <Section>
                {`Release date: ${moment(movie.release_date).format(
                  'MMMM Do, YYYY'
                )}`}
              </Section>
              <Section>{movie.overview}</Section>
              <Section>{`${movie.vote_average} / 10 (${movie.vote_count} total votes)`}</Section>
            </RightContent>
            <CloseModalButton
              aria-label='Close modal'
              typeof={'button'}
              onClick={() => setOpenModal(prev => !prev)}
            >
              x
            </CloseModalButton>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  )
}
