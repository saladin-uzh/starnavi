import { FunctionComponent } from 'react'

interface LogProps {
  messages: string[]
}

const Log: FunctionComponent<LogProps> = ({ messages }) => (
  <aside>
    <h2>History</h2>
    <ul>{messages.map((message, index) => index < 5 && <li key={index}>{message}</li>)}</ul>
  </aside>
)

export default Log
