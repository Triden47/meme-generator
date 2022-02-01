import mongoose from 'mongoose'

const imageSchema = new mongoose.Schema({
    number: {
        type: Number,
        require: true
    },
    public_id: {
        type: String,
        require: true
    }
})

const image = mongoose.model('image', imageSchema)

export default image
