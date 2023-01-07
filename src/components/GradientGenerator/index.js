import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  GradientContainer,
  Heading,
  Para,
  ButtonContainer,
  ColorPickerContainer,
  ColorContainer,
  Label,
  Input,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    direction: 'to top',
    activeColor1: '#8ae323',
    activeColor2: '#014f7b',
    activeDirection: 'to top',
    activeId: gradientDirectionsList[0].directionId,
  }

  onActiveButton = id => {
    this.setState({activeId: id})
  }

  onDirection = value => {
    const v = `to ${value}`
    this.setState({direction: v})
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onClickGenerate = () => {
    const {color1, color2, direction} = this.state

    this.setState({
      activeColor1: color1,
      activeColor2: color2,
      activeDirection: direction,
    })
  }

  render() {
    const {
      activeColor1,
      activeColor2,
      activeDirection,
      color1,
      color2,
      activeId,
    } = this.state
    console.log(activeDirection)

    return (
      <MainContainer>
        <GradientContainer
          c1={activeColor1}
          c2={activeColor2}
          d={activeDirection}
          data-testid="gradientGenerator"
        >
          <Heading>Generate a CSS Color Gradient</Heading>
          <Para>Choose Direction</Para>
          <ButtonContainer>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                directionItem={each}
                key={each.directionId}
                onDirection={this.onDirection}
                onActiveButton={this.onActiveButton}
                isActive={activeId === each.directionId}
              />
            ))}
          </ButtonContainer>
          <Para>Pick the Colors</Para>
          <ColorPickerContainer>
            <ColorContainer>
              <Label>{color1}</Label>
              <br />
              <Input
                type="color"
                onChange={this.onChangeColor1}
                value={activeColor1}
              />
            </ColorContainer>
            <ColorContainer>
              <Label>{color2}</Label>
              <br />
              <Input
                type="color"
                onChange={this.onChangeColor2}
                value={activeColor2}
              />
            </ColorContainer>
          </ColorPickerContainer>
          <GenerateButton type="button" onClick={this.onClickGenerate}>
            Generate
          </GenerateButton>
        </GradientContainer>
      </MainContainer>
    )
  }
}
export default GradientGenerator
