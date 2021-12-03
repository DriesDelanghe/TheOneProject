import {Layout} from "../components/Layout";
import * as React from "react";
import {createContext, useContext, useMemo} from "react";
import {useTheOneAPI} from "../hooks/useTheOneAPI";
import {useTMDBFindMovie} from "../hooks/useTMDBFindMovie";
import {BookCard} from "./Books";
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {TMBDImage} from "../components/TMDBImage";


export const MoviesPage = () => {

    return (
        <Layout>
            <MoviesContextProvider>
                <MovieList/>
            </MoviesContextProvider>
        </Layout>
    )
}

const MoviesContext = createContext()
const useMoviesContext = () => useContext(MoviesContext)

export const MoviesContextProvider = ({children}) => {

    const {data: movies, loaded} = useTheOneAPI("/movie", "movies")
    const MoviesMemo = useMemo(() => ({movies, loaded}), [movies])

    return (
        <MoviesContext.Provider value={MoviesMemo}>
            {children}
        </MoviesContext.Provider>
    )
}

export const MovieList = () => {

    const {movies, loaded} = useMoviesContext()

    return (
        <>
            {movies?.docs?.[0] && movies.docs.map((movie) => <MovieComponentLogic TheOneMovie={movie}/>)}
        </>
    )
}

export const MovieComponentLogic = ({TheOneMovie}) => {

    const {movie} = useTMDBFindMovie(TheOneMovie.name)

    return (
        <>
            {movie?.poster_path && <MovieComponentLayout movie={movie} theOneMovieId={TheOneMovie._id}/>}
        </>
    )
}

export const MovieComponentLayout = ({movie, theOneMovieId}) => {

    return (
        <BookCard>
            <Col xs={10} md={3} className={"py-3 mx-auto"}>
                <TMBDImage imageURL={movie.poster_path}/>
            </Col>
            <Col xs={12} md={9} className={"d-flex justify-content-start gap-3 flex-column pb-3"}>
                <div>
                    <h3 className="display-6 fs-4 m-0">
                        {movie.original_title}
                    </h3>
                    <p className="text-muted lead fs-6 m-0">{movie.release_date}</p>
                </div>
                <div>
                    <p>{movie.overview}</p>
                </div>
                <div className="container mt-auto mb-0 d-flex justify-content-end gap-3">
                    <Link to={`/movies/${movie.id}/details`} className={"btn btn-secondary"}>
                        details
                    </Link>
                    <Link to={`/movies/${theOneMovieId}/quotes`} className={"btn btn-secondary"}>
                        Quotes
                    </Link>
                </div>
            </Col>
        </BookCard>
    )

}