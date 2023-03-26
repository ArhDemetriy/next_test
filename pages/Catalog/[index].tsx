import { CatalogWidget, getProducts } from "@/src/widgets/Catalog"
import { PageTemplate } from "@/src/widgets/PageTemplate"
import { GetStaticProps, GetStaticPaths } from "next/types"

interface IPageProps {
    products: Awaited<ReturnType<typeof getProducts>>
}

type IPathsParams = {
    pageNumber: string
}

const MAX_PRODUCTS_ON_PAGE = 50

export const getStaticPaths: GetStaticPaths<IPathsParams> = async () => {
    const products = await getProducts()


    console.log('*******************')
    console.log('getStaticPaths', products.length)

    const pages = new Array(Math.ceil(products.length / MAX_PRODUCTS_ON_PAGE))

    return {
        fallback: 'blocking',
        paths: pages.map((_, index) => ({
            params: {
                pageNumber: (index + 1).toString(),
            }
        })),
    }
}

export const getStaticProps: GetStaticProps<IPageProps, IPathsParams> = async (p) => {
    const allProducts = await getProducts()

    console.log('*******************')
    console.log('getStaticProps', p, allProducts.length)

    const pageIndex = +(p.params?.pageNumber ?? '1') - 1

    const products = allProducts.slice(pageIndex * MAX_PRODUCTS_ON_PAGE, (pageIndex + 1) * MAX_PRODUCTS_ON_PAGE)

    return { props: { products } }
}

function Catalog(p: IPageProps) {
    console.log('Catalog', p.products[0])
    return (
        <PageTemplate>
            <CatalogWidget
                products={p.products}
            />
        </PageTemplate>
    )
}
export default Catalog