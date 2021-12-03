import {useTheOneAPI} from "../hooks/useTheOneAPI";
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import React from "react";
import {Layout} from "../components/Layout";
import {LoadingAnimation} from "./MovieDetails";


export const MovieQuotesPages = () => {

    const {movieId} = useParams()
    const {data: quotes, loaded} = useTheOneAPI(`/movie/${movieId}/quote`, `quotes-${movieId}`)

    return (
        <Layout>
            {loaded ?
                <QuoteList quotes={quotes.docs} />
                :
                <LoadingAnimation/>
            }

        </Layout>
    )

}

export const QuoteList = ({quotes}) => {
    return(
        quotes?.[0] ?
            quotes.map((quote) => <QuoteLogic quote={quote}/>)
            :
            <Container className={'p-5'}>
                <h3 className="display-6 text-center">No Quotes found in database :(</h3>
            </Container>
    )
}

export const QuoteLogic = ({quote}) => {

    const {data:character} = useTheOneAPI(`/character/${quote.character}`, `character-${quote.character}`)

    return(
        <Quote character={character.docs[0]} quote={quote} />
    )

}

export const Quote = ({quote, character}) => {

    return (
        <blockquote className="blockquote my-3">
            <p className="mb-3">{quote.dialog}</p>
            <footer className="blockquote-footer"><cite title="Movie Name">{character.name}</cite></footer>
        </blockquote>
    )
}