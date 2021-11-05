import styled from 'styled-components'

export const Container = styled.header`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 40px 35px 100px 35px;

  @media (min-width: 560px) {
    width: 37rem;
  }
`

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
`
