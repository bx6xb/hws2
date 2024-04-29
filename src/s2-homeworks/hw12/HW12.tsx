import { useEffect } from "react"
import s from "./HW12.module.css"
import s2 from "../../s1-main/App.module.css"
import SuperSelect from "../hw07/common/c5-SuperSelect/SuperSelect"
import { useDispatch } from "react-redux"
import { changeThemeIdAC } from "./bll/themeReducer"
import { AppSelector } from "../hw10/bll/store"

/*
 * 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
 * 2 - получить themeId из редакса
 * 3 - дописать тип и логику функции change
 * 4 - передать пропсы в SuperSelect
 * */

const themes = [
  { id: 1, value: "light" },
  { id: 2, value: "blue" },
  { id: 3, value: "dark" },
]

const HW12 = () => {
  const themeId = AppSelector((state) => state.theme.themeId)
  const dispatch = useDispatch()

  const change = (id: number) => {
    dispatch(changeThemeIdAC(id))
    alert(id)
  }

  useEffect(() => {
    document.documentElement.dataset.theme = themeId + ""
  }, [themeId])

  return (
    <div id={"hw12"}>
      <div id={"hw12-text"} className={s2.hwTitle}>
        Homework #12
      </div>
      <hr />

      <div className={s2.hw}>
        <SuperSelect
          id={"hw12-select-theme"}
          className={s.select}
          options={themes}
          onChangeOption={change}
        />
      </div>
    </div>
  )
}

export default HW12
