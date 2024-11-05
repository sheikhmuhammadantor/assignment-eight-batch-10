// import bannerImage from '../assets/banner.jpg'

function HeroImage() {
  return (
    <div className="border-2 rounded-2xl p-3 bg-white bg-opacity-30 absolute lg:-bottom-60 sm:-bottom-40 -bottom-28 left-1/2 transform -translate-x-1/2">
      <div className="bg-bannerImage bg-cover bg-center rounded-2xl lg:w-[700px] lg:h-[350px] sm:w-[420px] sm:h-[220px] w-[280px] h-[170px]"></div>
    </div>
  )
}

export default HeroImage
