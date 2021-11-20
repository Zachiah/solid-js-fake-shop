import { JSX } from "solid-js";
import { ProductRecord } from "../ProductRecord";
import { Link } from "solid-app-router";

const ProductListing = (props: { product: ProductRecord }): JSX.Element => {
  return (
    <article class="flex shadow-md m-4 rounded-lg">
      <img src={props.product.image} alt="" class="w-40 max-w-full" />
      <div class="ml-4">
        <h2 class="text-lg underline mb-2">
          <Link href={"/product/" + props.product.id}>
            {props.product.title}
          </Link>
        </h2>
        <p>{props.product.description}</p>
      </div>
    </article>
  );
};

export default ProductListing;