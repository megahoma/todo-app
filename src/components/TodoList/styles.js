import styled from 'styled-components'

export const Container = styled.div``

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 5px;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.1);

  background-color: ${(props) => props.theme.colors.backgroundTable};
  font-size: 1rem;
`
export const TableCell = styled.td`
  padding: 20px 0 20px 0;
  color: ${(props) => props.theme.colors[props.color]};
  text-decoration: ${(props) => props.decoration};

  &:first-child {
    width: 20px;
    padding-left: 15px;
    padding-right: 10px;
  }
  &:last-child {
    width: 20px;
    padding-left: 10px;
    padding-right: 15px;
  }
`

export const TableCheck = styled.button`
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
export const TableCompleted = styled.button`
  width: 25px;
  height: 25px;
  margin-right: 1.5em;
  border: 1.5px solid ${(props) => props.theme.colors.textBorderTable};
  border-radius: 50%;
  background-color: var(--checkBackground);
  background-image: url(${(props) => props.theme.colors.iconCheck});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:hover {
    border-color: var(--checkBackground);
  }
`

export const TableDelete = styled.div`
  & {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url('./images/icon-cross.svg');
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }

  @media (min-width: 600px) {
    display: none;
  }
`

export const TableBody = styled.tbody``
export const TableRow = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.colors.textBorderTable};

  &:last-child {
    border-bottom: 0px;
  }

  @media (min-width: 600px) {
    &:hover ${TableDelete} {
      display: block;
    }
  }
`
