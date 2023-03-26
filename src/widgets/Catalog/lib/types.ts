export interface IGetProductsParam{
    pageIndex: number
    maxProductsOnPage: number
}

export interface IProductProps {
    image: string
    name: string
    brand: string
    link: string
    id: number
}