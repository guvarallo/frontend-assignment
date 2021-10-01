import styled from 'styled-components'

export const ImageWrapper = styled.div`
  max-width: 17.5rem;
  min-width: 17.5rem;
  width: 25%;
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

export const VoteAverageText = styled.p`
  font-size: 12px;
  font-weight: bold;
`
export const Image = styled.img`
  width: 100%;
  height: 19.5rem;
  object-fit: cover;
  border-radius: 7px 7px 0px 0px;
`

export const Title = styled.p`
  padding: 1rem;
`

export const VoteAverageWrapper = styled.div`
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
