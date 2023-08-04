export interface ICat {
  id: number
  url: string
}

export interface ICategory {
  id: number
  name: string
}
export interface CatsState {
  cats: ICat[]
  categories: ICategory[]
}

export enum CATS_ACTIONS {
  GET_CATS = 'GET_CATS',
  ADD_CAT = 'ADD_CAT',
  GET_CATEGORIES = 'GET_CATEGORIES',
  FETCH_CATS = 'FETCH_CATS',
}

type AddCatAction = {
  type: CATS_ACTIONS.ADD_CAT
  payload: ICat
}

type GetCatAction = {
  type: CATS_ACTIONS.GET_CATS
  payload: ICat[]
}

type GetCategories = {
  type: CATS_ACTIONS.GET_CATEGORIES
  payload: ICategory[]
}

type FetchCats = {
  type: CATS_ACTIONS.FETCH_CATS
}

export type CatActionTypes =
  | GetCatAction
  | AddCatAction
  | GetCategories
  | FetchCats
