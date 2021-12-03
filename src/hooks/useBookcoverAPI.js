import {useLocalStorage} from "./useLocalStorage";
import {useEffect, useRef, useState} from "react";


export const useBookCoverAPI = (bookTitle) => {

    const modifiedBookTitle = useRef(bookTitle.replaceAll(" ", "+"))
    const [cover, setCover] = useLocalStorage(`${modifiedBookTitle.current}-cover`, "")
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetchCover = async () => {
            if (cover) {
                setLoaded(true)
                return
            }

            const baseURL = "https://bookcoverapi.herokuapp.com/getBookCover"
            const options = {
                method: 'GET'
            }
            console.log(`${baseURL}?bookTitle=${modifiedBookTitle.current}`)
            const response = await fetch(`${baseURL}?bookTitle=${modifiedBookTitle.current}`, options)
            console.log("response: ", response)
            const responseData = await response.json()
            console.log('response data: ', responseData)
            setCover(responseData.bookCoverUrl)
            setLoaded(true)
        }
        fetchCover().then(() => console.log(`fetching cover for ${bookTitle} complete`))
    }, [])

    return {cover, loaded}
}