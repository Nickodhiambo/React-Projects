import { useEffect, useState } from "react";


export default function useFetch(url, options = {}){
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = async() => {
        try{
            setLoading(true)
            const response = await fetch(url, {...options})
            const result = await response.json()
            setLoading(false)
            setError(null)
            setData(result)

        } catch(e){
            setError(`${e.message}: Some error occured`)
        }
    }


    useEffect(() => {
        fetchData()
    }, [url])

    return {data, error, loading}
}