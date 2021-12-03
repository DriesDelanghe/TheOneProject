import {useEffect, useState} from "react";
import {useLocalStorage} from "./useLocalStorage";


export const useTheOneAPI = (url, key) => {

    const [data, setData] = useLocalStorage(key, {})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        console.log("start use Effect")
        const fetchData = async() => {
            if (data?.docs) {
                setLoaded(true)
                return
            }
            setLoaded(false)
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: ' Bearer ' + process.env.REACT_APP_THE_ONE_API_KEY
                }
            }
            console.log("fetching response")
            const response = await  fetch(`https://the-one-api.dev/v2${url}?limit=25`, options)
            const responseData = await response.json()
            console.log("response data: ", responseData)
            setData(responseData)
            setLoaded(true)
        }
        fetchData().then(() => console.log('data has been fetched!'))
    }, [url])

    return {data, loaded}
}