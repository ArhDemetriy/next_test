import { GetStaticProps, GetStaticPaths } from "next/types"

interface IUserProps{
    name: string
    id: number
}

type IPathsParams =
    & { [k in string]: string }
    & {
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

export const getStaticProps: GetStaticProps<IUserProps, IPathsParams> = async ({params}) => {
    console.log('getStaticProps:', params)
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params?.id ?? 0}`)
    const props = await response.json()
    return { props }
}

const User: React.FC<IUserProps> = p => {
    console.log('User:', p)

    return <div>
        <span key={p.id}>{p.name}</span>
    </div>
}
export default User