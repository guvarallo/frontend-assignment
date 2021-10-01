import styled from 'styled-components'

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalWrapper = styled.div`
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

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  color: #141414;
  margin: 1.25rem;
  p {
    margin-bottom: 1rem;
  }
`
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #141414;
  padding-top: 6rem;
`

export const ModalTitle = styled.h1`
  display: flex;
  align-items: center;
  height: 4rem;
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const CloseModalButton = styled.div`
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

export const Image = styled.img`
  width: 16.5rem;
  height: 24.5rem;
  object-fit: cover;
`

export const Section = styled.p`
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`
