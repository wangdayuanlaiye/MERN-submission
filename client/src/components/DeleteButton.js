import React from 'react';
import axios from  'axios';
import { navigate } from '@gatsbyjs/reach-router';

const DeleteButton = props => {
    const { id } = props;
    const onClickHandler = e => {
        axios.delete ("http://localhost:8000/api/petshelters/" + id)
            .then(response => {
                console.log(response);
                navigate('/');
            })
            .catch (err => {
                console.log(err);
            })
    }
    return (
        <button onClick ={onClickHandler}>Adopt </button>
    )
}

export default DeleteButton