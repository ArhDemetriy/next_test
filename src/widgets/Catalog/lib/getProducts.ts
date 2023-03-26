import { getAllBrands, getAllProducts, TBrand } from "@/src/shared/lib/getProducts";
import type { IProductProps } from "./types";

export async function getProducts() {
    const [rawBrands, products] = await Promise.all([getAllBrands(), getAllProducts()])

    const brands: Map<TBrand['id'], TBrand['title']> = new Map()
    rawBrands.forEach(brand => brands.set(brand.id, brand.title))

    const result: IProductProps[] = []
    products.forEach(product => result.push({
        brand: brands.get(product.albumId) ?? '',
        image: product.thumbnailUrl,
        link: product.url,
        name: product.title,
        id: product.id,
    }))

    return result
}