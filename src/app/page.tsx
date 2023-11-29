import Category from "@/components/Category";
import Contents from "@/components/Contents";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LandindPage from "@/components/LandingPage";
import PopularFoods from "@/components/PopularFoods";

export default function Home() {
    return( 
        <div>
    <Header/>
        <LandindPage/>
        <Category/>
        <Contents/>
        <PopularFoods/>
    <Footer/>
        </div>)
}