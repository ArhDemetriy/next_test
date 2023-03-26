import { PageTemplate } from '@/src/widgets/PageTemplate'
import { Catalog } from '@/src/widgets/Catalog'
import { GetStaticProps, GetStaticPaths } from "next/types"
import { getAllProducts } from '@/src/shared/lib/getProducts/getProducts'

interface IUserProps {
    name: string
    id: number
}

type IPathsParams = {
        id: string
    }

export const getStaticPaths: GetStaticPaths<IPathsParams> = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: IUserProps[] = await response.json()
    return {
        fallback: true,
        paths: users.map(params => ({ params: { id: params.id.toString() } })),
    }
}

export const getStaticProps: GetStaticProps<IUserProps, IPathsParams> = async ({ params }) => {
    console.log('getStaticProps:', params)
    const response = await getAllProducts()
    const props = await response.json()
    return { props }
}

export default function Index(p: IUserProps) {
    console.log('Index', p)

return (
    <PageTemplate>
        <Catalog
            products={[{
            image: 'https://via.placeholder.com/300/1ee8a4',
            brand: 'brand',
            link: 'https://via.placeholder.com/600/1ee8a4',
            name: 'name',
            tag: 'bonus',
            id: 0,
            }]}
        />
    </PageTemplate>
)
}
