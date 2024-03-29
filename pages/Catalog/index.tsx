import { PageTemplate } from '@/src/widgets/PageTemplate'
import { CatalogWidget, getProducts, CatalogProps } from '@/src/widgets/Catalog'
import { GetStaticProps, GetStaticPaths } from "next/types"

interface IIndexProps {
    products: any
    id: number
}

type IPathsParams = {
    id: string
}

export const getStaticProps: GetStaticProps<CatalogProps, IPathsParams> = async ({ params }) => {
    const response = await getProducts()
    const props: CatalogProps = {
        products: response.slice(0, 19)
    }

    return { props }
}

export default function Catalog(p: IIndexProps) {
    console.log('Index:', p)
    return (
        <PageTemplate>
            <CatalogWidget
                products={p.products}
            />
        </PageTemplate>
    )
}