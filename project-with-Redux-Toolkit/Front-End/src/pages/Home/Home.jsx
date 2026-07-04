import { useSelector } from "react-redux"

const Home = () => {
    const user = useSelector((state) => state.user.data);
    console.log(user)
    return (
        <div>
            <div>
                <h1 className="text-4xl">Welcome , {user.username} to Our <span className="text-emerald-600"> website.</span></h1>
            </div>

        </div>
    )
}

export default Home