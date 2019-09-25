/* eslint-disable no-param-reassign */
import searchYoutube from 'youtube-api-v3-search'
import { createSlice } from 'redux-starter-kit'

const searchSlice = createSlice({
  slice: 'search',
  initialState: { text: 0, fetching: false, results: [] },
  reducers: {
    start(state, action) {
      state.fetching = true
      state.text = action.payload.text
    },
    success(state, action) {
      state.fetching = false
      state.results = action.payload.results
    },
  },
})

export const search = text => {
  return async function searchThunk(dispatch) {
    // yes, i know env variable are still readable in the compiled app
    // but i don't have time nor do i care enough to make a proxy api for now
    const API_KEY = process.env.REACT_APP_YT_KEY

    dispatch(searchSlice.actions.start({ text }))

    //TODO: add try catch
    const results = await searchYoutube(API_KEY, {
      q: text,
      part: 'snippet',
      type: 'video',
    })

    console.log(results)
    dispatch(searchSlice.actions.success({ results: results.items }))
  }
}

export const getFirstResult = state => {
  if (state.search.results && state.search.results.length > 0)
    return state.search.results[0]
  else return null
}

export default searchSlice
