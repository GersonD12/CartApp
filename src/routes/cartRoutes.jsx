import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalogView"
import { CardView } from "../components/cardView"
import { NotFound } from "../components/NotFund"

export const CartRoutes = ({handlerAddProductCard,cardItems,handlerDeleteProductCard}) => {
    return(
        <Routes>
                    <Route path="*" element={<NotFound></NotFound>}/>
                    <Route path="catalog" element={
                        //Colocar los productos que el usuario puede elegir, se envia una funcion para que el usurio agregue items 
                        <CatalogView handler={handlerAddProductCard}></CatalogView>
                    }>

                    </Route>
                    <Route path="cart" element={
                        //Tabla para ver los productos escogidos
                        cardItems?.length <= 0 ?
                            <div className="alert alert-warning">
                                No hay productos en el carrito
                            </div>
                            :
                            <div className="my-4 w-50">
                                <CardView items={cardItems} handlerDelete={handlerDeleteProductCard}></CardView>
                            </div>
                    }>
                    </Route>
                    <Route path="/" element={<Navigate to={'/catalog'}></Navigate>}></Route>
                    
                </Routes>
    )
}