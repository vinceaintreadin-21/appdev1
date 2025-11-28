import { useNavigate } from "react-router-dom";

export default function Home() {
    const nav = useNavigate()

    const redirectLogin = () => {
        nav('/login')
    }

    return(
        <div>
            <h1>Welcome to the Todo App</h1>
            <button onClick={redirectLogin}>Go To Login</button>
        </div>
    )
}