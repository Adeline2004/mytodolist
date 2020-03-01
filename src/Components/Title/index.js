import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
  color: #ee6e78;
  font-size: 40px;
  font-weight: bold;
  font-family: Raleway;
  display: flex;
  justify-content: center;
`

const Title = props => <TitleWrapper>{props.name}</TitleWrapper>

export default Title
