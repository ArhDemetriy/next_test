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

// export const getStaticPaths: GetStaticPaths<IPathsParams> = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const users: IUserProps[] = await response.json()
//     return {
//         fallback: true,
//         paths: users.map(params => ({ params: { id: params.id.toString() } })),
//     }
// }

// export const getStaticProps: GetStaticProps = async () => {
//     return {  }
// }

export default function Index() {
    return (
        <PageTemplate>
        </PageTemplate>
    )
}