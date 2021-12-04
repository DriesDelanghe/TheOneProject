import {Layout} from "../components/Layout";
import GIF from '../static/gif/gandalf-smile.gif';
import {Image} from "react-bootstrap";
import * as React from "react";

export const Homepage = () => {

    return (
        <Layout>
            <div className={"w-100 h-100 px-3"}>
                <h3 className="display-6 fs-4 mb-4">Welkom to this site about Lord Of The Rings!</h3>
                <p className="lead">This site uses the following API's:</p>
                <ul>
                    <li>
                        <APILink url={"https://the-one-api.dev/documentation"} title={"The One API"}/>
                    </li>
                    <li>
                        <APILink url={"https://developers.google.com/books/docs/v1/using"} title={"Google Books API"} />
                    </li>
                    <li>
                        <APILink url={"https://developers.themoviedb.org/3/getting-started/introduction"} title={"The Movie Database API (TMDB API)"} />
                    </li>
                    <li>
                        <APILink url={"https://github.com/w3slley/bookcover-api"} title={"Book Cover API"} />
                    </li>
                </ul>

                <div className={"my-5"}>
                    <p className="lead text-center">Have Fun Scrolling!</p>
                    <div className={"w-100 d-flex justify-content-center"}>
                        <Image fluid src={GIF}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const APILink = ({url, title}) => {


    return(
        <a href={url}
           className="lead text-decoration-none text-dark" target={"_blank"} rel="noreferrer">{title}</a>
    )
}