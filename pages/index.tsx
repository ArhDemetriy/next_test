import { PageTemplate } from '@/src/widgets/PageTemplate'
import { Catalog } from '@/src/widgets/Catalog'

export default function Home() {
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
