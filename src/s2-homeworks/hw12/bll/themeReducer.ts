const initState: StateType = {
  themeId: 1,
}

export const themeReducer = (
  state: StateType = initState,
  action: ThemeReducerActionType
): StateType => {
  switch (action.type) {
    case "SET_THEME_ID":
      return {
        ...state,
        themeId: action.id,
      }
    default:
      return state
  }
}

// actions
export const changeThemeIdAC = (id: number) => ({ type: "SET_THEME_ID", id } as const)

// types
type StateType = {
  themeId: number
}
type ThemeReducerActionType = ReturnType<typeof changeThemeIdAC>
