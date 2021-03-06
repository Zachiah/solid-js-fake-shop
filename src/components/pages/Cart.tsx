import { Component, For } from "solid-js";
import { cart } from "../../data/cart";
import { ProductRecord } from "../../ProductRecord";
import ProductListing from "../ProductListing";

const Cart : Component = () => {

    return (
        <For each={[...new Set(cart().map(item => item.id))].map(item => cart().find(i => i.id === item)) as ProductRecord[]} fallback={<p class="p-4">You don't have any items in your cart ):</p>}>
            {(item) => 
                <ProductListing product={item}/>
            }
        </For>
    )
}

export default Cart;