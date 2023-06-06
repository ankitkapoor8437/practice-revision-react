import Axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const Read = () => {

    const [apiData, setApiData] = useState([])
    const getData = () => {
        Axios.get('https://647ed3c9c246f166da8f6e98.mockapi.io/CRUD')
            .then((response) => {
                setApiData(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }

    const handleDelete = (id) => {
        Axios.delete(`https://647ed3c9c246f166da8f6e98.mockapi.io/CRUD/${id}`).
            then((response) => {
                console.log(response);
                getData();
            }).catch((error) => {
                console.log(error);
            })

    }

    const setDateToStorage = (id, name, age, email) => {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('email', email);
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className='mb-2 mt-2'>
                        <NavLink to='/create'>
                            <button className='btn btn-primary'>Create New Data</button>
                        </NavLink>
                    </div>
                    <table className='table table-bordered table-black table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {apiData.map((apiDataItem) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{apiDataItem.id}</td>
                                            <td>{apiDataItem.name}</td>
                                            <td>{apiDataItem.age}</td>
                                            <td>{apiDataItem.email}</td>
                                            <td><Link to='/update'><button className='btn btn-primary' onClick={() => setDateToStorage(apiDataItem.id, apiDataItem.name, apiDataItem.age, apiDataItem.email)} >EDIT</button></Link> </td>
                                            <td><button className='btn btn-danger' onClick={() => { if (window.confirm("Are you sure to delete data?")) { handleDelete(apiDataItem.id) } }} >DELETE</button></td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Read;