const mongoose = require('mongoose');

const cartSchema = mongoose.Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // quantity: {
    //     type: Number,
    //     default: 1
    // },
    // price: {
    //     type: Number,
    //     required: true
    // },
    products: [{
        name: String,
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: Number,
        price: Number,
        img: [
            {
                type: String
            }
        ]
      }]
},{
    timestamps: true,
    versionKey: false
});

const Cart = mongoose.model('Cart',cartSchema);

module.exports = Cart;