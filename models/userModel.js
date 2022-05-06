const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, "Please enter your First Name!"],
        trim: true
    },


    email:{
        type: String,
        required: [true, "Please enter your Email!"],
        trim: true,
        unique: true
    },


    password:{
        type: String,
        required: [true, "Please enter your Password!"],
    },

    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },
    
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/delwfdyfw/image/upload/v1648106550/avatar/images_ge7xhy.png"
    }
}, {
    timestamps: true


})

module.exports = mongoose.model("Users", userSchema)