import Category from "@/components/Category";
import Contents from "@/components/Contents";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LandindPage from "@/components/LandingPage";
import PopularFoods from "@/components/PopularFoods";
import Slider from "@/components/Slider";
import WhyContents from "@/components/WhyContents";

export default function Home() {
    return( 
        <div> 
<Header/>
        <LandindPage/>
        <Category/>
        <Contents/>
        <PopularFoods/>
        <WhyContents/>
    <Footer/>  
        </div>)
}