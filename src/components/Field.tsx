import { FunctionComponent, MouseEvent } from 'react'
import styled from 'styled-components'
import { colors, sizes } from '../constants'

import mapNTimes from '../utils/mapNTimes'

interface FieldProps {
  size: number
  onCellHoverEnd: (pos: CellPos) => void
}

export interface CellPos {
  row: string
  col: string
}

const FieldContainer = styled.table`
  border-collapse: collapse;
  margin-top: ${sizes.small};

  td {
    width: ${sizes.large};
    height: ${sizes.large};
    border: 1px solid ${colors.grey0};

    &:hover {
      background: ${colors.blue0};
    }
  }
`

const Field: FunctionComponent<FieldProps> = ({ size, onCellHoverEnd }) => {
  const getPosValue = (pos: string | undefined): string => `${typeof pos === 'string' ? parseInt(pos) + 1 : undefined}`

  const handleCellMouseLeave = (event: MouseEvent<HTMLTableCellElement>) => {
    const { row, col } = event.currentTarget.dataset
    onCellHoverEnd({ row: getPosValue(row), col: getPosValue(col) })
  }

  return (
    <FieldContainer>
      <tbody>
        {mapNTimes(size, row => (
          <tr key={`row-${row}`}>
            {mapNTimes(size, col => (
              <td key={`${row}${col}`} data-row={row} data-col={col} onMouseLeave={handleCellMouseLeave} />
            ))}
          </tr>
        ))}
      </tbody>
    </FieldContainer>
  )
}

export default Field
