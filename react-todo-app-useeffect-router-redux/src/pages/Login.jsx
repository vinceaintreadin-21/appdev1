import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [users, setUsers] = useState([])

    const nav = useNavigate()

    const SECRET = import.meta.env.VITE_APP_SECRET_PASSWORD 

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users?_limit=2')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    const handleLogin = () => {
        const foundUser = users.find(user => user.username === username)

        if (!foundUser) {
            alert('User not found')
            return
        }

        if (password !== SECRET) {
            alert ('Incorrect Password')
            return
        }

        localStorage.setItem('loggedInUser', JSON.stringify(foundUser))

        nav('/todos')
    } 
}