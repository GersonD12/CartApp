import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./itemsActions";

export const itemsReducer = (state = [], action) =>{
    //Los nomrbres del switch estan en las asociaciones de temsAcctions, son constantes
    switch (action.type) {
        case AddProductCart:
            return[
                ...state,
                {
                    //ya que el nombre es el mismo por eso lo dejamos a si
                    product: action.payload,
                    quantity: 1,
                }
            ]
        case UpdateQuantityProductCart:
            return state.map((i) => {
                    if (i.product.id === action.payload.id) {
                        //Modificar el objeto
                        //i.quantity = i.quantity + 1;
                        //Crear n nuevo objeto
                        return{
                            ...i,
                            quantity: i.quantity+1
                        }
                        // /@ \ Recordar que React es inmutable, los datos que cambian es una nueva intancia de los objetos /@\
                    }
                    //devuelve el objeto modificado
                    return i;
                });
        case DeleteProductCart:     
            return [...state.filter((i) => i.product.id !== action.payload)];

        default:
            return state;
    }
}

 //Este codigo es para agregar o actualiar para que el item aparezca al final de la lista
                // SetCardItmes(
                //     [//que agregue todo menos el que ya esta
                //     ...cardItems.filter((i)=>i.product.id !== product.id),
                //     {
                //         product,
                //         quantity:hasItem.quantity +1,
                //     }]
                // );