import './Portfolios.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Portfolios() {
    return (
        <div className="Parallax-cover3">
            <div className="Portfolios-content">
                <h1 className="Portfolios-title">Portfolios</h1>
                <Container>
                    <Row className="Portfolios-row">
                        <Col>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src="/portfolios/01-mockup.png" />
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
                        <Col>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src="/portfolios/02-mockup.png" />
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
                        <Col>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src="/portfolios/03-mockup.png" />
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
                        <Col>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src="/portfolios/04-design.png" />
                                <Card.Body>
                                <Card.Text>
                                <p><b>United College Drama Club Card design</b></p>
                                <p>(Jul 2016)</p>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src="/portfolios/05-design.png" />
                                <Card.Body>
                                <Card.Text>
                                <p><b>T shirt design of 2016 CUHK drama competition</b></p>
                                <p>(Oct 2016)</p>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src="/portfolios/06-design.png" />
                                <Card.Body>
                                <Card.Text>
                                <p><b>T shirt design of United College drama club annual performance 2017</b></p>
                                <p>(Jul 2017)</p>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="Portfolios-row">
                        <Col xs={4}>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src="/portfolios/07-design.png" />
                                <Card.Body>
                                <Card.Text>
                                <p><b>Medicare (UI design)</b></p>
                                <p>(May 2018)</p>
                                </Card.Text>
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