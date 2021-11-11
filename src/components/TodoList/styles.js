import styled from 'styled-components'

export const Container = styled.div``

export const ListTasks = styled.ul`
  width: 100%;
  list-style: none;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 5px 5px 0 0;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.1);

  background-color: ${(props) => props.theme.colors.backgroundTable};
  font-size: 1rem;
`

export const ButtonCheck = styled.button`
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
export const ButtonCompleted = styled.button`
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

export const TextTask = styled.p`
  width: 78%;
  color: ${(props) => props.theme.colors[props.color]};
  text-decoration: ${(props) => props.decoration};

  @media (min-width: 600px) {
    & {
      width: 83%;
    }
  }
`

export const ButtonDelete = styled.p`
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
export const TaskContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0 20px 25px;
  border-bottom: 1px solid ${(props) => props.theme.colors.textBorderTable};

  @media (min-width: 600px) {
    &:hover ${ButtonDelete} {
      display: block;
    }
  }
`
