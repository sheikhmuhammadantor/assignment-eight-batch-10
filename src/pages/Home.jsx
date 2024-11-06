import { Helmet } from "react-helmet"
import Hero from "../components/Hero"
import ProductBody from "../components/Products/ProductBody"

function Home() {
  return (
    <section>
      <Helmet>
        <title>GadgetHeaven✨ | Take away</title>
      </Helmet>
      <Hero></Hero>
      <ProductBody></ProductBody>
    </section>
  )
}

export default Home
