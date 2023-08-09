import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = (props) => {
    const namee = props.name;
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadusers();
    }, [])
    const loadusers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/delete/${id}`)
        loadusers();
    }
    return (
        <div className='container'>
            <div className="py-4">
                <h1>{namee}</h1>

                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (

                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/viewuser/${user.id}`} className='btn btn-primary mx-2'>View</Link>
                                        <Link to={`/edituser/${user.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Home