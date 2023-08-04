// src/reducers/catsReducer.ts
import { CATS_ACTIONS, CatActionTypes, CatsState } from 'types/cats.types'
import { Reducer } from 'redux'

export const initialState: CatsState = {
  cats: [],
  categories: [],
}

const catsReducer: Reducer<CatsState, CatActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CATS_ACTIONS.FETCH_CATS:
      return state
    case CATS_ACTIONS.GET_CATS:
      return {
        ...state,
        cats: action.payload,
      }
    case CATS_ACTIONS.ADD_CAT:
      return {
        ...state,
        cats: [...state.cats, action.payload],
      }
    case CATS_ACTIONS.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }
    default:
      return state
  }
}

export default catsReducer
