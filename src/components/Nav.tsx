import { NavLink } from "solid-app-router";
import { Component, createSignal, onCleanup, Show } from "solid-js";
import {FiSearch, FiShoppingCart,FiHome} from "solid-icons/fi"

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
          <NavLink href="/search" class="text-gray-600 bg-white no-underline p-2 pr-30 m-2 mr-4 rounded-md duration-200 hidden sm:block" activeClass="opacity-0 pointer-events-none" end>
            Search
          </NavLink>

          <NavLink
            class="text-white no-underline p-4 duration-200 sm:hidden"
            activeClass="!text-black !bg-gray-400"
            href="/search"
            end
          >
            <FiSearch class="w-6 h-6" />
          </NavLink>

          <NavLink
            class="text-white no-underline p-4 duration-200 flex items-center gap-2"
            activeClass="!text-black !bg-gray-400"
            href="/cart"
            end
          >
            <FiShoppingCart class="w-6 h-6 sm:(w-auto h-auto)"/>
            <span class="hidden sm:block">Cart</span>
          </NavLink>

          <NavLink
            class="text-white no-underline p-4 duration-200 flex items-center gap-2"
            activeClass="!text-black !bg-gray-400"
            href="/"
            end
          >
            <FiHome class="w-6 h-6 sm:(w-auto h-auto)"/>
            <span class="hidden sm:block">Home</span>
          </NavLink>
        </nav>
        <h1
          class="duration-300 absolute"
          classList={{
            "w-full p-8 text-2xl text-center bg-gray-200 top-14": !scrolled(),
            "left-0 top-0 p-4 w-34 text-center bg-gray-200": scrolled(),
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
