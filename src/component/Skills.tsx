import './Skills.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills() {
    return (
             <div className="Skill-content">
                <h1 className="Skill-title">Skills</h1>
                <Container className='Skill-set'>
                    <Row className='Skill-row'>
                        <Col xs={12} sm={6} className='Skill-col'>
                        <h5>Backend Development</h5>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>Java</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>RestAPIs</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>RabbitMQ Messaging</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>Solace PubSub+</div>
                        </div>
                        </Col>
                        <Col xs={12} sm={6} className='Skill-col'>
                        <h5>Frontend Development</h5>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>JavaScript</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>TypeScript</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>React.js</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>Vue.js</div>
                        </div>
                        </Col>
                    </Row>
                    <Row className='Skill-row'>
                        <Col xs={12} sm={6} className='Skill-col'>
                        <h5>Database</h5>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>MySQL</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>Oracle</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>MongoDB</div>
                        </div>
                        </Col>
                        <Col xs={12} sm={6} className='Skill-col'>
                        <h5>Spoken Languages</h5>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>Cantonese</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>English</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>Mandarin</div>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} className='Skill-col'>
                        <h5>Other Technical Expericence</h5>
                        <span className="badge bg-light text-dark">#Debezium(Change data capture)</span>
                        <span className="badge bg-light text-dark">#Swagger Hub</span>
                        <span className="badge bg-light text-dark">#Kubernetes</span>
                        <span className="badge bg-light text-dark">#Spring Boot</span>
                        <span className="badge bg-light text-dark">#Git</span>
                        <span className="badge bg-light text-dark">#Jenkins</span>
                        <span className="badge bg-light text-dark">#Sonarqube</span>
                        <span className="badge bg-light text-dark">#K6 Load Testing</span>
                        <span className="badge bg-light text-dark">#Agile Development</span>
                        <span className="badge bg-light text-dark">#TDD</span>
                        <span className="badge bg-light text-dark">#User Interface Design</span>
                        </Col>
                        <Col>
                        </Col>
                    </Row>

                </Container>
            </div>
  );
}

export default Skills;