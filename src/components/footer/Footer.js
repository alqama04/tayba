import React from 'react';
import { AiFillInstagram } from "react-icons/ai"
import { AiFillYoutube} from "react-icons/ai"
import {SiGmail} from 'react-icons/si'
import { Col, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'

import "./Footer.css"
const Footer = () => {
    return (
        <footer className='footer_section'>
            <Row className='pt-4 gx-1 '>
            <Col xs={4}>
            <h6 className='text-center text-white p-0'>Want to see more contents?
                Follow our social media  :</h6>
            <div className='social_media_icons'>
                <a href='https://www.instagram.com/makeover_by_taybakhan/' target={"_blank"} rel="noopener noreferrer"><AiFillInstagram /></a>
                <a href='https://youtube.com/channel/UCUBqD4lE0dmnGNmU3iT1WSQ' target={"_blank"} rel="noopener noreferrer"> <AiFillYoutube /></a>
                <a href='mailto:taybakhanirfan@gmai.com' target={"_blank"} rel="noopener noreferrer"> <SiGmail /></a>
                
            </div>
            </Col>
            <Col xs={4}>
            <ul className='p-0 ps-3 text-center'>
            <h6 className='text-center text-white p-0 use_ful_links'>Useful Links</h6>
               <li><Link to="/" className='text-white text-decoration-none'>Home</Link></li>
               <li><Link to="/services" className='text-white text-decoration-none'>services</Link></li>
               <li><Link to="/about" className='text-white text-decoration-none'>About</Link></li>               
               </ul>
            </Col>
            <Col xs={4}>
            <div className='footer_about_artist pe-1'>
                <h3>Tyba Khan</h3>
                <p>Professional Makeup Artist</p>
                <p>BEAUTY WITH US</p>
                <a className='text-underline text-white' href='tel:8318891132' target={"_blank"} rel="noopener noreferrer">Contact</a>
            </div>
            </Col>
            </Row>

            <div className='footer-end text-white'>
                <p className='text-center mt-5'>
                    &copy; 2022 by MakeOverByTybaKhan
                </p>
            </div>
           
        </footer>
    );
}

export default Footer;
