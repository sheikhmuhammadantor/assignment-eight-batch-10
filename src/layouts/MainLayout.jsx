import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { useEffect, useState } from "react";
import axios from "axios";
import { CardDataContext, ProductDataContext, WishDataContext } from './context'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function MainLayout() {

  // CardDataContext Data;
  const [cardData, setCardData] = useState([]);

  // WishDataContext Data;
  const [wishData, setWishData] = useState([]);

  // ProductDataContext Data;
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios.get('/product.json')
      // .then(res => res.json())
      .then(data => setProductData(data.data))
  }, []);

  return (
    <CardDataContext.Provider value={[cardData, setCardData]}>
      <WishDataContext.Provider value={[wishData, setWishData]}>
        <ProductDataContext.Provider value={productData}>
          <section className="max-w-[1440px] px-12 mx-auto mt-5">
            <ToastContainer></ToastContainer>
            <NavBar></NavBar>

            <section>
              <Outlet></Outlet>
            </section>

            <Footer></Footer>
          </section>
        </ProductDataContext.Provider>
      </WishDataContext.Provider>
    </CardDataContext.Provider>
  )
}

export default MainLayout
