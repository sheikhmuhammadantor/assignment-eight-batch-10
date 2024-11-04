import Heading from "./Heading"

function Footer() {
    return (
        <section className="py-24">
            <Heading bool={false} heading="Gadget Heaven" paragraph="Leading the way in cutting-edge technology and innovation."></Heading>
            <footer className="footer text-gray-500 font-medium p-10 px-32 justify-items-center my-10 border-t">
                <nav>
                    <h6 className="text-black text-xl font-semibold mx-auto">Services</h6>
                    <a className="link link-hover mx-auto">Branding</a>
                    <a className="link link-hover mx-auto">Design</a>
                    <a className="link link-hover mx-auto">Marketing</a>
                    <a className="link link-hover mx-auto">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="text-black text-xl font-semibold mx-auto">Company</h6>
                    <a className="link link-hover mx-auto">About us</a>
                    <a className="link link-hover mx-auto">Contact</a>
                    <a className="link link-hover mx-auto">Jobs</a>
                    <a className="link link-hover mx-auto">Press kit</a>
                </nav>
                <nav>
                    <h6 className="text-black text-xl font-semibold mx-auto">Legal</h6>
                    <a className="link link-hover mx-auto">Terms of use</a>
                    <a className="link link-hover mx-auto">Privacy policy</a>
                    <a className="link link-hover mx-auto">Cookie policy</a>
                </nav>
            </footer>
        </section>
    )
}

export default Footer
