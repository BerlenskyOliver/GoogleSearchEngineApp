import {useState, useEffect} from 'react'
import {API_KEY, CONTEXT_KEY} from "./config/keys"


const useGoogleSearch = (term) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        //https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures
        const fecthData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(res => res.json())
            .then(result => {
                setData(result)
            })
        }
        fecthData()
    }, [term])

    return {data}
}

export default useGoogleSearch
