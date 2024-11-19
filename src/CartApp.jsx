

import { useItemsCard } from "./hooks/useItemsCard"
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/cartRoutes";
import { Footer } from "./components/Footer";


export const CartApp = () => {

    const { cardItems, handlerAddProductCard, handlerDeleteProductCard } = useItemsCard();
    
    return (
        <>
            <Navbar></Navbar>
            <div className="container my-4">
                <h3>Cart AppS</h3>
                <CartRoutes 
                cardItems={cardItems} 
                handlerAddProductCard={handlerAddProductCard} 
                handlerDeleteProductCard={handlerDeleteProductCard} ></CartRoutes>
            </div>
            <Footer></Footer>

        </>
    )
}
//Gerson