import React from 'react';
import servicesObj from './ServiceObj';
import { Row, Col, Carousel } from 'react-bootstrap';

const { wedding, hairServices,nail} = servicesObj

const AllServices = () => {
    return (
        <React.Fragment>
            {service_temp(wedding)}
            {service_temp(hairServices)}
            {service_temp(nail)}
    </React.Fragment>);
}

const service_temp =(service)=>{
   return <>
  <Row className='shadow-lg mb-2 rounded py-2'>   
    <Col md={6} sm={6} xs={12} >
        <div>
            <h2 className="service_heading">{service.name}</h2>
            <p className='description'>{service.description}</p>
            <div >
            <a href="tel:8318891132" className='service_contact'>contact</a>
            </div>
        </div>
    </Col>

    <Col md={4} sm={4} xs={12} >
        <Carousel indicators={false} controls={false}>
        {service.image.map((img,index)=>{
            return (
         <Carousel.Item key={index} className="overflow-hidden rounded">
            <img className="w-100 img-fluid h-50 rounded shadow" src={img} alt="serivcesImage"
            />
        </Carousel.Item>)
        })}
    </Carousel>
</Col>
</Row>
</>
    }


export default  AllServices;
