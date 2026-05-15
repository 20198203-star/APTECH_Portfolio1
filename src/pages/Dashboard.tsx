import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

type Profile = {
    _id: string,
    name: string,
    email: string,
    message: string
};

const Dashboard = () => {

    const [data, setData] = useState<Profile[]>([]);
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:5000/Allprofile");
                const data = await res.json();
                console.log(data, "profile");
                setData(data.data)
            } catch (err){
                console.error(err)
            }
        }

    useEffect(()=>{
        fetchData();
    }, []);

    const deleteProfile = async (id:string) => {
            if(!window.confirm("Are you sure you would want to delete the data?")) return;

            try{
                const res = await fetch("http://localhost:5000/deleteProfile", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify ({ id }),
            })
                const data = await res.json();
                alert(data.data);
                fetchData();
            } catch (err) {
                alert("Could not delete profile");
            }
    }


    if (isLoggedOut){
        return <Navigate to="/admin" />
    }

     const handleLogout = () => {
        alert("Are you sure?");
        setIsLoggedOut(true);
    }

    return (
        <>

        <h1 style={{fontWeight: "bold", color:"white"}}>ADMIN DASHBOARD</h1>

        <Container style ={{margin: "auto", backgroundColor: "#F4F4F4", padding:"50px", maxWidth:"1500px", textAlign:"center"}}>
             <Row>
                <Col>
                    <h2>Name</h2>
                </Col>

                <Col>
                    <h2>Email</h2>
                </Col>

                <Col>
                    <h2>Message</h2>
                </Col>

                <Col>
                    <h2>Delete</h2>
                </Col>

            </Row>

            {data.map(i=>{
                    return(
            <Row key={i._id}>
                <Col>
                    <h5>{i.name}</h5>
                </Col>

                <Col>
                    <h5>{i.email}</h5>
                </Col>

                <Col>
                    <h5>{i.message}</h5>
                </Col>

                <Col>
                    <h5><button onClick={() => deleteProfile(i._id)}>Delete</button></h5>
                </Col>
            </Row>
                    )
            })}
        </Container>

        <button onClick={handleLogout} style={{backgroundColor: "#4A90E2", borderColor:"#4A90E2", width:"200px", height:"40px", marginTop:"100px", marginLeft:"50px"}}>Log Out</button>
    </>
    )
}


export default Dashboard
