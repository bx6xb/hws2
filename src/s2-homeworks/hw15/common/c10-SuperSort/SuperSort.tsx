import React from "react"
import arrowUp from "../../assets/arrowUp.svg"
import arrowDown from "../../assets/arrowDown.svg"
import arrows from "../../assets/arrows.png"

const downIcon = arrowDown
const upIcon = arrowUp
const noneIcon = arrows

export type SuperSortPropsType = {
  id?: string
  sort: string
  value: string
  onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string): string =>
  !sort ? down : sort === down ? up : sort === up ? "" : down

const SuperSort: React.FC<SuperSortPropsType> = ({ sort, value, onChange, id = "hw15" }) => {
  const up = "0" + value // 0tech
  const down = "1" + value // 1tech

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up))
  }

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon

  return (
    <span id={id + "-sort-" + value} onClick={onChangeCallback}>
      <img id={id + "-icon-" + sort} src={icon} />
    </span>
  )
}

export default SuperSort
