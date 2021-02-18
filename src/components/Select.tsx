import { ChangeEvent, FunctionComponent } from 'react'
import styled from 'styled-components'
import { sizes } from '../constants'

export interface SelectOption {
  mode: string
  size: number
}
export type SelectOptions = SelectOption[]

interface SelectProps {
  options: SelectOptions
  value: string
  onChange: (value: string) => void
}

const StyledSelect = styled.select`
  flex-grow: 1;
  margin-right: ${sizes.small};
`

const Select: FunctionComponent<SelectProps> = ({ options, value, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)

  return (
    <StyledSelect placeholder={'Pick mode...'} value={value} onChange={handleChange}>
      {options.map(({ mode }) => (
        <option key={mode} value={mode}>
          {mode}
        </option>
      ))}
    </StyledSelect>
  )
}

export default Select
