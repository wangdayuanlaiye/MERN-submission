import React, { useState,useEffect }from 'react';
import Form from '../components/Form';
import axios from 'axios';
import {navigate} from '@gatsbyjs/reach-router';

const EditView = props => {
    const { id } = props;
    const [petshelter, setPetshelter] = useState({});
    const [loaded, setloaded] = useState(false);
    useEffect(() =>{
        axios.get ('http://localhost:8000/api/petshelters/' + id)
        .then(response => {
            setPetshelter(response.data)
            setloaded(true);
        })
        .catch(err => {
            console.log(err)
        });
    })
    const onSubmitHandler = (e, data) =>{
        e.preventDefault();
        axios.put("http://localhost:8000/api/petshelters/" + id, data)
            .then(
                response => {
                    navigate('/');
                })
                .catch(err => {
                    console.log(err);
                })
    }
    return (
        <div>
            <h1> Edit {petshelter.pet_name}</h1>
            {loaded && 
            <Form
                onSubmitHandler = {onSubmitHandler}
                initialPetName= {petshelter.pet_name}
                initialPetType= {petshelter.pet_type}
                initialPetDesc= {petshelter.pet_desc}
                initialSkill1= {petshelter.skill1}
                initialSkill2= {petshelter.skill2}
                initialSkill3= {petshelter.skill3}

            />
            }
        </div>
    )
}
export default EditView;