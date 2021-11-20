import { useRoutes, Link, RouteDataFuncArgs } from "solid-app-router";
import { Component, createResource, createSignal, lazy } from "solid-js";
import Nav from "./Nav";

const fetchProducts = () =>
  fetch("https://fakestoreapi.com/products?limit=15").then((res) => res.json());

const fetchProduct = (id: string) => {
  console.log(id);
  return fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());
}

const App: Component = () => {
  const routes = [
    {
      path: "/",
      component: lazy(() => import("./pages/Home")),
      data() {
        const [products] = createResource(fetchProducts);
        return products;
      },
    },
    {
      path: "/product/:id",
      component: lazy(() => import("./pages/Product")),
      data(args: RouteDataFuncArgs) {
        const [product] = createResource(() => args.params.id, fetchProduct);
        console.log(product())
        return product;
      },
    },
    {
      path: "/search",
      component: lazy(() => import("./pages/Search")),
      data() {
        const [products] = createResource(fetchProducts);
        return products;
      }
    },
    {
      path: "/cart",
      component: lazy(() => import("./pages/Cart")),
    }
  ];

  const Routes = useRoutes(routes);

  return (
    <>
      <Nav />

      <Routes />
    </>
  );
};

export default App;
