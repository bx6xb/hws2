import { UserType } from "../HW8"

type ActionType = { type: "sort"; payload: "up" | "down" } | { type: "check"; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      const sortedCopy = state.slice().sort((a, b) => {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }
        return 0
      })
      return action.payload === "up" ? sortedCopy : sortedCopy.reverse()
    }
    case "check": {
      return state.filter((u) => u.age > 18)
    }
    default:
      return state
  }
}
