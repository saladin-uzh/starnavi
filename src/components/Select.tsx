import { ChangeEvent, FunctionComponent } from 'react'

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

const Select: FunctionComponent<SelectProps> = ({ options, value, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)

  return (
    <select name="app-mode" placeholder={'Pick mode...'} value={value} onChange={handleChange}>
      {options.map(({ mode }) => (
        <option key={mode} value={mode}>
          {mode}
        </option>
      ))}
    </select>
  )
}

export default Select
