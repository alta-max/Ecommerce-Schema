const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 5,
        max: 10,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passsword: {
        type: String,
        required: true,
        min: 5,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        country: String,
        city: String,
        Street: String
    },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
})

module.exports = mongoose.model("User", UserSchema);