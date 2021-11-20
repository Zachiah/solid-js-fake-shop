import { createMemo, JSX, Show } from "solid-js";
import { ProductRecord } from "../ProductRecord";
import { Link } from "solid-app-router";
import { FiShoppingCart, FiMinus, FiPlus } from "solid-icons/fi";
import { cart, setCart } from "../data/cart";

const ProductListing = (props: { product: ProductRecord }): JSX.Element => {
  const amount = createMemo(() => {
    let newAmount = 0;
    cart().forEach((item) => {
      if (item.id === props.product.id) {
        newAmount++;
      }
    });

    return newAmount;
  });
  return (
    <article class="shadow-md m-4 rounded-lg sm:flex">
      <img src={props.product.image} alt="" class="w-full mb-4 sm:w-40 max-w-full object-contain" />
      <div class="ml-4 flex-grow">
        <h2 class="text-lg mb-2 w-full flex">
          <Link href={"/product/" + props.product.id} class="underline mr-4">
            {props.product.title}
          </Link>

          <div class="flex gap-2 ml-auto items-center">
            <Show
              when={amount() > 0}
              fallback={
                <button
                  class="block duration-200 mr-4 hover:text-gray-800 focus:(text-gray-200 bg-gray-800) p-2"
                  onClick={() => {
                    setCart(cart().concat(props.product));
                  }}
                >
                  <FiShoppingCart />
                </button>
              }
            >
              <button
                class="block duration-200 hover:text-gray-800 focus:(text-gray-200 bg-gray-800) p-2"
                onClick={() => {
                  const index = cart().findIndex(
                    (item) => item.id === props.product.id
                  );

                  setCart(
                    cart()
                      .slice(0, index)
                      .concat(cart().slice(index + 1))
                  );
                }}
              >
                <FiMinus />
              </button>
              <p>{amount()}</p>
              <button
                class="block duration-200 mr-4 hover:text-gray-800 focus:(text-gray-200 bg-gray-800) p-2"
                onClick={() => {
                  setCart(cart().concat(props.product));
                }}
              >
                <FiPlus />
              </button>
            </Show>
          </div>
        </h2>
        <p>{props.product.description}</p>
      </div>
    </article>
  );
};

export default ProductListing;
