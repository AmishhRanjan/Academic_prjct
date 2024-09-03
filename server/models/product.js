import mongoose from 'mongoose';

//creating an object mapper:
const productSchema = new mongoose.Schema ({
        name: {
            type: String,
            required: true,
        },
        images: {
            type: Array,  //array coz we have multiple images
            required: true,
            default: [],
        },
        brand: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        reviews: {
            type: Array, 
            required: true,
            default: [],
        },
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        numberOfReviews: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
        productIsNew: {
            type: Boolean,
            required: true,
        },
        stripeId: {
            type: String,
        },
    },  
    {timestamps: true} //it means every time something is written to our database, it will collect the data and the exact time.
);

const Product = mongoose.model('Product', productSchema);

export default Product;