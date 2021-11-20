import { useData } from "solid-app-router";
import { Accessor, Component, createSignal, onMount, Suspense } from "solid-js";
import { ProductRecord } from "../../ProductRecord";
import Loader from "../Loader";
import SearchResults from "../SearchResults";

const Search: Component = () => {
  const [search, setSearch] = createSignal("");
  const products: Accessor<ProductRecord[]> = useData();

  let searchInput: HTMLInputElement | undefined = undefined;

  onMount(() => {
    searchInput && searchInput.focus();
  });

  return (
    <div class="p-2 max-w-2xl mx-auto">
      <input
        ref={searchInput}
        class="p-2 block w-full outline-none bg-gray-200 border-2"
        type="text"
        placeholder="Search"
        value={search()}
        onInput={(e) => {
          setSearch(e.currentTarget.value);
        }}
      />

      <Suspense fallback={<Loader />}>
        <SearchResults search={search()} products={products()} />
      </Suspense>
    </div>
  );
};

export default Search;
