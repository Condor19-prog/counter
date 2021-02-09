const initialState = {
    counterValue: 0,
    resetValue: 0
}
type ActionType = ReturnType<typeof incrementAC> | ReturnType<typeof resetAC> | ReturnType<typeof setAC>
type initialStateType = typeof initialState
export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "INCREMENT": {
            return {...state, counterValue: state.counterValue + 1}
        }
        case 'RESET': {
            return {...state, counterValue: state.resetValue}
        }
        case 'SET': {
            return {...state, counterValue: action.minValue}
        }
        default:
            return state
    }

}

export const incrementAC = () => ({type: 'INCREMENT'} as const)
export const resetAC = () => ({type: 'RESET'} as const)
export const setAC = (minValue: number) => ({type: 'SET', minValue} as const)
