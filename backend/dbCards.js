import mongoose from "mongoose"


const Cards = mongoose.model('Card',
    { name: String,
    imgURL:String }
    );

export default Cards;