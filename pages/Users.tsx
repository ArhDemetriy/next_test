import { GetStaticProps } from "next/types"

interface IUsersProps{
    users: {
        name: string
        id: number
    }[]
}

export const getStaticProps: GetStaticProps<IUsersProps> = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return { props: { users } }
}

const Users: React.FC<IUsersProps> = p => {
    return <div>
        {p.users.map(user => {
            console.log('user', user)
            return <span key={user.id}>{user.name}</span>
        })}
    </div>
}
export default Users