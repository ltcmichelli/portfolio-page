import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <div className="Parallax-cover2">
            <div className="About-content">
                <h1 className="About-title">About Me</h1>
                <Container className='Education'>
                    <Row>
                        <Col>
                            <h2>Education</h2>
                        </Col>
                        <Col xs={9}>
                            <Row>
                                <h2>Master of Science Degree in Computer Science</h2>
                            </Row>
                            <Row>
                                <small> The Chinese University of Hong Kong (Sep 2021 - Jun 2023)</small>
                            </Row>
                            <Row>
                                <h2>Bachelor of System Engineering and Engineering Management</h2>
                            </Row>
                            <Row>
                                <small> The Chinese University of Hong Kong (Sep 2015 - Jun 2019)</small>
                            </Row>
                        </Col>
                    </Row> 
                </Container>
                <hr></hr>
                <Container className='Education'>
                    <Row>
                        <Col>
                            <h2>Work</h2>
                        </Col>
                        <Col xs={9}>
                            <Row>
                                <h2>Technical Analyst</h2>
                            </Row>
                            <Row>
                                <small> Overseas Container Line Limited (Nov 2021 - Present)</small>
                            </Row>
                            <Row>
                                <h2>Assistant Technical Analyst</h2>
                            </Row>
                            <Row>
                                <small> Overseas Container Line Limited (Aug 2019 - Nov 2021)</small>
                            </Row>
                            <Row>
                                <h2>IT Summer Intern</h2>
                            </Row>
                            <Row>
                                <small> Cathay Pacific Airways Limited (Jul 2018 - Aug 2018)</small>
                            </Row>
                        </Col>
                    </Row> 
                </Container>
            </div>
        </div>
  );
}

export default About;