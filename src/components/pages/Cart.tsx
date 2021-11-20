import { Component, For } from "solid-js";
import { cart } from "../../data/cart";
import ProductListing from "../ProductListing";

const Cart : Component = () => {

    return (
        <For each={[...new Set(cart())]}>
            {(item) => 
                <ProductListing product={item}/>
            }
        </For>
    )
}

export default Cart;