import {useParams} from "react-router-dom";
import {useTMDBGetCastMovie, useTMDBGetMovie} from "../hooks/useTMDBFindMovie";
import {Col, Container, Row, Spinner} from "react-bootstrap";
import {TMBDImage} from "../components/TMDBImage";
import * as React from "react";
import {Layout} from "../components/Layout";


export const MovieCastPage = () => {

    const {movieId} = useParams()
    const {cast, loaded: castLoaded} = useTMDBGetCastMovie(movieId)
    const {movie, loaded: movieLoaded} = useTMDBGetMovie(movieId)

    return (
        <Layout>
            {movieLoaded ? <MovieDetailsComponent movie={movie}/> : <LoadingAnimation/>}
            {!castLoaded && <LoadingAnimation/>}
            {castLoaded && cast?.[0]?.character && <CastList cast={cast}/>}
        </Layout>
    )

}

export const LoadingAnimation = () => {

    return (
        <Container className={'m-5 d-flex justify-content-center align-items-center h-100'}>
            <Spinner animation={"border"} variant={"primary"}/>
        </Container>
    )
}

export const MovieDetailsComponent = ({movie}) => {

    return (
        <Container className={'py-5 px-3 border rounded-2 mt-3'}>
            <Row>
                <Col xs={12} md={8}>
                    <h3 className="display-6">
                        {movie.original_title}
                    </h3>
                    <blockquote className="blockquote my-3">
                        <p className="mb-3">{movie.tagline}</p>
                        <footer className="blockquote-footer"><cite title="Movie Name">{movie.title}</cite></footer>
                    </blockquote>
                    <p className="lead mt-4" style={{maxWidth: "600px"}}>{movie.overview}</p>
                    {movie.homepage && <a href={movie.homepage} target={"_blank"} rel="noreferrer">Go to website</a>}
                </Col>
                <Col xs={{span: 10, order: 'first'}} md={{span: 4, order: 'last'}} className={"mx-auto my-3"}>
                        <TMBDImage imageURL={movie.poster_path}/>
                </Col>
            </Row>
            <Row className={'mt-5 align-items-end justify-content-center gap-3'}>
                <h3 className="display-6 fs-4 fw-normal">Production companies:</h3>
                {movie.production_companies.map((productionCompany) => <ProductionCompanyComponent key={productionCompany.id} productionCompany={productionCompany} />)}
            </Row>
        </Container>
    )
}

export const ProductionCompanyComponent = ({productionCompany}) => {

    return (
        <Col xs={5} md={2}>
            <TMBDImage imageURL={productionCompany.logo_path}/>
        </Col>
    )
}

export const CastList = ({cast}) => {

    return (
        <div className="d-flex justify-content-evenly gap-3 flex-wrap w-100 mt-3">
            <Container>
                <h3 className="display-6 fs-2">Cast:</h3>
            </Container>
            {cast.map((castMember) => <CastMember castMember={castMember}/>)}
        </div>
    )
}

export const CastMember = ({castMember}) => {

    return (
        <Col xs={10} md={5} className={' border rounded-2 mx-auto'}>
            <Row className={'m-0 p-0'}>
                <Col xs={10} md={6} className={"p-3 mx-auto"}>
                    <TMBDImage imageURL={castMember.profile_path}/>
                </Col>
                <Col xs={12} md={6} className={"d-flex justify-content-start gap-3 flex-column p-3 mt-3"}>
                    <div>
                        <h3 className="display-6 fs-4 m-0">
                            {castMember.character}
                        </h3>
                        <p className="text-muted lead fs-6 m-0">{castMember.original_name}</p>
                    </div>
                    <div>
                        <p>{}</p>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}