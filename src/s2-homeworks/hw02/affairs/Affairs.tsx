import Affair from "./affair/Affair"
import { AffairType, FilterType } from "../HW2"
import s from "./Affairs.module.css"

type AffairsPropsType = {
  data: AffairType[] // need to fix any
  setFilter: (filter: FilterType) => void
  deleteAffairCallback: (_id: number) => void
  filter: FilterType
}

function Affairs(props: AffairsPropsType) {
  const setAll = () => {
    props.setFilter("all")
  }
  const setHigh = () => {
    props.setFilter("high")
  }
  const setMiddle = () => {
    props.setFilter("middle")
  }
  const setLow = () => {
    props.setFilter("low")
  }

  const cnClass = (filter: FilterType) =>
    s.button + " " + s[filter] + (props.filter === filter ? " " + s.active : "")

  const cnAll = cnClass("all")
  const cnHigh = cnClass("high")
  const cnMiddle = cnClass("middle")
  const cnLow = cnClass("low")

  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))

  return (
    <div>
      <div className={s.buttonContainer}>
        <button id={"hw2-button-all"} onClick={setAll} className={cnAll}>
          All
        </button>
        <button id={"hw2-button-high"} onClick={setHigh} className={cnHigh}>
          High
        </button>
        <button
          id={"hw2-button-middle"}
          onClick={setMiddle}
          className={cnMiddle}
        >
          Middle
        </button>
        <button id={"hw2-button-low"} onClick={setLow} className={cnLow}>
          Low
        </button>
      </div>
      <div className={s.affairs}>{mappedAffairs}</div>
    </div>
  )
}

export default Affairs
