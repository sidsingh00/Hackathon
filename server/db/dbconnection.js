import mongoose from 'mongoose'
const connection = async() => {
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI);
        console.log(`Monog db connected ${conn.connection.host}`);
    }
    catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connection;