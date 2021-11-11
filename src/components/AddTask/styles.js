import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
  padding: 20px 0 20px 15px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.backgroundTable};
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.1);
`

export const Button = styled.button`
  width: 25px;
  height: 25px;
  margin-right: 1.5em;
  border: 1.5px solid ${(props) => props.theme.colors.textBorderTable};
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.backgroundTable};
  cursor: pointer;

  &:hover {
    border-color: var(--checkBackground);
  }
`

export const Input = styled.input`
  width: 90%;
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.textTable};
  background-color: ${(props) => props.theme.colors.backgroundTable};
  font-size: 1rem;
`
