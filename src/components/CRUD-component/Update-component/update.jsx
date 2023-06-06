import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

export const Update = () => {
    const Navigate = useNavigate();

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');



    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))
        setEmail(localStorage.getItem('email'))

    }, []);


    function handleUpdate(event) {
        event.preventDefault();
        Axios.put(`https://647ed3c9c246f166da8f6e98.mockapi.io/CRUD/${id}`, {
            name: name,
            age: age,
            email: email
        }).
            then((response) => {
                console.log(response);
                Navigate('/');
            }).catch((error) => {
                console.log(error);
            });

    }

    return (
        <>
            <div className='row'>
                <div className="col-md-4">
                    <div className='bg-primary p-4 text-center'>
                        <h1>Update Data</h1>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className='form-group'>
                            <label htmlFor="">Enter Name</label>
                            <input type="text" name='name' onChange={(e) => setName(e.target.value)} placeholder='Name' className='form-control' value={name} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Enter Age</label>
                            <input type="number" name='age' placeholder='Age' onChange={(e) => setAge(e.target.value)} className='form-control' value={age} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Enter Email</label>
                            <input type="email" name='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} className='form-control' value={email} />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type="submit" value='Update' className='btn btn-primary' />
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
