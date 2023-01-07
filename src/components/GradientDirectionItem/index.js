import {List, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionItem, onDirection, onActiveButton, isActive} = props
  const {displayText, value, directionId} = directionItem
  const onClickDirection = () => {
    onDirection(value)
    onActiveButton(directionId)
  }

  return (
    <List>
      <DirectionButton
        type="button"
        onClick={onClickDirection}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </List>
  )
}
export default GradientDirectionItem
