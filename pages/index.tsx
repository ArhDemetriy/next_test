import { PageTemplate } from '@/src/widgets/PageTemplate'
import { Card } from '@/src/entities/Card'

export default function Home() {
  return (
    <PageTemplate>
      <Card
        image='https://via.placeholder.com/300/1ee8a4'
        brand='brand'
        link='https://via.placeholder.com/600/1ee8a4'
        name='name'
      />
    </PageTemplate>
  )
}
