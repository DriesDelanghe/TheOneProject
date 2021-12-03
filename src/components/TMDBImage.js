import * as React from "react";
import {useRef} from "react";
import {Image} from "react-bootstrap";
import Img from "../static/images/unkownuser.jpg"


export const TMBDImage = ({imageURL}) => {

    const imagePath = useRef("https://image.tmdb.org/t/p/original/" + imageURL)

    return (
        imageURL ?
            <Image fluid src={imageURL ? imagePath.current : Img} className={'rounded-2'}/>
            :
            <>
            </>
    )
}