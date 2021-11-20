import { useData } from "solid-app-router";
import { Accessor, Component,Show } from "solid-js";
import { ProductRecord } from "../../ProductRecord";
import Loader from "../Loader";

const Product: Component = () => {
  const product: Accessor<ProductRecord> = useData();

  return (
    <Show when={product()} fallback={<Loader />}>
      <main class="p-8 flex items-center">
        <img class="w-80 max-w-full" src={product().image} alt="" />
        <div class="max-w-[65ch] ml-auto flex flex-col gap-2">
          <h1 class="text-2xl mb-2 text-right">{product().title}</h1>
          <p class="text-gray-600 text-right">{product().description}</p>
          <p class="text-gray-800 text-right">${product().price}</p>
          <p class="text-gray-800 text-right">[{product().category}]</p>
        </div>
      </main>
    </Show>
  );
};

export default Product;
