import {Header} from "./Header";
import {Container} from "react-bootstrap";

export const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <Container className={"shadow-lg bg-light py-3"}>
            {children}
            </Container>
        </>
    )
}