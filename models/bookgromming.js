const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

// getDoctors {docName , clinicName , Description , image , docId}
const BokinggroomSchema = mongoose.Schema(
  { 
    grompersonId: {
      type: String,
      trim: true,
    },
    
     userId: {
      type: String,
      trim: true,
    },
    dateTime: {
      type: String,
      unique: true,

    },

    status :{
      type: Number,
      default: 0,
    }
  },
  { timestamps: true } //to include createdAt and updatedAt
);
  // { timestamps: true } //to include createdAt and updatedAt

  BokinggroomSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("bokinggromming", BokinggroomSchema);
