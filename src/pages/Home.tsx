import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import mara from '../images/mara.jpg'

function Home(){
    return(
      <>
      <Container>
        <Row>
          <Col md={5}>
          <Image src={mara} style={{marginLeft: "40px", width:"400px", marginTop: "150px"}} rounded />
          </Col>
          <Col md={5}>
          <h1 style={{marginLeft: "20px", marginTop:"300px", fontSize:"60px", fontWeight:"bold", color:"White"}}>Hello, I'm Mara!</h1> 
          <h3 style={{marginLeft: "20px", color:"#4A90E2"}}>Bachelor of Science in Information Technology</h3>
          <h5 style={{marginLeft: "20px", marginTop: "50px", color:"White"}}>University of Baguio</h5>
          <Button href="#about" style={{margin: "30px", width:"150px", height:"40px", backgroundColor:"#4A90E2", borderColor:"#4A90E2"}}>About Me</Button>
          </Col>
        </Row>
        <Row style={{marginTop:"200px"}}>
          <section id="about" style={{backgroundColor:"#4A90E2", padding:"20px"}}>
          <h1 style={{marginLeft:"10px", textAlign:"center", color:"white", fontWeight:"bold"}}>ABOUT ME</h1>
          <p style={{textAlign:"justify", fontSize:"20px", padding:"40px"}}>I am Mara Syldeni Gadgad and I am currently studying at 
            The University of Baguio under the course, Bachelor of Science in Information 
            Technology. I take interest in digital art, traditional art, multimedia, video editing,
            photography and design.</p>

          <p style={{textAlign:"justify", fontSize:"20px", padding:"40px"}}>I have been and still am, more of a creative person. I like reading, browsing through music,
            photographing any sceneries in plain sight, and video editing for my sense of fulfillment. 
          </p>

          <p style={{textAlign:"justify", fontSize:"20px", padding:"40px"}}>I take very special interest in Animations and how each character movement is detailed and is
            carefully curated. I appreciated how the animations were still and stiff but are brought to life by the artists. I appreciated their
            talent for giving life to an animation and to feel how passionate they were with their career. I aspire to be one of those
            artists.
          </p>
        </section>
        </Row>
        <Row>
          <Button href="/projects" style={{margin: "30px", width:"150px", height:"40px", backgroundColor:"#4A90E2", borderColor:"#4A90E2"}}>My Projects</Button>
        </Row>
      </Container>
      
      </>
    );
}

export default Home