import { useEffect, useState } from "react"
import s2 from "../../s1-main/App.module.css"
import s from "./HW15.module.css"
import axios from "axios"
import SuperPagination from "./common/c9-SuperPagination/SuperPagination"
import { useSearchParams } from "react-router-dom"
import SuperSort from "./common/c10-SuperSort/SuperSort"
import loader from "./assets/loader.png"

/*
 * 1 - дописать SuperPagination-
 * 2 - дописать SuperSort-
 * 3 - проверить pureChange тестами-
 * 3 - дописать sendQuery, onChangePagination, onChangeSort в HW15-
 * 4 - сделать стили в соответствии с дизайном-
 * 5 - добавить HW15 в HW5/pages/JuniorPlus-
 * */

type TechType = {
  id: number
  tech: string
  developer: string
}

type ParamsType = {
  sort: string
  page: number
  count: number
}

type FetchTechsResponseType = { techs: TechType[]; totalCount: number }

const getTechs = (params: ParamsType) => {
  return axios.get<FetchTechsResponseType>(
    "https://samurai.it-incubator.io/api/3.0/homework/test3",
    {
      params,
    }
  )
}

const HW15 = () => {
  const [sort, setSort] = useState("")
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(4)
  const [idLoading, setLoading] = useState(false)
  const [totalCount, setTotalCount] = useState(100)
  const [searchParams, setSearchParams] = useSearchParams()
  const [techs, setTechs] = useState<TechType[]>([])

  const sendQuery = (params: ParamsType) => {
    setLoading(true)
    getTechs(params)
      .then((res) => {
        setTechs(res.data.techs)
        setTotalCount(res.data.totalCount)
      })
      .catch((e) => {
        alert(e.response?.data?.errorText || e.message)
        return e.response?.data?.errorText || e.message
      })
      .finally(() => setLoading(false))
  }

  const onChangePagination = (newPage: number, newCount: number) => {
    setPage(newPage)
    setCount(newCount)
    sendQuery({ count: newCount, page: newPage, sort })
    setSearchParams({ count: newCount.toString(), page: newPage.toString(), sort })
  }

  const onChangeSort = (newSort: string) => {
    setSort(newSort)
    setPage(1)
    sendQuery({ count, page, sort: newSort })
    setSearchParams({ count: count.toString(), page: page.toString(), sort: newSort })
  }

  useEffect(() => {
    const params = Object.fromEntries(searchParams)
    const page = +params.page || 1
    const count = +params.count || 4
    const sort = params.sort || ""
    sendQuery({ page, count, sort })
    setPage(page)
    setCount(count)
    setSort(sort)
  }, [])

  const mappedTechs = techs.map((t) => (
    <div key={t.id} className={s.row}>
      <div id={"hw15-tech-" + t.id} className={s.tech}>
        {t.tech}
      </div>

      <div id={"hw15-developer-" + t.id} className={s.developer}>
        {t.developer}
      </div>
    </div>
  ))

  return (
    <div id={"hw15"}>
      <div className={s2.hwTitle}>Homework #15</div>

      <div className={s2.hw}>
        {idLoading && (
          <div id={"hw15-loading"} className={s.loading}>
            <img src={loader} alt="loader" className={s.loader} />
          </div>
        )}

        <SuperPagination
          page={page}
          itemsCountForPage={count}
          totalCount={totalCount}
          onChange={onChangePagination}
        />

        <div className={s.rowHeader}>
          <div className={s.sortHeader}>
            Tech
            <SuperSort sort={sort} value={"tech"} onChange={onChangeSort} />
          </div>

          <div className={s.sortHeader}>
            Developer
            <SuperSort sort={sort} value={"developer"} onChange={onChangeSort} />
          </div>
        </div>

        {mappedTechs}
      </div>
    </div>
  )
}

export default HW15
