import { FunctionComponent, MouseEvent } from 'react'

import mapNTimes from '../utils/mapNTimes'

interface FieldProps {
  size: number
  onCellHoverEnd: (pos: CellPos) => void
}

export interface CellPos {
  row: string
  col: string
}

const Field: FunctionComponent<FieldProps> = ({ size, onCellHoverEnd }) => {
  const getPosValue = (pos: string | undefined): string => `${typeof pos === 'string' ? parseInt(pos) + 1 : undefined}`

  const handleCellMouseEnter = (event: MouseEvent<HTMLTableCellElement>) => {
    // TODO: Change UI
    console.log(event.target)
  }

  const handleCellMouseLeave = (event: MouseEvent<HTMLTableCellElement>) => {
    const { row, col } = event.currentTarget.dataset
    onCellHoverEnd({ row: getPosValue(row), col: getPosValue(col) })
  }

  return (
    <table>
      <tbody>
        {mapNTimes(size, row => (
          <tr key={`row-${row}`}>
            {mapNTimes(size, col => (
              <td
                key={`${row}${col}`}
                data-row={row}
                data-col={col}
                onMouseEnter={handleCellMouseEnter}
                onMouseLeave={handleCellMouseLeave}
              >
                0
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Field
