import { CarouselItem, Carousel, CarouselCaption } from "react-bootstrap";
import { carousel } from "../data";

export default function CarouselSlider() {
    return (
        <div>
            <Carousel fade className="carousel_main">
                {
                    carousel.carouselItems.map((carousel) => (
                        <CarouselItem>
                            <img src={carousel.path} className="carousel_img" alt="appeal" />
                            <CarouselCaption className="carousel_caption"> 
                                <h3>ASIA PACIFIC PROGRESSIVE ECOLOGICAL ACTIVITIES LIMITED</h3>
                            </CarouselCaption>
                        </CarouselItem>
                    ))
                }
            </Carousel>
        </div>
    )
}