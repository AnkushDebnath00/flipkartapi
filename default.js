import { products } from './constants/data.js';
import Product from './model/productSchema.js'

const defaultData = async () => {
    try {
        await Product.insertMany(products)
        console.log('data imported successfully')
    } catch (error) {
        console.log('Error while inserting default data.', error.message)
    }
}

export default defaultData;