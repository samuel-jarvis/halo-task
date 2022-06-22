import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollection = (collection, group) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let query = projectFirestore.collection(collection)

    if (group) {
      query = query.where(...group)
    }
    

    const unsubscribe = query.onSnapshot(snapshot => {
      let results = []
      snapshot.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id })
      })
      setData(results)
      setLoading(false)
    }, (error) => {
      console.log(error)
      setError(error)
    })

    return () => {
      unsubscribe()
    }
      
  }, [collection, group])

  return { data, loading, }
}
