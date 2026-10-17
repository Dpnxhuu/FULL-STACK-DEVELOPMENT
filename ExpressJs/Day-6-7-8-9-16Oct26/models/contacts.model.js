import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';


const contactSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    address: String,
})

contactSchema.plugin(mongoosePaginate) 

const Contact = mongoose.model("Contact", contactSchema)

export default Contact;