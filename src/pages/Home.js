import Hero from "../components/Hero"
import Shopcontent from "../components/Shopcontent"
import Slider from "../components/Slider"
import Whyinvest from "../components/Whyinvest"

const Home = () => {
  return (
    <>
    <Hero/>
    <main className="w-[90%] mx-auto">
      <Shopcontent/>
      <Slider/>
    </main>
    <Whyinvest/>  
    </>
  )
}

export default Home