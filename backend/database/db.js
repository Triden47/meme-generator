import mongoose from 'mongoose'

const Connection = async () => {
    const uri = 'mongodb://localhost:27017/meme-generator'

    try {
        await mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database connected successfully')
    } catch(error) {
        console.log('Error while connecting to mongodb', error)
    }
}

export default Connection;