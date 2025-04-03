const { ref } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listeningSchema = new Schema({
    title: {
    type: String,
    required: true
  },
    description: String,
    image: {
       type: String,
       default:
        "  https://media.istockphoto.com/id/1009803562/photo/group-of-people-on-peak-mountain-climbing-helping-team-work-travel-trekking-success-business.jpg?s=612x612&w=is&k=20&c=OJT4qsWaKiVM_F80Q9odvODqZKrym7ZrFe3RxPWETfM=",
   set: (v) =>
   v === ""
   ? "https://media.istockphoto.com/id/1009803562/photo/group-of-people-on-peak-mountain-climbing-helping-team-work-travel-trekking-success-business.jpg?s=612x612&w=is&k=20&c=OJT4qsWaKiVM_F80Q9odvODqZKrym7ZrFe3RxPWETfM="
   : v,
  },
    price: Number,
    location: String,
    country: String, 
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review ",
      },
    ],
});

const Listing = mongoose.model("Listing",listeningSchema);
module.exports = Listing;