import mongoose  from "mongoose";
async function connect(){
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/chating').then(()=>{console.log('db connected')})
    } catch (error) {
        console.log(error.meseege)
    }
}
export default connect