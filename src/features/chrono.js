import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  session: {
    value: 1500,
    runningValue: 1500,
  },
  pause: {
    value: 300,
    runningValue: 300,
  },
  isPlaying: false,
  intervalId: undefined,
  cycles: 0,
  displayedValue: {
    value: 1500,
    heading: "Work"
  }
}

export const chrono = createSlice({
  name: "chrono",
  initialState,
  reducers: {
    updateChronoValues: (state, action) => {
      const ChosenState = state[action.payload.type];
      //on bloque en dessous de 1
      if (ChosenState.value + action.payload.value === 0) return

      if (action.payload.type === "session") {
        if (!state.isPlaying) {
          ChosenState.value = ChosenState.value + action.payload.value
          ChosenState.runningValue = ChosenState.runningValue + action.payload.value
          state.displayedValue.value = ChosenState.value
        } else {
          ChosenState.value = ChosenState.value + action.payload.value
        }

      } else if (action.payload.type === "pause") {
        ChosenState.value = ChosenState.value + action.payload.value
      }

    },
    tick: (state, action) => {
      console.log("tick")
    },
    setUpChrono: (state, action) => {
      state.isPlaying = true
      state.intervalID = action.payload
    },
    resetChrono: (state, action) => {
      window.clearInterval(state.intervalID)
      state.isPlaying = false
    }
  }
})

export function startChrono(action) {
  return function (dispatch, getState) {

    const intervalID = setInterval(() => {
      dispatch(tick())
    }, 1000)

    dispatch(setUpChrono(intervalID))

    dispatch(tick())
  }
}

export const { updateChronoValues, resetChrono, setUpChrono, tick } = chrono.actions
export default chrono.reducer