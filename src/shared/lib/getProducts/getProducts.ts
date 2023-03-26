import { BRANDS_URL, PRODUCTS_URL } from "./const";
import type { TBrands, TProducts } from "./types";

export async function getAllProducts() {
    try {
        return (await (await fetch(PRODUCTS_URL)).json()) as TProducts
    } catch (e) {
        console.log(e)
        return []
    }
}

export async function getAllBrands() {
    try {
        return (await (await fetch(BRANDS_URL)).json()) as TBrands
    } catch (e) {
        console.log(e)
        return []
    }
}