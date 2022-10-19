import React, { useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate } from '@gatsbyjs/reach-router';
import { Link } from '@gatsbyjs/reach-router';

const CreateView = props => {
    const [errors, setErrors] = useState([]);
    const onSubmitHandler = (e, data) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/petshelters", data)
            .then(response => {
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }
    return (
        <div>
            <h1>Create a new Pet Shelter</h1>
            <Link to="/">Back to Home</Link>
            {errors.map((error,index)=> {
                return (
                    <p key={index}>{error}</p>
                )
            })}
            <Form
                onSubmitHandler = {onSubmitHandler}
                initialPetName = ""
                initialPetType = ""
                initialPetDesc = ""
                initialSkill1 = ""
                initialSkill2 = ""
                initialSkill3 = ""
            />
        </div>
    )
}
export default CreateView;