import { BRANDS_URL, PRODUCTS_URL } from "./const";
import { getProductsParam } from "./types";

export async function getProducts(p: getProductsParam) {
    const allProducts = getAllProducts()
}

export async function getAllProducts() {
    return fetch(PRODUCTS_URL)
}
