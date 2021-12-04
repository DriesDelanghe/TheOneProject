import {useTheOneAPI} from "../hooks/useTheOneAPI";
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Layout} from "../components/Layout";
import {LoadingAnimation} from "./MovieDetails";
import {BookCard} from "./Books";
import {FaChevronLeft, FaChevronRight} from "react-icons/all";


export const MovieQuotesPages = () => {

    const {movieId} = useParams()
    const {data: quotes, loaded} = useTheOneAPI(`/movie/${movieId}/quote`, `quotes-${movieId}`, 100)


    return (
        <Layout>
            {loaded ?
                <QuoteList quotes={quotes.docs}/>
                :
                <LoadingAnimation/>
            }

        </Layout>
    )

}

export const QuoteList = ({quotes}) => {
    return (
        quotes?.[0] ?
            quotes.map((quote) => <QuoteLogic quote={quote}/>)
            :
            <Container className={'p-5'}>
                <h3 className="display-6 text-center">No Quotes found in database :(</h3>
            </Container>
    )
}

export const QuoteLogic = ({quote}) => {

    const {data: character, loaded} = useTheOneAPI(`/character/${quote.character}`, `character-${quote.character}`)

    return (
        loaded ? <Quote character={character.docs[0]} quote={quote}/> : null
    )

}

export const Quote = ({quote, character}) => {

    return (
        <BookCard>
            <blockquote className="blockquote">
                <p className="mb-3">"{quote.dialog}"</p>
                <footer className="blockquote-footer"><cite title="Movie Name">{character.name}</cite></footer>
            </blockquote>
        </BookCard>
    )
}