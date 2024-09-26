import mongoose from "mongoose";
 

const connectMongodb= async () =>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongodb connected:${conn.connection.host}`);
    }
    catch(console)
    {
        console.error(`error connection mongodb:${error.message}`);
        process.exit(1);
    }
}
export default connectMongodb;