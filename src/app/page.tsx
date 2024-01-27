import Category from "@/components/Category";
import Contents from "@/components/Contents";
import LandindPage from "@/components/LandingPage";
import PopularFoods from "@/components/PopularFoods";
import WhyContents from "@/components/WhyContents";

export default function Home() {
  return (
    <div>
      <LandindPage />
      <Category />
      <Contents />
      <PopularFoods />
      <WhyContents />
    </div>
  );
}
