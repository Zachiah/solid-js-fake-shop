import { Component } from "solid-js";

const Loader: Component = () => {
  return (
    <div class="flex justify-center items-center mt-8">
      <div class="animate-spin rounded-full h-32 w-32 border-8 border-gray-200 border-b-blue-400 flex justify-center items-center">
        <div class="animate-spin rounded-full h-20 w-20 border-8 border-gray-200 border-b-blue-400 flex justify-center items-center"></div>
      </div>
    </div>
  );
};

export default Loader;
