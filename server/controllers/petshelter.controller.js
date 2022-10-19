const {petshelter} = require ('../models/petshelter.model');
module.exports.list = (request, response) => {
    petshelter.find({})
    .then(petshelters => {
        response.json(petshelters)
        ;
    })
    .catch(err => {
        response.status(400).json(err);
    })
}

module.exports.create = (request, response) => {
    const {pet_name, pet_type, pet_desc, skill1, skill2, skill3} = request.body;
    petshelter.create({
        pet_name, 
        pet_type, 
        pet_desc, 
        skill1, 
        skill2, 
        skill3
    })
    .then (petshelter => {
        response.json(petshelter)
    })
    .catch (err => {
        response.status(400).json(err)
    })
}

module.exports.detail = (request, response) => {
    const { id } = request.params;
    petshelter.findOne({ _id: id })
        .then(petshelter => {
            response.json(petshelter)
        })
        .catch (err => {
            response.status(400).json(err);
        })
}

module.exports.update = (request, response) => {
    const { id } = request.params;
    const { pet_name, pet_type, pet_desc, skill1, skill2, skill3} = request.body;
    petshelter.findOneAndUpdate({ _id: id }, {
        pet_name,
        pet_type,
        pet_desc,
        skill1,
        skill2,
        skill3
    },
        {
            new: true,
            useFindAndModify: true
        })
        .then (petshelter => {
            response.json(petshelter)
        })
        .catch(err => {
            response.status(400).json(err);
        })
}

module.exports.delete = (request, response) => {
    const { id } = request.params;
    petshelter.deleteOne({ _id: id})
        .then(deleteConfirmation => {
            response.json(deleteConfirmation);
        })
        .catch (err => {
            response.status(400).json(err)
        })
}