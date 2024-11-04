import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

function MainLayout() {
  return (
    <section className="max-w-[1440px] px-12 mx-auto mt-5">
        <NavBar></NavBar>
        <Outlet></Outlet>
        <h1 className='text-4xl text-center my-12 p-5 bg-green-500'>MainLayout Footer</h1>
    </section>
  )
}

export default MainLayout
