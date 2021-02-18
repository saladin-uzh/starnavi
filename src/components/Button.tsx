import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { colors, sizes } from '../constants'

interface ButtonProps {
  label: string
  onClick: () => void
  isDisabled: boolean
}

const StyledButton = styled.button`
  background: ${colors.blue1};
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  border-radius: 3px;

  outline: none;
  border: 0;
  padding: 0 ${sizes.small};

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`

const Button: FunctionComponent<ButtonProps> = ({ label, onClick, isDisabled = false }) => (
  <StyledButton onClick={onClick} disabled={isDisabled}>
    {label}
  </StyledButton>
)

export default Button
