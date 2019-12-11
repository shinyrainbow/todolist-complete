import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import reducer from '../reducers'
import { loadState, saveState } from './localStorage'


const persistedState = loadState()

const store = createStore(
  reducer,
  persistedState
)

store.subscribe(() => {
  saveState(
    store.getState()
  )
})
export { store } 
