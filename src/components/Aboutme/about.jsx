import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutimg from "../../images/About.svg"
function About() {
  return (
    <div id="About">
       <Container id="second-section-main__container">
      <Row>
        <Col id="second-section-about-img">
            <img src={aboutimg}></img>
        </Col>
        <Col id="second-section-about-text">
            <h2>acerca de mi </h2>
            <p></p>
            <button>curriculum</button>
        </Col>
      </Row>
    </Container>
    </div>
   
  );
}
export default About;