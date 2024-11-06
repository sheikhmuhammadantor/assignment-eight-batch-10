import Heading from "./Heading"

function Footer() {
    return (
        <section className="py-24">
            <Heading bool={false} heading="Gadget Heaven" paragraph="Leading the way in cutting-edge technology and innovation."></Heading>
            <footer className="footer text-gray-500 font-medium p-10 px-32 justify-items-center my-10 border-t">
                <nav>
                    <h6 className="text-black text-xl font-semibold mx-auto">Services</h6>
                    <a className="link link-hover mx-auto">Product Support</a>
                    <a className="link link-hover mx-auto">Order Tracking</a>
                    <a className="link link-hover mx-auto">Shipping & Delivery</a>
                    <a className="link link-hover mx-auto">Returns</a>
                </nav>
                <nav>
                    <h6 className="text-black text-xl font-semibold mx-auto">Company</h6>
                    <a className="link link-hover mx-auto">About Us</a>
                    <a className="link link-hover mx-auto">Careers</a>
                    <a className="link link-hover mx-auto">Contact</a>
                </nav>
                <nav>
                    <h6 className="text-black text-xl font-semibold mx-auto">Legal</h6>
                    <a className="link link-hover mx-auto">Terms of Service</a>
                    <a className="link link-hover mx-auto">Privacy policy</a>
                    <a className="link link-hover mx-auto">Cookie policy</a>
                </nav>
            </footer>
        </section>
    )
}

export default Footer
