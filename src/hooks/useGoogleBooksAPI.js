import {useEffect, useRef, useState} from "react";
import {useLocalStorage} from "./useLocalStorage";

export const googleAPI = {
    key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
}

export const useGoogleBooksAPI = (bookTitle) => {

    const modifiedBookTitle = useRef(bookTitle.replaceAll(" ", "+"))
    const [bookData, setBookData] = useLocalStorage(`${modifiedBookTitle.current}-data`, {})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetchBookData = async () => {
            if (bookData?.title){
                setLoaded(true)
                return
            }
            setLoaded(false)
            const baseURL = "https://www.googleapis.com/books/v1/volumes?"
            const query = `q=${modifiedBookTitle.current}&orderBy=relevance&key=` + googleAPI.key
            const response = await fetch(baseURL+query)
            const data = await response.json()
            setBookData(data.items[0].volumeInfo)
            setLoaded(true)
        }
        fetchBookData().then(() => console.log('fetched data book from google api'))
    }, [])

    return {bookData, loaded}
}