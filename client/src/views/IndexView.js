import React, { useState, useEffect } from 'react';
import { Link } from '@gatsbyjs/reach-router';
import axios from 'axios';

const IndexView = props => {
    const [petshelters, setPetshelters] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/petshelters")
        .then((response) => {
            setPetshelters(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[])
    return (
        <div>
            <h1>Pet Shelter</h1>
            <p>These pets are looking for a good home</p>
            <Link to="/pets/new">Add a pet to the shelter</Link>
            <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
                {petshelters.map((petshelter, index) =>{
                    return (
                        <li key={index}><Link to={"/pets/" + petshelter._id}>{petshelter.pet_name} | {petshelter.pet_type} Details</Link> | <Link to= {"/pets/" + petshelter._id + "/edit"}>Edit</Link></li>
                    )
                })}
            </tbody>
          </table>
        </div>
    )
}

export default IndexView;
