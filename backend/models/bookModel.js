import mongoose from "mongoose";

const BookSchema = mongoose.Schema(
    {
    title : {
        type : String,
        require: true,
    },
    author : {
        type : String,
        require: true,
    },
    publishYear : {
        type : String,
        require: true,
    },
},
    {
        timestamps :true,
    }
    
)

export const Book = mongoose.model('books',BookSchema);