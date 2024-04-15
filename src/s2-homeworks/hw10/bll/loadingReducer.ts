const initState = {
  isLoading: false,
}

type LoadingStateType = typeof initState

type LoadingReducerActionType = LoadingActionType

export const loadingReducer = (
  state: LoadingStateType = initState,
  action: LoadingReducerActionType
): LoadingStateType => {
  // fix any
  switch (action.type) {
    // пишет студент  // need to fix
    case "CHANGE_LOADING":
      return { ...state, isLoading: action.isLoading }
    default:
      return state
  }
}

type LoadingActionType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) =>
  ({
    type: "CHANGE_LOADING",
    isLoading,
  } as const)
