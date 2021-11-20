import { useData } from "solid-app-router";
import { Accessor, Component, createSignal, For, Show } from "solid-js";
import { ProductRecord } from "../../ProductRecord";
import { Link } from "solid-app-router";
import ProductListing from "../ProductListing";
import Loader from "../Loader";

const Home: Component = () => {
  const products: Accessor<ProductRecord[]> = useData();

  return (
    <>
      <div class="max-w-4xl mx-auto">
        <For each={products()} fallback={<Loader />}>
          {(product) => <ProductListing product={product} />}
        </For>
      </div>
    </>
  );
};

export default Home;
