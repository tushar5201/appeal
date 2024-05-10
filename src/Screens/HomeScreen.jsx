import { Col, Container, Row } from "react-bootstrap";
import AboveHeader from "../Components/AboveHeader";
import CarouselSlider from "../Components/Carousel";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function HomeScreen() {
    return (
        <div>
            <AboveHeader />
            <Header />
            <CarouselSlider />

            {/* About Section */}

            <Container className="about-section">
                <h1>About Appeal</h1>
                <hr className="hr" style={{ marginLeft: "42%" }} />
                <Row>
                    <Col md={6}>
                        <p className="about-p">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                    </Col>
                    <Col md={6}>
                        <p className="about-p">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* End About Section */}

            {/*  Features Section */}

            <section id="features">
                <Container>
                    <h1>Features</h1>
                    <hr className="hr" style={{ marginLeft: "42%" }} />
                    <Row>
                        <Col md={4} className="features-box">
                            <img src="./images/irrigation.png" className="icon" alt="" />
                            <h3 className="feature">Irrigation</h3>
                            <p className="fcontent">Safety is our highest priority. Our safety standards and performance exceed the
                                industry average, a badge of honor for the company and for each of our employees.</p>
                        </Col>

                        <Col md={4} className="features-box">
                            <img src="./images/tractor.png" className="icon" alt="" />
                            <h3 className="feature">Latest Technology</h3>
                            <p className="fcontent">We will work to implement the highest environmental standards in Indian
                                steelmaking.</p>
                        </Col>

                        <Col md={4} className="features-box">
                            <img src="./images/commodity.png" className="icon" alt="" />
                            <h3 className="feature">Commodity</h3>
                            <p className="fcontent">We are committed to the communities in which we operate and that is why our
                                corporate social responsibility is as strategic as our steel making.</p>
                        </Col>

                        {/* <button className="btn btn-outline-dark" style="width: 500px; margin-left: 15%; border-radius: 7%;">Know
                                More &nbsp;<i className="fa-solid fa-angles-right"></i></button> */}
                    </Row>
                </Container>
            </section>

            {/* End Features Section */}

            <Footer />
        </div>
    )
}