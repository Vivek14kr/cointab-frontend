import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
 const navigate = useNavigate()
  const fetchUsers = async () => {
    // Make a request to fetch the users
     await fetch("http://localhost:3100/fetch-data")
    .then(res => res.json()).catch(data => alert("Fetched Successfuly"));


   
  };
 const userDetails = ()=>{
  navigate("/user-details")

 }
  const deleteUsers = async () => {
     
     await fetch(`http://localhost:3100/delete-users`)
       .then((k) => k.json())
       .then((res) => alert("Deleted Successfully"));
     
  };


  return (
    <div>
      <button onClick={fetchUsers}>Fetch Users</button>
      <button onClick={deleteUsers}>Delete Users</button>
      <button onClick={userDetails}>User Details</button>
    </div>
  );
}

export default Home;
