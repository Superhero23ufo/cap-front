import React, { useContext } from "react";
import { ShppContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProudcts";

const Product = () => {
   const {all_product}= useContext(ShppContext);
   const {productId}= useParams ();
   const product = all_product.find((e)=> e.id === Number(productId))
    return(
        <div>
            <Breadcrum product = {product}/>
            <ProductDisplay product = {product} />
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    )
}

export default Product;