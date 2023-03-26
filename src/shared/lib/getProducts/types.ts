export interface getProductsParam{
    pageIndex: number
    maxProductsOnPage: number
}

interface TProduct {
    /** id бренда */
    albumId: number
    /** id товара */
    id: number
    /** название товара */
    title: string
    /** большая картинка */
    url: string
    /** маленькая картинка */
    thumbnailUrl: string
}

interface TBrand {
    /** id бренда */
    id: number
    /** название бренда */
    title: string
}

export type TProducts = TProduct[]
export type TBrands = TBrand[]