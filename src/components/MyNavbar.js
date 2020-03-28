import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

function MyNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Nav className="navbar mr-auto flex-center">
                <Nav.Link className="selected" href="/index">Domov</Nav.Link>
                <Nav.Link href="/archiv">Správy</Nav.Link>
                <Nav.Link href="/vysledky">Výsledky</Nav.Link>
                <Nav.Link href="/piloti">Piloti</Nav.Link>
                <Nav.Link href="/timy">Tímy</Nav.Link>
                <Nav.Link href="/kalendar">Kalendár</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MyNavbar;