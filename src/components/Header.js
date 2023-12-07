import { Container, Navbar, Row, Col } from "react-bootstrap";
import './Style.css';
import Brand from '../assets/brand.png';
import Mao from '../assets/mao.png';
       
export default function Header() {
    return (
        <>
            <Navbar expand="sm" className="NavbarSt">
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

// export default function Header() {
//     return (
//       <Navbar expand="sm" className="NavbarSt">
//         <Container fluid>
//           <Row className="d-flex align-items-center">
//             <Col xs={6} md={3}>
//               <img src={Brand} className="logonav" alt="logonav" />
//             </Col>
//             <Col xs={6} md={9} className="text-end">
//               <img src={Mao} className="logonav-1" alt="logonav" />
//             </Col>
//           </Row>
//         </Container>
//       </Navbar>
//     );
//   }
