import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 35px 0 35px;
  @media (min-width: 600px) {
    width: 37rem;
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 10px;
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

export const TableCheck = styled.label``

export const TableCompleted = styled.input`
  & {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  & + ${TableCheck} {
    display: inline-flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
  }
  & + ${TableCheck}::before {
    content: '';
    display: inline-block;
    width: 1.3em;
    height: 1.3em;
    border: 1.5px solid ${(props) => props.theme.colors.textBorderTable};
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center;
  }

  &:checked + ${TableCheck}::before {
    border-color: var(--checkBackground);
    background-color: var(--checkBackground);

    background-image: url(${(props) => props.theme.colors.iconCheck});
  }
  & + ${TableCheck}:hover::before {
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
