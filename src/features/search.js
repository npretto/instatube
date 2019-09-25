/* eslint-disable no-param-reassign */
import { createSlice } from 'redux-starter-kit'

const searchSlice = createSlice({
  slice: 'search',
  initialState: { text: 0, fetching: false },
  reducers: {
    start(state, action) {
      state.fetching = true
      state.text = action.payload.text
    },
    success(state) {
      state.fetching = false
    },
  },
})

export const search = text => {
  return function searchThunk(dispatch) {
    dispatch(searchSlice.actions.start({ text }))
  }
}

export default searchSlice
