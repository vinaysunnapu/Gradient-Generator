import styled from 'styled-components'

export const List = styled.li`
  list-style-type: none;
`

export const DirectionButton = styled.button`
  max-width: 70px;
  min-width: 30px;
  height: 30px;
  border-radius: 8px;
  background-color: #ededed;
  border: none;
  padding: 8px;
  color: #014f7b;
  margin: 5px;
  font-weight: bold;
  opacity: ${props => (props.isActive === true ? 1 : 0.5)};
`
