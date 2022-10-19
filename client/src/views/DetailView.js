import React, { useState, useEffect } from 'react';
import DeleteButton from '../components/DeleteButton';
import { Link } from '@gatsbyjs/reach-router';
import axios from 'axios';

const DetailView = props => {
    const { id } = props;
    const [petshelter, setPetshelter] = useState({});
    useEffect(() => {
        axios.get ('http://localhost:8000/api/petshelters/' + id)
        .then((response) => {
            setPetshelter(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div>
            <h1>Details about:  {petshelter.pet_name} </h1>
            <Link to="/">Back to Home</Link>
            <p>Pet Type: {petshelter.pet_type}</p>
            <p>Pet Description: {petshelter.pet_desc}</p>
            <p>Skills: {petshelter.skill1} {petshelter.skill2} {petshelter.skill3} </p>
            <DeleteButton id ={petshelter._id}/>
        </div>
    )
}

export default DetailView;