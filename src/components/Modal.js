import moment from 'moment'
import React, { useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { IMAGE_URL_PREFIX } from './App'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled.div`
  width: 36.5rem;
  height: 32rem;
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 0.625rem;
`

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  color: #141414;
  margin: 1.25rem;
  p {
    margin-bottom: 1rem;
  }
`
const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #141414;
  padding-top: 6rem;
`

const ModalTitle = styled.h1`
  display: flex;
  align-items: center;
  height: 4rem;
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

const CloseModalButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
  z-index: 10;
  color: #000;
  font-size: 1.5rem;
  border: 1px solid #000;
  text-align: center;
`

const Image = styled.img`
  width: 16.5rem;
  height: 24.5rem;
  object-fit: cover;
`

const Section = styled.p`
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`

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
