import { useState } from "react";
import emailjs from "@emailjs/browser";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
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

        setLoading(true);

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

        setLoading(false);
    }


    return(
    <>
    <form onSubmit = {handleSubmit}>
        <h1 style={{margin: "60px", textAlign:"center", fontWeight:"bold", backgroundColor:"#4A90E2", padding:"30px", color:"white"}}>CONTACT ME</h1>
    <Container style ={{margin: "auto", backgroundColor: "#F4F4F4", padding:"50px", maxWidth:"1000px"}}>
        <Row>
            <Col md={1}>
            <h3>Name: </h3>
            <input
            style={{marginBottom: "50px", width:"300px", height:"50px"}}
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            />
            <h3>Email: </h3>
            <input
            style={{marginBottom: "50px", width:"300px", height:"50px"}}
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            />
            <h3>Message: </h3>
            <textarea
            style={{marginBottom: "50px", width:"300px", height:"250px"}}
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            />
            <button
            style={{backgroundColor: "#4A90E2", borderColor:"#4A90E2", width:"200px", height:"40px"}}
            type="submit"
            disabled={loading}
            >{loading ? "Sending message...": "Send Message"}</button>
            </Col>
            <Col style={{marginLeft:"400px", marginTop:"30px"}}>
                <Image src={mara2} style={{width:"400px", marginBottom:"20px"}} rounded />
                <h5>Gadgad, Mara Syldeni M.</h5>
                <h5>BSIT</h5>
            </Col>
        </Row>
        <Row>
            <p>{status}</p>
        </Row>
    </Container>
    </form>
    </>
    )
}


export default Contact

