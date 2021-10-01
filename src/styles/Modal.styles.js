import styled from 'styled-components'

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  width: ${props => {
    switch (props.size) {
      case 'lg':
        return '800'
      default:
        return '480'
    }
  }}px;
  margin: 40px auto;

  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.2s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.2s;
  }
`
