const mongoose = require("mongoose");
const { number } = require("sharp/lib/is");

const DetailsSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: Number, required: true },
    age: { type: Number, required: true },
    date:{type:String,required:true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Details", DetailsSchema);
