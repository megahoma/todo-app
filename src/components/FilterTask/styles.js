import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const DesctopPanel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 25px 15px 25px 15px;
  border-radius: 0 0 5px 5px;
  background-color: ${(props) => props.theme.colors.backgroundTable};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textBorderTable};
`

export const CounterItems = styled.p``
export const ButtonClear = styled.p`
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.textTable};
  }
`

export const MobilPanel = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 15px 20px 15px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.backgroundTable};
  color: ${(props) => props.theme.colors.textBorderTable};
`

export const ButtonMobile = styled.p`
  padding: 0 10px 0 10px;
  color: ${(props) => props.theme.colors[props.color]};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.textTable};
  }
`
