import { Accessor, createSignal } from "solid-js";

interface Json {
    [x: string]: string|number|boolean|Date|Json|JsonArray;
}
interface JsonArray extends Array<string|number|boolean|Date|Json|JsonArray> { }


export default function createLocalStorageSignal<T extends Json[keyof Json]>(key: string, defaultVal: T): [get: Accessor<T>, set: ((val: T extends Function ? never : T) => void)] {
    const storage = window.localStorage;
    const initialValue: T = JSON.parse(storage.getItem(key) ?? '{}').value ?? defaultVal;

    const [value,setValue] = createSignal<T>(initialValue);

    const newSetValue = (newValue: T extends Function ? never : T) => {
            setValue(newValue);
            storage.setItem(key, JSON.stringify({value: newValue}));
        }

    return [
        value,
        newSetValue
    ]
}