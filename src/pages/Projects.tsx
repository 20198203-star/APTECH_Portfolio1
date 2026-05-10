import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Project1 from '../images/Project1.png'
import Project2 from '../images/Project2.png'
import Project3 from '../images/Project3.png'

function Projects(){
    return(
        <>
        <h1 style={{margin: "60px", textAlign:"center", fontWeight:"bold", backgroundColor:"#4A90E2", padding:"30px", color:"white"}}>MY PROJECTS</h1>

        <table style={{margin: "auto", width:"600px"}}>
            <tr>
                <td>
                    <Card style={{ width: '18rem', padding: "20px", margin:"40px", backgroundColor:"#FBE9D0"}}>
                        <Card.Img variant="top" src={Project1} />
                        <Card.Body>
                        <Card.Title style={{fontWeight:"bold", fontSize:"30px"}}>Weekly Diet & Exercise Tracker</Card.Title>
                        <Card.Text>
                            To monitor your meals and workouts for a healthier lifestyle
                        </Card.Text>
                        <Button variant="primary" href="https://20198203-star.github.io/index/" style={{backgroundColor:"#2E2E2E", borderColor:"#2E2E2E"}}>Project Link</Button>
                        </Card.Body>
                    </Card>
                </td>

                <td>
                    <Card style={{ width: '18rem', padding: "20px", margin:"40px", backgroundColor:"#FBE9D0"}}>
                        <Card.Img variant="top" src={Project2} />
                        <Card.Body>
                        <Card.Title style={{fontWeight:"bold", fontSize:"30px"}}>In the World's Wonders</Card.Title>
                        <Card.Text>
                            A starting list for traveling : A guide
                        </Card.Text>
                        <Button variant="primary" href="https://20198203-star.github.io/travel/index.html" style={{backgroundColor:"#2E2E2E", borderColor:"#2E2E2E"}}>Project Link</Button>
                        </Card.Body>
                    </Card>
                </td>

                <td>
                    <Card style={{ width: '18rem', padding: "20px",  margin:"40px", backgroundColor:"#FBE9D0"}}>
                        <Card.Img variant="top" src={Project3} />
                        <Card.Body>
                        <Card.Title style={{fontWeight:"bold", fontSize:"30px"}}>Quizzer</Card.Title>
                        <Card.Text>
                            A Quizzer : Questions on your future path, likes, dislikes, skills, hobbies, and character traits
                        </Card.Text>
                        <Button variant="primary" href="https://20198203-star.github.io/Lab2/Lab2.html" style={{backgroundColor:"#2E2E2E", borderColor:"#2E2E2E"}}>Project Link</Button>
                        </Card.Body>
                    </Card>
                </td>
            </tr>
        </table>
    </>
    );
}

export default Projects