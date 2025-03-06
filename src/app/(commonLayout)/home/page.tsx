import About from "@/components/about/page";
import Banner from "@/components/banner/page";
import WhyMe from "@/components/whyMe/page";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Home - My Portfolio`,
    description: `Home page for My Portfolio`,
  };
}
const Home = () => {
  return (
    <div className="mt-16 mx-w-7xl mx-auto  overflow-hidden">
      <Banner></Banner>
      <About></About>
      <WhyMe></WhyMe>
    </div>
  );
};

export default Home;
