import { useState } from "react";
import emailjs from "@emailjs/browser";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import mara2 from '../images/mara2.jpg'


const Contact:React.FC = () => {
    const [formData, setFormData] = useState ({
        name:"",
        email:"",
        message:""
    });


    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        setFormData ({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);

        if(!formData.name){
            alert("Name is required!")
            return;
        }


        if(!formData.email){
            alert("Email is required!")
            return;
        }


        if(!formData.message){
            alert("Message is required!")
            return;
        }


        try {
            const res = await fetch("http://localhost:5000/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify ({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                }),
            });


            const data = await res.json();
            alert(data.message);


        }catch(error){
            console.error(error);
            alert("Error Registration")
        }


        try {
            const response = await emailjs.send(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message
                },
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            );


            console.log("SUCCESS", response);
            setStatus("Message is sent to email!");


            setFormData({
                name:"",
                email:"",
                message:""
            });
           
        } catch (error) {
            console.error("ERROR", error);
            setStatus("Failed to deliver message");
        }
    }


    return(
    <>
    <form onSubmit = {handleSubmit}>
        <h1 style={{margin: "60px", marginLeft: "150px", fontWeight:"bold", color:"white"}}>CONTACT ME</h1>
    <Container style ={{margin: "70px", marginLeft: "200px", backgroundColor: "#FBE9D0", padding:"30px"}}>
        <Row>
            <Col md={3}>
            <h3>Name: </h3>
            <input
            style={{marginBottom: "50px", width:"300px", height:"50px"}}
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            />
            </Col>
        </Row>
        <Row>
            <Col md={1}>
            <h3>Email: </h3>
            <input
            style={{marginBottom: "50px", width:"300px", height:"50px"}}
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            />
            </Col>
        </Row>
        <Row>
            <Col md={2}>
            <h3>Message: </h3>
            <textarea
            style={{marginBottom: "50px", width:"300px", height:"250px"}}
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            />
            </Col>
        </Row>
        <Row>
            <Col md={5}>
            <button
            style={{backgroundColor: "#4A90E2", borderColor:"#4A90E2", width:"200px", height:"40px"}}
            type="submit"
            disabled={loading}
            >{loading ? "Sending message...": "Send Message"}</button>
            </Col>
            <Row>
                <Col>
                <td><p>{status}</p></td>
                </Col>
            </Row>
        </Row>
    </Container>
    </form>
    </>
    )
}


export default Contact

