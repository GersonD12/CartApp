import { getProduct } from "../services/productService";
import { useEffect, useState } from "react"
import { ProductCardView } from "./ProductCardView";

//Colocar los productos que el usuario puede elegir
export const CatalogView = ({handler}) => {
    //Productos que vera el usurio para poder elegir
    const [products, setProducts] = useState([]);
    //Extraemos la informacion de la appi
    useEffect(
        () => {
            setProducts(getProduct());
        }, []
    );
    return (
        <>
            {/* Un row tine espacio para 12 */}

            <div className="row">
                {
                    products.map(prod => (
                        <div className="col-4 my-2" key={prod.id}>
                            <ProductCardView
                                handler= {handler}
                                id={prod.id}
                                name={prod.name}
                                description={prod.description}
                                price={prod.price}
                            ></ProductCardView>
                        </div>
                    ))}


            </div>
        </>
    );
}