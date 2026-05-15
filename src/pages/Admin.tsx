import { useState } from "react";
import { Navigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Admin = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const[formData, setFormData] = useState({
        email:"",
        password:"",
        confirm:""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        setFormData ({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (isLoggedIn){
        return <Navigate to="/dashboard" />
    }


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!formData.email){
            alert("Email is required!");
            return;
        }

        if(!formData.password){
            alert("Password is required!");
            return;
        }

        if(!formData.confirm){
            alert("Confirm Password");
            return;
        }

        if(formData.password != formData.confirm){
            alert("Password does not match");
            return;
        }

        if(formData.email=="Admin@gmail.com" && formData.password=="AdminPassword" && formData.confirm == formData.password){
            alert("Welcome, Admin!");
            setIsLoggedIn(true);
        } else {
            alert("Invalid Admin");
            e.preventDefault();
        }
    }

    return(
    <>
    <form onSubmit={handleSubmit} style={{margin: "100px"}}>
        <h1 style={{margin: "60px", fontWeight:"bold", textAlign:"center", color:"white"}}>LOGIN</h1>
            <Container style ={{margin: "auto", backgroundColor: "#F4F4F4", padding:"50px", maxWidth:"400px"}}>
                <Row>
                    <Col md={1}>
                        <label>Email: </label>
                        <br />
                        <input 
                        style={{marginBottom: "50px", width:"300px", height:"50px"}}
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        />

                        <label>Password: </label>
                        <br />
                        <input 
                        style={{marginBottom: "50px", width:"300px", height:"50px"}}
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        />

                        <label>ConfirmPassword: </label>
                        <br />
                        <input 
                        style={{marginBottom: "50px", width:"300px", height:"50px"}}
                        type="password"
                        placeholder="Confirm Password"
                        name="confirm"
                        value={formData.confirm}
                        onChange={handleChange}
                        />

                        <button type="submit" style={{backgroundColor: "#4A90E2", borderColor:"#4A90E2", width:"200px", height:"40px"}}>Login</button>
                    </Col>
                </Row>
            </Container>
    </form>
    </>
    )
}

export default Admin