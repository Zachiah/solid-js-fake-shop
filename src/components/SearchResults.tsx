import { Component, createMemo, For, JSX } from "solid-js";
import { ProductRecord } from "../ProductRecord";
import ProductListing from "./ProductListing";

const SearchResults = (props: {
  search: string;
  products: ProductRecord[];
}): JSX.Element => {
  const results = createMemo(() => {
    const search = props.search.toLowerCase().split(" ");

    return props?.products?.filter((product) => {
      const searchableText =
        product.title.toLowerCase() + " " + product.description.toLowerCase();
        
      return search.every((word) => searchableText.includes(word));
    });
  });
  return (
    <For each={results()}>
      {(product) => <ProductListing product={product} />}
    </For>
  );
};

export default SearchResults;
