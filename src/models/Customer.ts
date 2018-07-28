import * as mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/entria');

const CustomerSchema = new mongoose.Schema({ name: String, email: String,  age: Number });

export default mongoose.model('Customer', CustomerSchema)
