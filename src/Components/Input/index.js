import styled from 'styled-components'

const Input = styled.input`
  color: #ee6e78;
  height: 28px;
  width: 280px;
  font-size: 16px;
  font-family: Raleway;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid #ee6e78;
  border-radius: 4px;
  &:focus {
    outline-color: #ee6e78;
    outline-style: dashed;
  }
  margin: 2px;
  padding: 1px;
`

export default Input
