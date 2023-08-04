import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { getAllCategories } from 'services/cats.service'
import { ICategory } from 'types/cats.types'

const Sidebar = () => {
  const [categories, setCategories] = useState<ICategory[]>([])

  const getCategories = async () => {
    const data = await getAllCategories()

    setCategories(data)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div className={styles.sidebar}>
      {categories.map(({ name, id }) => (
        <div key={id} className={styles.category}>
          {name}
        </div>
      ))}
    </div>
  )
}

export default Sidebar
