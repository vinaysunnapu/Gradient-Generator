import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const GradientContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    ${props => props.d},
    ${props => props.c1},
    ${props => props.c2}
  );
  height: 100vh;
`
export const Heading = styled.h1`
  color: white;
  font-family: roboto;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`
export const Para = styled.p`
  font-size: 25px;
  font-family: roboto;
  font-weight: bold;
  color: white;
`
export const ButtonContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ColorPickerContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
`
export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Label = styled.p`
  color: white;
  font-family: roboto;
`
export const Input = styled.input`
  width: 80px;
  height: 40px;
  border: none;
  background-color: transparent;
  margin-top: 20px;
`
export const GenerateButton = styled.button`
  width: 80px;
  height: 30px;
  background-color: #00c9b7;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin: 10px;
`
