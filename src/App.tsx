import { FunctionComponent, useEffect, useState } from 'react'
import styled from 'styled-components'

import Button from './components/Button'
import Field, { CellPos } from './components/Field'
import Log from './components/Log'
import Select, { SelectOption, SelectOptions } from './components/Select'
import { sizes } from './constants'

import fetchAppModes, { AppModes } from './utils/fetchAppModes'

const AppContainer = styled.main`
  display: flex;
  padding: ${sizes.small};

  section {
    display: flex;
    flex-direction: column;
    margin-right: ${sizes.medium};
    min-width: calc(${sizes.large} * 5);

    header {
      display: flex;
      width: 100%;
      height: ${sizes.medium};
    }
  }
`

const initialMode = { mode: 'Pick mode...', size: 0 }

const App: FunctionComponent = () => {
  const [selectOptions, setSelectOptions] = useState<SelectOptions>([initialMode])
  const [appMode, setAppMode] = useState<SelectOption>(initialMode)
  const [fieldSize, setFieldSize] = useState<number>(initialMode.size)
  const [logMessages, setLogMessages] = useState<string[]>([])

  const getSelectOptions = (modesObj: AppModes): SelectOptions =>
    Object.keys(modesObj).map(mode => ({ mode, size: modesObj[mode].field }))

  useEffect(() => {
    if (selectOptions.length <= 1)
      fetchAppModes().then(appModes => {
        if (appModes) {
          setSelectOptions(options => [...options, ...getSelectOptions(appModes)])
        }
      })
  }, [])

  const handleSelectChange = (value: string) =>
    setAppMode(selectOptions.find(({ mode }) => mode === value) ?? initialMode)

  const handleButtonClick = () => {
    if (fieldSize !== appMode.size) setFieldSize(appMode.size)
  }

  const handleCellHoverEnd = ({ row, col }: CellPos) => {
    const logMessage = `row ${row} col ${col}`
    setLogMessages(log => [logMessage, ...log])
  }

  const isButtonDisabled = !appMode.size || fieldSize === appMode.size
  const showAppField = Boolean(fieldSize)

  return (
    <AppContainer>
      <section>
        <header>
          <Select options={selectOptions} value={appMode?.mode} onChange={handleSelectChange} />
          <Button label="Start" onClick={handleButtonClick} isDisabled={isButtonDisabled} />
        </header>

        {showAppField && <Field size={fieldSize} onCellHoverEnd={handleCellHoverEnd} />}
      </section>

      <Log messages={logMessages} />
    </AppContainer>
  )
}

export default App
