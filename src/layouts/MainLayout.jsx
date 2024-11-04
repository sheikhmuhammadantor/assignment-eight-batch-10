import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

function MainLayout() {
  return (
    <section className="max-w-[1440px] px-12 mx-auto mt-5">
      {/* NavBar */}
        <NavBar></NavBar>
        {/* Outlet - Dynamic Content; */}
        <section className="min-h-60">
        <Outlet></Outlet>
        </section>
        {/* Footer */}
        <Footer></Footer>
    </section>
  )
}

export default MainLayout
