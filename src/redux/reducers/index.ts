import { combineReducers } from 'redux'
import catsReducer from './cats.reducer'
import { RootState } from 'types/rootState.types'

const rootReducer = combineReducers<RootState>({ catsReducer })

export default rootReducer
