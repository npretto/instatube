import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from 'redux-starter-kit'
import logger from 'redux-logger'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import searchSlice from './features/search'

const store = configureStore({
  reducer: combineReducers({
    search: searchSlice.reducer,
  }),
  middleware: [...getDefaultMiddleware(), logger],
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
