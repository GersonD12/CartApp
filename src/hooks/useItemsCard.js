import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";

const initialCardItems = JSON.parse( sessionStorage.getItem('cart')) || [];

export const  useItemsCard = () =>{
        //inicializamos cadrITems con 0 elementos que son los que estan en el carrito del usuario
    //const [cardItems, setCardItmes] = useState(initialCardItems);

    const [cardItems, dispach]= useReducer (itemsReducer, initialCardItems);

    //Funcion para agregar items, dependiendo si ya estan en la lista o no
    const handlerAddProductCard = (product) => {
        const hasItem = cardItems.find((i) => i.product.id === product.id);
        if (hasItem) {
               dispach(
                {
                    type: UpdateQuantityProductCart,
                    payload: product,
                }
               )
        } else {
            dispach({
                type: AddProductCart,
                payload: product
            });
        }


    }

    //funcion padre
    //Eliminar un produccto de la lista
    const handlerDeleteProductCard = (id) => {
            //se pasan todos menos id
            dispach({
                type: DeleteProductCart,
                payload: id,
            });
        

    }
    //Mantener actualizada la lista de elementos en el sessionStorage despues de realizar una modificacion
    //De esta manera se controla mejor la actualizacion del localstorage a comparacion de tener en el cardView en un  useEffect
    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cardItems));
    }, [cardItems]);
    
    return{
        cardItems,
        handlerAddProductCard,
        handlerDeleteProductCard
    }
}