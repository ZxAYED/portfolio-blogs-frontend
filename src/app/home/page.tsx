import About from "@/components/about/page";
import Banner from "@/components/banner/page";
import WhyMe from "@/components/whyMe/page";

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
