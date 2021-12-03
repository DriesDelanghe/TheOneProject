import {useEffect, useState} from "react";
import {useLocalStorage} from "./useLocalStorage";


export const useTMDBFindMovie = (movieName) => {

    const [movieData, setMovieData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const baseURL = "https://api.themoviedb.org/3/search/movie?"
            const url = `${baseURL}api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${movieName.replaceAll(" ", "%20")}`
            const response = await fetch(url)
            const data = await response.json()
            setMovieData(data.results[0])
        }

        fetchData().then(() => console.log('movie fetched by title from TMDB'))
    }, [])

    return {movie: movieData}
}

export const useTMDBGetMovie = (movieId) => {
    const [movie, setMovie] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const baseURL = "https://api.themoviedb.org/3/movie/" + movieId + "?"
            const url = `${baseURL}api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
            const response = await fetch(url)
            const responseData = await response.json()
            setMovie(responseData)
            setLoaded(true)
        }

        fetchData().then(() => console.log('finished fetching cast'))
    }, [])

    return {movie, loaded}
}

export const useTMDBGetCastMovie = (movieId) => {

    const [cast, setCast] = useState([{}])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const baseURL = "https://api.themoviedb.org/3/movie/" + movieId + "/credits?"
            const url = `${baseURL}api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
            const response = await fetch(url)
            const responseData = await response.json()
            setCast(responseData.cast)
            setLoaded(true)
        }

        fetchData().then(() => console.log('finished fetching cast'))
    }, [])

    return {cast, loaded}
}