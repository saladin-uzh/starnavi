import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { colors, fontSize, sizes } from '../constants'

interface LogProps {
  messages: string[]
}

const LogContainer = styled.aside`
  h2 {
    height: ${sizes.small};
    line-height: ${sizes.medium};
    margin: 0 0 ${sizes.medium};
  }

  ul {
    padding: 0;
    list-style: none;

    li {
      margin: ${sizes.small} 0;
      background: ${colors.pastel0};
      color: ${colors.pastel2};
      border: 2px solid ${colors.pastel1};
      border-radius: 3px;
      padding: ${sizes.xSmall};
      font-weight: bold;
      font-size: ${fontSize.small};
      min-width: 150px;
    }
  }
`

const Log: FunctionComponent<LogProps> = ({ messages }) => (
  <LogContainer>
    <h2>History</h2>
    <ul>{messages.map((message, index) => index < 5 && <li key={index}>{message}</li>)}</ul>
  </LogContainer>
)

export default Log
