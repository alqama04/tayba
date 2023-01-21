import ReactPlayer from "react-player/lazy";
import { Row, Container, Col} from 'react-bootstrap'
import React from "react";

const Videos = (props) => {
    return (
        <section className='service_videos pt-4'>
        <Container>
        <h2 className="text-center">Makeup videos</h2>
            <Row className='mt-3 g-3 justify-content-md-center'>
                {
                    props.videoUrl.map(url=>{
                        return (
                        <Col md={4} sm={6} xs={12} className="overflow-hidden" key={url}>
                            <div className="bg-light rounded p-0 overflow-hidden">
                            <ReactPlayer
                            url={url}
                            controls={true}
                            width="100%"
                            />
                            </div>
                        </Col>
                        )
                    })
                }
                </Row>
                <hr />
        </Container>
        </section>
    );
}

export default Videos;

    // <div>
    //   
    // </div>