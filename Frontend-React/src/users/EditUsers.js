import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditUsers = () => {
   

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })
    const {id}=useParams();
    const { name, username, email } = user;
    const navigate = useNavigate();
    const oninputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        dataOnload();

    }, [])
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/update/${id}`, user)
        navigate("/")
    }
    const dataOnload = async () => {

        const result = await axios.get(`http://localhost:8080/users/${id}`)
        setUser(result.data);
    }
    return (
        <div>
            <div className="conatainer">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <div className="text-centr m-4">Edit User   </div>
                        <form onSubmit={(e) => onSubmit(e)}>

                            <div className="mb-3">
                                <label htmlFor="Name" className='form-label'>
                                    Name
                                </label>
                                <input type={"text"}
                                    className='form-control'
                                    placeholder='Enter your name'
                                    name='name'
                                    value={name}
                                    onChange={(e) => oninputChange(e)} />

                                <label htmlFor="Name" className='form-label'>
                                    Username
                                </label>
                                <input type={"text"}
                                    className='form-control'
                                    placeholder='Enter your username'
                                    name='username'
                                    value={username}
                                    onChange={(e) => oninputChange(e)}
                                />
                                <label htmlFor="Name" className='form-label'>
                                    Email
                                </label>
                                <input type={"text"}
                                    className='form-control'
                                    placeholder='Enter your email'
                                    name='email'
                                    value={email}
                                    onChange={(e) => oninputChange(e)}
                                />
                                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                                <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUsers