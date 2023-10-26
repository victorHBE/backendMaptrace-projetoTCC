import mongoose from "mongoose";

const URI = 'mongodb+srv://admin:e01GkYhTANBNBmxA@cluster0.ueor9jq.mongodb.net/?retryWrites=true&w=majority'

const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI);    
    }
    
}

export default databaseConnection