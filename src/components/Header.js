import * as React from 'react'
import {Container, Nav} from 'react-bootstrap'
import {Link} from "react-router-dom";

export const Header = () => {

    return (
        <Container fluid className={"p-2 py-3 bg-dark m-0 d-flex justify-content-between position-sticky top-0"} style={{zIndex: 2040}}>
            <CustomNavLink title={'The One API'} url={'/'}/>
            <Nav className={"justify-content-end"}>
                <CustomNavLink title={"Characters"} url={'/characters'}/>
                <CustomNavLink title={"Movies"} url={'/movies'}/>
                <CustomNavLink title={"Books"} url={'/books'}/>
            </Nav>
        </Container>

    )
}

export const CustomNavLink = ({title, url}) => {

    return (
        <Nav.Item>
            <Link to={url} className={'text-light header-link nav-link'}>
                {title}
            </Link>
        </Nav.Item>
    )
}