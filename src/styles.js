import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 20rem;
  background-image: url(${(props) =>
    props.theme.colors.backgroundHeaderMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 560px) {
    background-image: url(${(props) =>
      props.theme.colors.backgroundHeaderDesktop});
  }
`

export const TodoContainer = styled.div``
