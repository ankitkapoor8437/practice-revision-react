import Axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

export const Create = () => {
    const Navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: ""
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        Axios.post("https://647ed3c9c246f166da8f6e98.mockapi.io/CRUD", {
            name: formData.name,
            age: formData.age,
            email: formData.email

        }).then((response) => {
            console.log(response);
            Navigate('/');
        }).catch((error) => {
            console.log(error);
        })
        console.log(formData);
    }


    return (
        <>
            <div className='row'>
                <div className="col-md-4">
                    <div className='bg-primary p-4 text-center'>
                        <h1>Create Data</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="">Enter Name</label>
                            <input type="text" name='name' onChange={handleChange} placeholder='Name' className='form-control' value={formData.name} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Enter Age</label>
                            <input type="number" name='age' placeholder='Age' onChange={handleChange} className='form-control' value={formData.age} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Enter Email</label>
                            <input type="email" name='email' placeholder='email' onChange={handleChange} className='form-control' value={formData.email} />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type="submit" value='Submit' className='btn btn-primary' />
                            <Link to='/' className='d-grid'>
                                <button className='btn btn-danger' >Return Back</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
