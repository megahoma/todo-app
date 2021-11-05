import styled from 'styled-components'

export const SwitcherIcon = styled.div`
  background-image: url(${(props) => props.theme.colors.iconSwitch});
  background-repeat: no-repeat;
  background-position: center;
  width: 40px;
  height: 40px;

  &:hover {
    cursor: pointer;
  }
`
