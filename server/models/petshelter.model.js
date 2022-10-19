const mongoose = require("mongoose");

const PetsheltersSchema = new mongoose.Schema({
  pet_name: {
    type: String,
    required: [true, "name is required"],
    minLength: [3, "Pet Name must be at least 3 characters"],
  },
  pet_type: {
    type: String,
    required: [true, "type is required"],
    minLength: [3, "Pet Type must be at least 3 characters"],
  },
  pet_desc: {
    type: String,
    required: [true, "description is required"],
    minLength: [3, "Pet Descritpion must be at least 3 characters"],
  },
  skill1: {type: String},
  skill2: {type: String},
  skill3: {type: String}
}, { timestamps: true})

module.exports.petshelter = mongoose.model("petshelter", PetsheltersSchema);