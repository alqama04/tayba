import React, { useState, useEffect } from 'react';
import Slider from '../../components/slider/Slider';
import { Container, Row, Col } from 'react-bootstrap'
import faceMakeup from '../../media/images/Home/banner.png'
import './Home.css'
import Videos from '../../components/Home/Videos';
import MakeupImgGallery from '../../components/Home/makeupImgGallery';

const videoUrl = [
    "https://youtu.be/xXTQpP4YlG0",
    "https://www.youtube.com/shorts/dWF0NbqGk9k",

]
const Home = () => {
    const [isDisplayedImg, setisDisplayedImg] = useState(false)
    const displayImg = () => {
        setTimeout(() => {
            setisDisplayedImg(true)
        }, 2000)
    }
    useEffect(() => {
        displayImg()
    }, [])

    return (
        <div className='home overflow-hidden'>

            <Slider />
            <div className='banner'>
                <Container className='pt-5'>
                    <Row className="justify-content-md-center">
                        <Col md={6}>
                            <div>
                                <h3 className="fw-bold">Make Your Face </h3>
                                <h1>the center of attention</h1>
                                <p>My love of makeup started young while often sneaking into my mother’s makeup vanity
                                    and playing with various shades of lipstick, eyeshadow and blush.
                                    Makeup became a full blown obsession after four years of art school where I learned to master
                                    the airbrush technique.
                                </p>
                                <h4 mb='4'>Avoid the rush in High hour and book your slot now</h4>

                                <div pb='3'>
                                    <a href="tel:8318891132" className='button'>Contact Us Now</a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <img src={faceMakeup} alt='Make Your Face
                            the center of attention' className='img-fluid w-100 ' />
                        </Col>
                    </Row>
                </Container>
            </div>
            {
                isDisplayedImg &&
                <MakeupImgGallery />
            }
            <Videos videoUrl={videoUrl} />
        </div>

    );
}

export default Home;
