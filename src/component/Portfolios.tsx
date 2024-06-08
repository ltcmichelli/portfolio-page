import './Portfolios.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image01 from '../img/01-mockup.png';
import image02 from '../img/02-mockup.png';
import image03 from '../img/03-mockup.png';
import image04 from '../img/04-design.png';
import image05 from '../img/05-design.png';
import image06 from '../img/06-design.png';
import image07 from '../img/07-design.png';

function Portfolios() {
    return (
        <div className="Parallax-cover3">
            <div className="Portfolios-content">
                <h1 className="Portfolios-title">Portfolios</h1>
                <Container>
                    <Row className="Portfolios-row">
                        <Col xs={12} sm={6} md={4} className='Portfolios-col'>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src={image01}/>
                                <Card.Body>
                                <Card.Text>
                                <p><b>Catch Me if You Can</b></p>
                                <p>(Nov to Dec 2017)</p>
                                </Card.Text>
                                <hr/>
                                <span className="badge bg-secondary">#Cordova</span>
                                <span className="badge bg-secondary">#JavaScript</span>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4} className='Portfolios-col'>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src={image02} />
                                <Card.Body>
                                <Card.Text>
                                <p><b>FoodStep</b></p>
                                <p>(Oct 2018 to Apr 2019)</p>
                                </Card.Text>
                                <hr/>
                                <span className="badge bg-secondary">#Node.js</span>
                                <span className="badge bg-secondary">#JavaScript</span>
                                <span className="badge bg-secondary">#Firebase</span>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4} className='Portfolios-col'>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src={image03} />
                                <Card.Body>
                                <Card.Text>
                                <p><b>Easy Park</b></p>
                                <p>(Apr 2020)</p>
                                </Card.Text>
                                <hr/>
                                <span className="badge bg-secondary">#Java</span>
                                <span className="badge bg-secondary">#Spring Boot</span>
                                <span className="badge bg-secondary">#JavaScript</span>
                                <span className="badge bg-secondary">#React</span>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="Portfolios-row">
                        <Col xs={12} sm={6} md={4} className='Portfolios-col'>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src={image04} />
                                <Card.Body>
                                <Card.Text>
                                <p><b>United College Drama Club Card design</b></p>
                                <p>(Jul 2016)</p>
                                </Card.Text>
                                <hr/>
                                <span className="badge bg-secondary">#Graphic Design</span>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4} className='Portfolios-col'>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src={image05} />
                                <Card.Body>
                                <Card.Text>
                                <p><b>T shirt design of 2016 CUHK drama competition</b></p>
                                <p>(Oct 2016)</p>
                                </Card.Text>
                                <hr/>
                                <span className="badge bg-secondary">#Graphic Design</span>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4} className='Portfolios-col'>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src={image06} />
                                <Card.Body>
                                <Card.Text>
                                <p><b>T shirt design of UCDC annual performance 2017</b></p>
                                <p>(Jul 2017)</p>
                                </Card.Text>
                                <hr/>
                                <span className="badge bg-secondary">#Graphic Design</span>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="Portfolios-row">
                        <Col xs={12} sm={6} md={4} className='Portfolios-col'>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src={image07} />
                                <Card.Body>
                                <Card.Text>
                                <p><b>Medicare (UI design)</b></p>
                                <p>(May 2018)</p>
                                </Card.Text>
                                <hr/>
                                <span className="badge bg-secondary">#UI design</span>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
	    </div>
  );
}

export default Portfolios;