import mongoose from 'mongoose'

export default function dbConfig(){
    mongoose.set('strictQuery', false)

    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('mongodb connected!')
    }).catch((err) => {
        console.log(err.message)
    })

    process.on('SIGINT', async () => {
        await mongoose.connection.close()
        process.exit(0);
    })
}
