import { CatsEndpoints } from 'types/endpoints.types'
import { axiosInstance } from './axios.service'

export const getAllCategories = async () => {
  try {
    const data = await axiosInstance.get(CatsEndpoints.GET_CATEGORIES)

    return data.data
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    }
  }
}

export const getAllCats = async (params?: {
  [key: string]: string | number
}) => {
  try {
    const data = await axiosInstance.get(CatsEndpoints.GET_CATS, { params })

    return data.data
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    }
  }
}
