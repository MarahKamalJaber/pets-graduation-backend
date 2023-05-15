const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

const reservationSchema = mongoose.Schema(
  { 
    userId: {
      type: String,
      unique: true,
      trim: true,
    },
    adoptionid: {
      type: String,
      unique: true,
    },

    detaTime :{
      type: String,
      default: 1,
    }
  }
  // { timestamps: true } //to include createdAt and updatedAt
); 

reservationSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("reservationAdop", reservationSchema);
