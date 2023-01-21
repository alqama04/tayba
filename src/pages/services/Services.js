import AllServices from '../../components/services/AllServices';
import { Container } from 'react-bootstrap'

import "./services.css"

const Services = () => {
    return (
        <div className='services_section'>
            <div className='breadcrumb'>
            </div>
            <Container className=''>
                <AllServices />
            </Container>
        </div>
    );
}

export default Services;
