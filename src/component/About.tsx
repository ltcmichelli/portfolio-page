import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <div className="Parallax-cover2">
            <div className="About-content">
                <h1 className="About-title">About Me</h1>
                <Container className='About-subtitle'>
                    <Row>
                        <Col xs={3} sm={3}>
                            <div className="vl"></div>
                            <h2>Education</h2>
                        </Col>
                        <Col xs={12} sm={9}>
                            <Row>
                                <h4>Master of Science Degree in Computer Science</h4>
                            </Row>
                            <Row className='Row-samll'>
                                <div> The Chinese University of Hong Kong (Sep 2021 - Jun 2023)</div>
                            </Row>
                            <hr/>
                            <Row>
                                <h4>Bachelor of System Engineering and Engineering Management</h4>
                            </Row>
                            <Row className='Row-samll'>
                                <div> The Chinese University of Hong Kong (Sep 2015 - Jun 2019)</div>
                            </Row>
                        </Col>
                    </Row> 
                </Container>
                <hr></hr>
                <Container className='About-subtitle'>
                    <Row>
                        <Col xs={12} sm={3}>
                            <div className="vl"></div>
                            <h2>Work</h2>
                        </Col>
                        <Col xs={12} sm={9}>
                            <Row>
                                <h4>Technical Analyst</h4>
                            </Row>
                            <Row className='Row-samll'>
                                <div> Overseas Container Line Limited (Nov 2021 - Present)</div>
                            </Row>
                            <hr/>
                            <Row>
                                <h4>Assistant Technical Analyst</h4>
                            </Row>
                            <Row className='Row-samll'>
                                <div> Overseas Container Line Limited (Aug 2019 - Nov 2021)</div>
                            </Row>
                            <hr/>
                            <Row>
                                <h4>IT Summer Intern</h4>
                            </Row>
                            <Row className='Row-samll'>
                                <div> Cathay Pacific Airways Limited (Jul 2018 - Aug 2018)</div>
                            </Row>
                        </Col>
                    </Row> 
                    <br></br>
                </Container>
            </div>
        </div>
  );
}

export default About;