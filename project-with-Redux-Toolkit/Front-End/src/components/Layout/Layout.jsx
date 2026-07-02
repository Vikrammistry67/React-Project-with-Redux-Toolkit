import { Outlet } from "react-router-dom"
import Container from "../NavContainer/Container"
import Footer from "../FooterComponent/Footer"

const Layout = () => {
    return (
        <div className="w-screen h-screen">
            <div className="w-screen h-[10vh] bg-sky-700  flex items-center justify-center"> <Container /></div>
            <div className="w-screen h-[80vh]  bg-zinc-900 flex items-center justify-center" ><Outlet /></div>
            <div className="w-screen h-[10vh] bg-green-700 flex items-center justify-center"><Footer /></div>
        </div>
    )
}


export default Layout