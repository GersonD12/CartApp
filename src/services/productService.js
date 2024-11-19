import { products } from "../data/productos"

export const getProduct = () =>{
    return products
}

export const calculateTotal = (items) => {
    return items.reduce((acumulator, item)=> acumulator + item.product.price * item.quantity,0)
}