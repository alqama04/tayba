import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import bridal from '../../media/images/makeup img/wedding.png'
import wedding from '../../media/images/makeup img/wedding2.png'
import party from '../../media/images/makeup img/party.png'
import party2 from '../../media/images/makeup img/party2.png'
import haldi from '../../media/images/makeup img/haldi.png'
import office from '../../media/images/makeup img/office.png'
import nailArt from '../../media/images/makeup img/nailArt.png'
import nailArt2 from '../../media/images/makeup img/nailArt2.png'
import eye from '../../media/images/makeup img/eye.png'
import navratri from '../../media/images/makeup img/navratri.png'
import ab from '../../media/images/makeup img/ab.png'


const images = [haldi, bridal, wedding, navratri, party, ab, party2, office, nailArt, nailArt2,eye,]

const imageBox = images.map((img, index) => {
    return <Col md={3} sm={6} xs={6} className="p-0 img_box" key={index}>
        <div className='rounded overflow-hidden shadow-lg bg-white m-1'>
            <img src={img} className="d-block w-100 img-fluid" alt='party Makeup' />
        </div>
    </Col>
})

const MakeupImgGallery = (props) => {
    return (
        <section className='makeUpImg'>
            <Container>
                <h3 className="fw-bold mb-3 text-capitalize">Works</h3>

                <Row className='g-2'>
                    {imageBox}
                </Row>
            </Container>
        </section>
    );
}

export default MakeupImgGallery;
