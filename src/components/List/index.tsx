import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.scss'
import { RootState } from 'types/rootState.types'
import { CATS_ACTIONS } from 'types/cats.types'

const List = () => {
  const cats = useSelector((state: RootState) => state.catsReducer.cats)
  const dispatch = useDispatch()

  console.log(cats)
  useEffect(() => {
    dispatch({
      type: CATS_ACTIONS.FETCH_CATS,
    })
  }, [])

  return (
    <div className={styles.list}>
      {cats.map(({ id, url }) => (
        <div className={styles.catContainer}>
          <img className={styles.img} src={url} alt="cat" />
        </div>
      ))}
    </div>
  )
}

export default List
