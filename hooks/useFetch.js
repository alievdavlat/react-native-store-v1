import axios from 'axios';
import * as React from 'react'
import { View, Text } from "react-native";


const useFetch = () => {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const fetchData = async () => {
    setIsLoading(true)

    try {
        const response = await axios.get(`http://localhost:3000/api/products/`)
        setData(response.data)
        setIsLoading(false)

    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }


  React.useEffect(() => {
    useFetch()
  }, [])


  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }



  return { data , isLoading, error, refetch}

}

export default useFetch
