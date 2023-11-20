import { Container, Navbar } from "react-bootstrap";
import './Style.css';
import Brand from '../assets/brand.png';
import Mao from '../assets/mao.png';

export default function Header() {
    return (
        <>
            <Navbar expand="lg" className="NavbarSt">
                <Container fluid className="d-flex align-items-center">
                    <Navbar.Brand style={{ marginInlineEnd: 'auto' }}>
                        <img src={Brand} className="logonav" alt="logonav"  />
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <img src={Mao} className="logonav-1" alt="logonav"  />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}
