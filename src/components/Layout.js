import {Header} from "./Header";
import {Container} from "react-bootstrap";

export const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <Container className={"shadow-lg bg-light minh-100"}>
            {children}
            </Container>
        </>
    )
}