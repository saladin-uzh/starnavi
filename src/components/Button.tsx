import { FunctionComponent } from 'react'

interface ButtonProps {
  label: string
  onClick: () => void
  isDisabled: boolean
}

const Button: FunctionComponent<ButtonProps> = ({ label, onClick, isDisabled = false }) => (
  <button onClick={onClick} disabled={isDisabled}>
    {label}
  </button>
)

export default Button
