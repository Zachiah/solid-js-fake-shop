import createLocalStorageSignal from "../hooks/createLocalStorageSignal";

export const [cart, setCart] = createLocalStorageSignal<string[]>('cart',[]);