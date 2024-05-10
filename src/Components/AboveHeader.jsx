import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AboveHeader() {
    return (
        <div className="above-header-main">
            <div className="container">
                <Row>
                    <Col md={3} sm={6}>
                        <Link className="above-link" to="/">appeal.ecology@gmail.com</Link> &nbsp;&nbsp;|&nbsp;&nbsp;
                    </Col>
                    <Col sm={6}>
                        <Link className="above-link" to="/">+91 93169 30971</Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}