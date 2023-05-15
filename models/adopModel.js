const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

const adoptionSchema = mongoose.Schema(
  {
    AdoptionId :{
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      lowercase: true,
      unique: true,
      trim: true,
      required: true,

    },
    petStory: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,

    },
    location: {
      type: String,
      default: 1,
    },
    petImage: {
      type: String,
    },
    color: {
      type: String,
      default: 1,
    } ,
    weight :{
      type: String,
      default: 1,
    },
    age :{
      required: true,

      type: String,
      default: 1,
    },
    gender :{
      required: true,

      type: String,
      default: 1,
    },
    type :{
      required: true,

      type: String,
      default: 0,
    },
    
    status :{
      type: String,
      default: 1,
    }
  }
  // { timestamps: true } //to include createdAt and updatedAt
);
adoptionSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Adoption", adoptionSchema);

