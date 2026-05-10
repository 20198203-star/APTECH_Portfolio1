import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

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

    const deleteProfile = (id:String) => {
            if(window.confirm("Are you sure you would want to delete the data?")){
                fetch("http://localhost:5000/deleteProfile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify ({ 
                    userid: id,
                }),
            })

            .then((res) => res.json())
            .then((data) => {
                alert(data.data);
                fetchData();
            })
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
        <section style={{margin: "50px"}}>
            <h1 style={{fontWeight: "bold", color:"white"}}>ADMIN DASHBOARD</h1>

            <table style={{width: "900px", margin: "auto", backgroundColor: "#FBE9D0"}}>
                <thead>
                <tr>
                    <th style={{padding: "40px"}}>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {data.map(i=>{
                    return(
                        <tr key={i._id}>
                            <td style={{padding: "40px"}}>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.message}</td>
                            <td><button onClick={() => deleteProfile(i._id)}>Delete</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <button onClick={handleLogout} style={{backgroundColor: "#4A90E2", borderColor:"#4A90E2", width:"200px", height:"40px", marginTop:"100px", marginLeft:"50px"}}>Log Out</button>
        </section>
        </>
    )
}


export default Dashboard
