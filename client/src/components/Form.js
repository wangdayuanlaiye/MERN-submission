import React, { useState } from 'react';

const Form = props => {
    const {onSubmitHandler, initialPetName, initialPetType, initialPetDesc, initialSkill1, initialSkill2, initialSkill3} = props;
    const [pet_name, setPetName] = useState(initialPetName);
    const [pet_type, setPetType] = useState(initialPetType);
    const [pet_desc, setPetDesc] = useState(initialPetDesc);
    const [skill1, setSkill1] = useState(initialSkill1);
    const [skill2, setSkill2] = useState(initialSkill2);
    const [skill3, setSkill3] = useState(initialSkill3);
    return (
        <form onSubmit={e => { onSubmitHandler(e, { pet_name, pet_type, pet_desc, skill1, skill2, skill3}) }}>
            <p>
                <label>Pet Name</label>
                <input type = "text" value = {pet_name} name = "pet_name" onChange = {(e) => { setPetName(e.target.value) }}/>
            </p>
            <p>
                <label>Pet Type</label>
                <input type = "text" value = {pet_type} name = "pet_type" onChange = {(e) => { setPetType(e.target.value) }}/>
            </p>
            <p>
                <label>Pet Description</label>
                <input type = "text" value = {pet_desc} name = "pet_desc" onChange = {(e) => { setPetDesc(e.target.value) }}/>
            </p>
            <p>
                <label>Skill 1</label>
                <input type = "text" value = {skill1} name = "skill1" onChange = {(e) => { setSkill1(e.target.value) }}/>
            </p>
            <p>
                <label>Skill 2</label>
                <input type = "text" value = {skill2} name = "skill2" onChange = {(e) => { setSkill2(e.target.value) }}/>
            </p>
            <p>
                <label>Skill 3</label>
                <input type = "text" value = {skill3} name = "skill3" onChange = {(e) => { setSkill3(e.target.value) }}/>
            </p>
            <input type = "submit" value = "Add Pets"/>
        </form>
    )
}

export default Form;