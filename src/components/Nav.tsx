import { NavLink } from "solid-app-router";
import { Component, createSignal, onCleanup, Show } from "solid-js";

const Nav: Component = () => {
  const handleScroll = () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const [scrolled, setScrolled] = createSignal(false);

  window.addEventListener("scroll", handleScroll);

  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div class="sticky top-0">
        <nav class="flex bg-blue-400">
          <div class="ml-auto" />
          <NavLink href="/search" class="text-gray-600 bg-white no-underline p-2 pr-30 m-2 mr-4 rounded-md duration-200" activeClass="opacity-0 pointer-events-none" end>
            Search
          </NavLink>
          <NavLink
            class={"text-white no-underline p-4 duration-200"}
            activeClass="!text-black !bg-gray-400"
            href="/"
            end
          >
            Home
          </NavLink>
        </nav>
        <h1
          class="duration-300 absolute"
          classList={{
            "w-full p-8 text-2xl text-center bg-gray-200 top-14": !scrolled(),
            "left-0 top-0 p-4 w-40 text-center bg-gray-200": scrolled(),
          }}
        >
          The Fake Shop
        </h1>
      </div>

      <div class="h-30"></div>
    </>
  );
};

export default Nav;