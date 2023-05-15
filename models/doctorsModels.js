const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

// getDoctors {docName , clinicName , Description , image , docId}
const doctorsSchema = mongoose.Schema(
  { 
    docId: {
      type: Number,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      default: 1,
    },

    clinicName: {
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

doctorsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("doctors", doctorsSchema);
