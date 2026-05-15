import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import fg_lab1 from '../images/fg_lab1.png'
import fg_lab2 from '../images/fg_lab2.png'
import fg_lab3 from '../images/fg_lab3.png'
import fg_labexam from '../images/fg_labexam.png'
import mg_lab1 from '../images/mg_lab1.png'
import mg_lab2 from '../images/mg_lab2.png'
import mg_lab3 from '../images/mg_lab3.png'
import finals_lab1 from '../images/finals_lab1.png'

function Projects(){
    return(
        <>
        <h1 style={{margin: "60px", textAlign:"center", fontWeight:"bold", backgroundColor:"#4A90E2", padding:"30px", color:"white"}}>MY PROJECTS</h1>

        <Container style={{margin: "auto", maxWidth:"1200px"}}>
            <Row>
                <Col md={4}>
                    <Card style={{ width: '320px', height: '500px', padding: "20px", margin:"40px", backgroundColor:"#F4F4F4"}}>
                        <Card.Img variant="top" src={fg_lab1} />
                        <hr />
                        <Card.Body>
                        <Card.Title style={{fontWeight:"bold", fontSize:"30px"}}>FG Lab 1</Card.Title>
                        <Card.Text>
                            A sample resume. A website that contains my information and educational background.
                        </Card.Text>
                        <Badge pill bg="dark">React</Badge> 
                        <Badge pill bg="dark">Typescript</Badge> <br />
                        <Button variant="primary" href="https://20198203-star.github.io/UNIT1_LESSON1_A_Gadgad/" style={{backgroundColor:"#4A90E2", borderColor:"#4A90E2", marginTop:"50px"}}>Project Link</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '320px', height: '500px', padding: "20px", margin:"40px", backgroundColor:"#F4F4F4"}}>
                        <Card.Img variant="top" src={fg_lab2} />
                        <hr/>
                        <Card.Body>
                        <Card.Title style={{fontWeight:"bold", fontSize:"30px"}}>FG Lab 2</Card.Title>
                        <Card.Text>
                            A student dashboard that displays the student name, course, enrollment status, and list of subjects. 
                        </Card.Text>
                        <Badge pill bg="dark">React</Badge>
                        <Badge pill bg="dark">Typescript</Badge> <br />
                        <br />
                        <Button variant="primary" href="https://20198203-star.github.io/FG_LAB2_Gadgad/?authuser=0" style={{backgroundColor:"#4A90E2", borderColor:"#4A90E2"}}>Project Link</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '320px', height: '500px', padding: "20px", margin:"40px", backgroundColor:"#F4F4F4"}}>
                        <Card.Img variant="top" src={fg_lab3} />
                        <hr />
                        <Card.Body>
                        <Card.Title style={{fontWeight:"bold", fontSize:"30px"}}>FG Lab 3</Card.Title>
                        <Card.Text>
                             A student information system that displays the student's name, course and age.
                        </Card.Text>
                        <Badge pill bg="dark">React</Badge>
                        <Badge pill bg="dark">Typescript</Badge> <br />
                        <br />
                        <Button variant="primary" href="https://20198203-star.github.io/FG_Lab3_Gadgad/" style={{backgroundColor:"#4A90E2", borderColor:"#4A90E2", marginTop:"20px"}}>Project Link</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <Card style={{ width: '320px', height: '500px', padding: "20px", margin:"40px", backgroundColor:"#F4F4F4"}}>
                        <Card.Img variant="top" src={fg_labexam} />
                        <hr />
                        <Card.Body>
                        <Card.Title style={{fontWeight:"bold", fontSize:"30px"}}>FG Lab Exam</Card.Title>
                        <Card.Text>
                             A university club member dashboard that contains the member list and their information.
                        </Card.Text>
                        <Badge pill bg="dark">React</Badge>
                        <Badge pill bg="dark">Typescript</Badge> <br />
                        <br />
                        <Button variant="primary" href="https://20198203-star.github.io/2nd-Sem_FG_Exam/?authuser=0" style={{backgroundColor:"#4A90E2", borderColor:"#4A90E2", marginTop:"20px"}}>Project Link</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '320px', height: '500px', padding: "20px", margin:"40px", backgroundColor:"#F4F4F4"}}>
                        <Card.Img variant="top" src={mg_lab1} />
                        <hr />
                        <Card.Body>
                        <Card.Title style={{fontWeight:"bold", fontSize:"30px"}}>MG Lab 1</Card.Title>
                        <Card.Text>
                             A university event registration dashboard that displays each of the event's information.
                        </Card.Text>
                        <Badge pill bg="dark">React</Badge>
                        <Badge pill bg="dark">Typescript</Badge> <br />
                        <br />
                        <Button variant="primary" href="https://20198203-star.github.io/MG_Lab1/" style={{backgroundColor:"#4A90E2", borderColor:"#4A90E2", marginTop:"20px"}}>Project Link</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '320px', height: '500px', padding: "20px", margin:"40px", backgroundColor:"#F4F4F4"}}>
                        <Card.Img variant="top" src={mg_lab2} />
                        <hr/>
                        <Card.Body>
                        <Card.Title style={{fontWeight:"bold", fontSize:"30px"}}>MG Lab 2</Card.Title>
                        <Card.Text>
                             A university website that contains the announcements, updates, services and contact about the institution.
                        </Card.Text>
                        <Badge pill bg="dark">React</Badge>
                        <Badge pill bg="dark">Typescript</Badge>
                        <Badge pill bg="dark">HTML</Badge> <br />
                        <br />
                        <Button variant="primary" href="https://20198203-star.github.io/MG_LAB5_Gadgad/" style={{backgroundColor:"#4A90E2", borderColor:"#4A90E2"}}>Project Link</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Card style={{ width: '320px', height: '500px', padding: "20px", margin:"40px", backgroundColor:"#F4F4F4"}}>
                        <Card.Img variant="top" src={mg_lab3} />
                        <hr/>
                        <Card.Body>
                        <Card.Title style={{fontWeight:"bold", fontSize:"30px"}}>MG Lab 3</Card.Title>
                        <Card.Text>
                             A student book request form that aquires information on the name, studentID, book title, author and the reason for request.
                        </Card.Text>
                        <Badge pill bg="dark">React</Badge>
                        <Badge pill bg="dark">Typescript</Badge> <br />
                        <br />
                        <Button variant="primary" href="https://20198203-star.github.io/MG_Lab3/" style={{backgroundColor:"#4A90E2", borderColor:"#4A90E2"}}>Project Link</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '320px', height: '500px', padding: "20px", margin:"40px", backgroundColor:"#F4F4F4"}}>
                        <Card.Img variant="top" src={finals_lab1} />
                        <hr/>
                        <Card.Body>
                        <Card.Title style={{fontWeight:"bold", fontSize:"30px"}}>FINALS Lab 1</Card.Title>
                        <Card.Text>
                             A course feedback system that acquires the student name, course, rating and comments.
                        </Card.Text>
                        <Badge pill bg="dark">React</Badge>
                        <Badge pill bg="dark">Typescript</Badge> <br />
                        <br />
                        <Button variant="primary" href="https://20198203-star.github.io/Finals_Lab1_Gadgad/" style={{backgroundColor:"#4A90E2", borderColor:"#4A90E2", marginTop:"20px"}}>Project Link</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '320px', height: '500px', padding: "20px", margin:"40px", backgroundColor:"#F4F4F4"}}>
                        <Card.Img variant="top" src={finals_lab1} />
                        <hr/>
                        <Card.Body>
                        <Card.Title style={{fontWeight:"bold", fontSize:"30px"}}>FINALS Lab 3</Card.Title>
                        <Card.Text>
                             A course feedback system that acquires the student name, course, rating and comments.
                        </Card.Text>
                        <Badge pill bg="dark">React</Badge>
                        <Badge pill bg="dark">Typescript</Badge> <br />
                        <br />
                        <Button variant="primary" href="https://20198203-star.github.io/Finals_Lab1_Gadgad/" style={{backgroundColor:"#4A90E2", borderColor:"#4A90E2", marginTop:"20px"}}>Project Link</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

        <h1 style={{margin: "60px", textAlign:"center", fontWeight:"bold", backgroundColor:"#4A90E2", padding:"30px", color:"white"}}>REFLECTION</h1>
        <p id="reflection">
            In the past few months of activities in the subject APTECH, I was determined to finish every activity with satisfaction and fulfillment. 
            However, it was challenging as time went by. With every activity, I learned new things and I had different feelings for each.
            Some were challenging to the point where I could not keep up but it gave me more reason to do more than what I could do now, in the future.
            I know that I have it in me to enhance my performance, which gave me a thought to ponder on. I may not have finished the latest activites with the greatest remarks,
            I am and have been reflecting on how to excel in the next challenges that I may face. Despite the hardships, I would say that
            I have learnt many which is useful for my future career and skills. Learning about how to make a functional website is helpful
            and efficient for creating projects and enhancing my skills. This subject has given me many lessons, knowledge, skill-building activities and reflections, which is beneficial for me and my future.
        </p>
    </>
    );
}

export default Projects