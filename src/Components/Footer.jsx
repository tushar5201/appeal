import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-head">
                <div className="container">
                    <Link className="footer-head-link">Website Policies</Link> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link className="footer-head-link">Help</Link> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link className="footer-head-link">Disclaimer</Link> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link className="footer-head-link">Feedback</Link>
                </div>
            </div>
            <div className="footer-body">
                <Container>
                    <Row>
                        <Col md={4}>
                            <h3>Miscellaneous</h3>
                            <hr className="hr" />
                                <li><Link className='ftr-link' href="#">Follow Us</Link></li>
                                <li><Link className='ftr-link' href="#">Privacy Policy</Link></li>
                                <li><Link className='ftr-link' href="#">Statutory Docs.</Link></li>
                        </Col>
                        <Col md={4}>
                            <h3>Global Navigation</h3>
                            <hr className="hr" />
                            {/* <ul> */}
                                <li><Link to='/' className='ftr-link'>Gallary</Link></li>
                                <li><Link to='/' className='ftr-link'>Sitemap</Link></li>
                                <li><Link to='/' className='ftr-link'>Profile</Link></li>
                                <li><Link to='/' className='ftr-link'>Sign In</Link></li>
                            {/* </ul> */}
                        </Col>
                        <Col md={4}>
                            <h3>Contact Us</h3>
                            <hr className="hr" />
                            {/* <ul> */}
                                <li>
                                    <span className="ftradrs-icn"><i className="fa-solid fa-location-dot"></i></span> &nbsp;
                                    <Link href='' className='ftr-link'>
                                        Appeal <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp; 501, Sanket Heights, Parwati Nagar, Near Ashok Chawk, Sun Pharma, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Atladra, Baroda - 390020
                                    </Link>
                                </li>
                                <li>
                                    <span className="ftradrs-icn"><i className="fa fa-phone" aria-hidden="true"></i></span>
                                    <Link href="" className="ftr-link">&nbsp;&nbsp;&nbsp;+91 93169 30971</Link>
                                </li>
                                <li>
                                    <span className="ftradrs-icn"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                    <Link href="" className="ftr-link">
                                        &nbsp;&nbsp;&nbsp;appeal.ecology@gmail.com </Link>
                                </li>
                            {/* </ul> */}
                            <div className="social-menu">
                                <ul>
                                    <li><Link href="https://www.facebook.com/Infosofttechnologies"><i
                                        className="fa-brands fa-facebook-f"></i></Link></li>
                                    <li><Link href="insta"><i className="fa-brands fa-instagram"></i></Link></li>
                                    <li><Link href="https://api.whatsapp.com/send?phone=918511176717&app=facebook&entry_point=page_cta"
                                    ><i className="fa-brands fa-whatsapp"></i></Link></li>
                                    <li><Link href="https://in.linkedin.com/in/imsaurabhdesai?original_referer=https%3A%2F%2Fwww.google.com%2F"
                                    ><i className="fa-brands fa-linkedin"></i></Link></li><br />
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div style={{ textAlign: "center" }}>
                    <p>Copyright © 2024 Appeal. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}