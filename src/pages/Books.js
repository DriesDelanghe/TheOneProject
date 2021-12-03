import {Layout} from "../components/Layout";
import {useTheOneAPI} from "../hooks/useTheOneAPI";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import * as React from "react";
import {createContext, useCallback, useContext, useMemo, useState} from "react";
import {useBookCoverAPI} from "../hooks/useBookcoverAPI";
import {useGoogleBooksAPI} from "../hooks/useGoogleBooksAPI";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {useLocalStorage} from "../hooks/useLocalStorage";

export const BooksPage = () => {


    return (
        <Layout>
            <BookContextProvider>
                    <BookList/>
            </BookContextProvider>
        </Layout>
    )
}

const BookContext = createContext()
export const useBookContext = () => useContext(BookContext)

export const BookContextProvider = ({children}) => {

    const {data: books, loaded} = useTheOneAPI("/book", "books")
    const BooksMemo = useMemo(() => ({books: books.docs, loaded}), [books, loaded])

    return (
        <BookContext.Provider value={BooksMemo}>
            {children}
        </BookContext.Provider>
    )

}


export const BookList = () => {

    const {books, loaded} = useBookContext()

    return (
        loaded && books.map((book) => <BookComponentLogic key={book._id} book={book}/>)
    )
}

export const BookComponentLogic = ({book}) => {

    const {cover} = useBookCoverAPI(book.name)
    const {bookData} = useGoogleBooksAPI(book.name)
    const {data: chapters} = useTheOneAPI(`/book/${book._id}/chapter`, `${book.name}-chapters`)

    const [showChapters, setShowChapters] = useLocalStorage(`${book.name}-show-chapters`, false)


    return (
            <SwitchTransition>
                <CSSTransition
                    key={showChapters ? "cover" : "chapters"}
                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                    classNames={'fade'}
                >
                    {showChapters ?
                        <BookChapterCard chapters={chapters.docs} setShowChapters={setShowChapters}/>
                        :
                        <BookCoverCard book={{...book, cover}} bookData={bookData} setShowChapters={setShowChapters}/>}
                </CSSTransition>
            </SwitchTransition>
    )

}

export const BookCard = ({children}) => {
    return (
        <Container className={'mx-3 my-5 shadow-sm rounded-2 w-auto border d-flex justify-content-start p-3 bg-light'}>
            <Row className={"w-100"}>
                {children}
            </Row>
        </Container>
    )
}

export const BookCoverCard = ({book, bookData, setShowChapters}) => {

    return (
        <BookCard>
            <Col xs={10} md={3} className={"py-3 mx-auto"}>
                <Image fluid src={book.cover}/>
            </Col>
            <Col xs={12} md={9} className={"d-flex justify-content-start gap-3 flex-column pb-3"}>
                <div>
                    <h3 className="display-6 fs-4 m-0">
                        {book.name}
                    </h3>
                    <p className="text-muted lead fs-6 m-0">{bookData?.authors?.[0]}</p>
                </div>
                <div>
                    <p>{bookData.description}</p>
                    <Button variant={"link"} className={"me-0 ms-auto"} onClick={() => setShowChapters(true)}>
                        See Chapters
                    </Button>
                </div>
            </Col>
        </BookCard>

    )
}

export const BookChapterCard = ({chapters, setShowChapters}) => {

    return (
        <BookCard>
            <Col xs={10} className="d-flex justify-content-between">
                <div>
                    <Button variant={"link"} onClick={() => setShowChapters(false)}>
                        Back To Overview
                    </Button>
                </div>
                <Col xs={8}>
                    <h3 className="display-6 fs-4 mb-3">Chapters:</h3>
                    {chapters.map((chapter) => <p className={'fs-6 lead fw-normal my-0 ms-3'}
                                                  key={chapter.id}>{chapter.chapterName}</p>)}
                </Col>
            </Col>
        </BookCard>
    )
}