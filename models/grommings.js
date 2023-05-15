const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

// getDoctors {docName , clinicName , Description , image , docId}
const groomSchema = mongoose.Schema(
  { 
    grompersonId: {
      type: Number,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      default: 1,
    },

    clinicgromName: {
      type: String,
    },
    
    exp: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    description :{
      type: String,
      default: 1,
    },

    image:{
      type: String,
      default: 1,
    },
    status :{
      type: Number,
      default: 0,
    }
     

   
  },
  { timestamps: true } //to include createdAt and updatedAt
);
  // { timestamps: true } //to include createdAt and updatedAt

groomSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("grommings", groomSchema);
