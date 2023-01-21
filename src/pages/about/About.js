import React from 'react';
import { ImLocation } from 'react-icons/im'
import { Col, Container, Row } from 'react-bootstrap'
import { SiGmail } from 'react-icons/si'
import { AiFillPhone } from 'react-icons/ai'
import './About.css'
// images import 
import aboutBanner from '../../media/images/Background/about.jpg'
import nailArt from '../../media/images/about/nailArt.jpg'
import eye from '../../media/images/about/eye.jpg'
import wedding from '../../media/images/about/wedding.jpg'
import hair from '../../media/images/about/hair.jpg'
import artistImage from '../../media/images/artistImage/artistImg.jpg'

const info_detail = [
    {
        id: 1,
        icon: <ImLocation />,
        title: "Address",
        contact: "194/79-7,Ali Colony,L.P. Road, Wazir Ganj,Lucknow"
    },
    {
        id: 2,
        icon: <AiFillPhone />,
        title: "Phone",
        contact: "8318891132"
    },
    {
        id: 3,
        icon: <SiGmail />,
        title: "Email",
        contact: "taybakhanirfan@gmail.com"
    }
]
const bottom_img = [nailArt, eye, wedding, hair]
const About = () => {
    return (
        <section className='about_section'>
            <div className='about_banner mb-2'>
                <img src={aboutBanner} className="img-fluid h-50" alt='about' />
            </div>
            <Container>
                <Row className='mb-3 shadow p-2 rounded'>
                    <h4 className='px-4'>My Story</h4>
                    <Col sm={6} xs={12} className='px-4 about_my_story'>
                        <p>
                            I have always been interested in beauty and the way people carry it in public
                            since my childhood, with an observational eye towards art, I always thought about
                            being in that industry. Colours, Emotions, Art have always been around my life as I felt connected with them.
                            then i went to @oraneinternationallucknow to learn the skills in more effective way ,after completing my tarining, 
                            I started providing makeup and hairstyling services (initially to close friends and
                            their functions and later on started getting recommendations).
                            I have always been working passionately towards crafting my skills as a makeup artist
                            and someone who transforms people’s lives with my services.
                            <br />I thank those who have supported me with this journey and helped me become the artist I am today.
                        </p>
                        <h5 className='p-0 m-0'>Tyba Khan</h5>
                        <p>Certified from: @oraneinternationallucknow</p>
                    </Col>
                    <Col sm={6} xs={12} className='px-4 '>
                        <div className='d-flex justify-content-center align-items-start'>
                            <img src={artistImage} className='img-fluid  rounded shadow artistImg' alt='unable to load' />
                        </div>
                    </Col>
             
                    {info}
                </Row>
                {about_bottom_img}
            </Container>
        </section>
    );
}


const info = info_detail ? info_detail.map(detail => {
    return  <Col md={4} key={detail.id}>
        <div className='info_detail shadow-lg '>
            <div className='info_detail_icon'>
                {detail.icon}
            </div>
            <h4>{detail.title}</h4>
            <p className='text-center'>{detail.contact}</p>
        </div>
    </Col>
}) : ''



const about_bottom_img =
    <div className='about_bottom_img my-2 mt-5'>
        <Row>
            {
                bottom_img ?
                    bottom_img.map((img, index) => {
                        return <Col sm={3} xs={3} key={index}>
                            <div>
                                <img src={img} className="img-fluid rounded shadow" alt="nailimage" />
                            </div>
                        </Col>
                    })
                    : ""
            }
        </Row>
    </div>


export default About;
