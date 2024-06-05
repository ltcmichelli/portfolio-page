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
                    <Row>
                        <Col>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src="/portfolios/01-mockup.png" />
                                <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src="/portfolios/02-mockup.png" />
                                <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src="/portfolios/03-mockup.png" />
                                <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src="/portfolios/04-design.jpg" />
                                <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src="/portfolios/05-design.png" />
                                <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src="/portfolios/06-design.png" />
                                <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Card className="Portfolios-card">
                                <Card.Img variant="top" src="/portfolios/07-design.png" />
                                <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
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