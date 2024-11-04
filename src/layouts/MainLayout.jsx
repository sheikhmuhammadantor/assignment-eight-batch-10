import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductDataContext = createContext([]);

function MainLayout() {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/product.json')
      // .then(res => res.json())
      .then(data => setData(data.data))
  }, []);

  return (
    <ProductDataContext.Provider value={data}>
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
    </ProductDataContext.Provider>
  )
}

export default MainLayout
